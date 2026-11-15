import { cookies } from "next/headers";
import { LANG_COOKIE, type Lang } from "./lang-shared";

/** The visitor's chosen language; Japanese unless they switched to English. */
export async function getLang(): Promise<Lang> {
  const value = (await cookies()).get(LANG_COOKIE)?.value;
  return value === "en" ? "en" : "ja";
}
