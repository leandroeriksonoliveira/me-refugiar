"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  clearAdminSession,
  createAdminSession,
  isOrganization,
  passwordMatches,
} from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { updatePrayerStatus } from "@/lib/prayer-store";
import type { PrayerStatus } from "@/types/prayer";

export async function loginOrganization(formData: FormData) {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const password = String(formData.get("password") ?? "");
  if (!rateLimit(`admin-login:${ip}`, 8, 15 * 60 * 1000)) {
    redirect("/admin?error=limit");
  }

  if (!passwordMatches(password)) {
    redirect("/admin?error=auth");
  }

  await createAdminSession();
  redirect("/admin/oracao");
}

export async function logoutOrganization() {
  await clearAdminSession();
  redirect("/admin");
}

export async function setPrayerStatus(id: string, status: PrayerStatus) {
  if (!(await isOrganization())) {
    redirect("/admin");
  }

  await updatePrayerStatus(id, status);
  revalidatePath("/admin/oracao");
}
