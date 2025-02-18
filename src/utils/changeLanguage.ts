"use server";

import { cookies } from "next/headers";

export async function getLanguage(): Promise<string> {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has("language");
  const lang =
    hasCookie && cookieStore.get("language")
      ? cookieStore.get("language")!.value
      : "en";
  return lang;
}

export async function changeLanguage(): Promise<void> {
  const cookieStore = await cookies();

  const lang = await getLanguage();

  if (lang === "ar") {
    cookieStore.set("language", "en");
  } else {
    cookieStore.set("language", "ar");
  }
}
