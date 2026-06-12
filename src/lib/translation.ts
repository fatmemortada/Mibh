import en from "@/messages/en.json";
import ur from "@/messages/ur.json";
import ar from "@/messages/ar.json";

type Messages = typeof en;

const messages: Record<string, Messages> = { en, ur, ar };

export function translate(locale: string, namespace: keyof Messages) {
  const ns = (messages[locale] || messages.en)[namespace] as Record<string, string>;
  return (key: string): string => ns[key] || key;
}
