import { cookies } from "next/headers";

export async function getRequestConfig(): Promise<{
  token: string;
  refreshToken: string;
}> {
  const cookieStore = await cookies();
  const token: string = cookieStore.get("accessToken")?.value || "";
  const refreshToken: string = cookieStore.get("refreshToken")?.value || "";
  return {
    token,
    refreshToken,
  };
}
export async function setRequestConfig(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", token);
}
