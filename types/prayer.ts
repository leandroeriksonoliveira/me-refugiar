export type PrayerStatus = "new" | "prayed";

export type PrayerRequest = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  status: PrayerStatus;
};
