import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "mr_org_session";
const maxAge = 60 * 60 * 24 * 7;

function secret() {
  return process.env.PRAYER_ADMIN_SECRET || process.env.PRAYER_ADMIN_PASSWORD || "";
}

export function isAdminPasswordConfigured() {
  return Boolean(process.env.PRAYER_ADMIN_PASSWORD);
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function passwordMatches(input: string) {
  const expected = process.env.PRAYER_ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  return safeEqual(input, expected);
}

export async function createAdminSession() {
  const expires = String(Date.now() + maxAge * 1000);
  const payload = `v1.${expires}`;
  const store = await cookies();
  store.set(cookieName, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(cookieName);
}

export async function isOrganization() {
  if (!secret()) return false;
  const store = await cookies();
  const value = store.get(cookieName)?.value;
  if (!value) return false;

  const [version, expires, mac] = value.split(".");
  if (version !== "v1" || !expires || !mac) return false;
  if (Number(expires) < Date.now()) return false;

  const payload = `${version}.${expires}`;
  return safeEqual(mac, sign(payload));
}
