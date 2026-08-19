import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { get, list, put } from "@vercel/blob";
import type { PrayerRequest, PrayerStatus } from "@/types/prayer";

const prefix = "prayer/";

function useBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function localDir() {
  return join(process.cwd(), "data", "prayer");
}

function pathnameFor(id: string) {
  return `${prefix}${id}.json`;
}

async function readStream(stream: ReadableStream<Uint8Array>) {
  return JSON.parse(await new Response(stream).text()) as PrayerRequest;
}

async function saveLocal(request: PrayerRequest) {
  const dir = localDir();
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, `${request.id}.json`), JSON.stringify(request, null, 2));
}

async function listLocal() {
  const dir = localDir();
  try {
    const files = await readdir(dir);
    const rows = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const raw = await readFile(join(dir, file), "utf8");
          return JSON.parse(raw) as PrayerRequest;
        }),
    );
    return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch {
    return [];
  }
}

export async function createPrayerRequest(input: {
  name: string;
  message: string;
}) {
  if (process.env.VERCEL && !useBlob()) {
    throw new Error("Pedidos de oração indisponíveis. Configure o armazenamento da organização.");
  }

  const request: PrayerRequest = {
    id: crypto.randomUUID(),
    name: input.name,
    message: input.message,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  if (useBlob()) {
    await put(pathnameFor(request.id), JSON.stringify(request), {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/json",
    });
  } else {
    await saveLocal(request);
  }

  return request;
}

export async function listPrayerRequests() {
  if (useBlob()) {
    const { blobs } = await list({ prefix });
    const rows = await Promise.all(
      blobs.map(async (blob) => {
        const result = await get(blob.pathname, { access: "private" });
        if (!result || result.statusCode !== 200 || !result.stream) return null;
        return readStream(result.stream);
      }),
    );
    return rows
      .filter((row): row is PrayerRequest => Boolean(row))
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  if (process.env.VERCEL) return [];
  return listLocal();
}

export async function updatePrayerStatus(id: string, status: PrayerStatus) {
  const requests = await listPrayerRequests();
  const current = requests.find((row) => row.id === id);
  if (!current) throw new Error("Pedido não encontrado.");

  const next = { ...current, status };

  if (useBlob()) {
    await put(pathnameFor(id), JSON.stringify(next), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
  } else {
    await saveLocal(next);
  }

  return next;
}
