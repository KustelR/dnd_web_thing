import React from "react";
import { Nav } from "@/components";
import { useTranslation } from "@/app/i18n";

export default async function Header(props: { lng: string }) {
  const { lng } = props;
  const { t } = await useTranslation(lng, undefined);
  return (
    <header>
      <h1>{t("title")}</h1>
    </header>
  );
}
