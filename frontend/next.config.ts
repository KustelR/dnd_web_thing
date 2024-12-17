import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en-US", "ru-RU"],
    defaultLocale: "en-US",
    localeDetection: false,
  }
  /* config options here */
};

export default nextConfig;
