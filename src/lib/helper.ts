import { cookies } from "next/headers";

export async function getRequestConfig() {
  const cookieStore = await cookies();
  const token: string = cookieStore.get("accessToken")?.value || "";
  const refreshToken: string = cookieStore.get("refreshToken")?.value || "";
  return {
    token,
    refreshToken,
  };
}
export async function setRequestConfig(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", token);
}
