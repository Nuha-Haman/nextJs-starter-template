"use server";

import { cookies } from "next/headers";

export async function changeLanguage() {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has("language");
  const lang = hasCookie ? cookieStore.get("language").value : "en";

  if (lang === "ar") {
    cookieStore.set("language", "en");
  } else {
    cookieStore.set("language", "ar");
  }
}
