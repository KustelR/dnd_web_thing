import React from "react";
import { Nav } from "@/components";
import { useTranslation } from "@/app/i18n";

export default async function Header(props: { lng: string }) {
  const { lng } = props;
  const { t } = await useTranslation(lng, undefined);
  return (
    <header className="p-2 bg-emerald-700 bg-opacity-10">
      <h1 className="font-bold">{t("title")}</h1>
      <Nav lng={lng}></Nav>
    </header>
  );
}
