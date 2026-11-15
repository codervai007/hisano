import { getLang } from "@/lib/lang";
import * as labels from "./labels";
import * as ja from "./site";
import { en } from "./en";

const jaContent = { ...ja, ...labels };
export type Content = typeof jaContent;

/**
 * All copy for the current request, in the visitor's language. English
 * overrides the Japanese text; images and links are shared.
 */
export async function getContent() {
  const lang = await getLang();
  const content: Content = lang === "en" ? { ...jaContent, ...en } : jaContent;
  return { ...content, lang };
}
