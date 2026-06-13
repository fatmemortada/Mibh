import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ur", "ar", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
});
