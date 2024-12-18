import React from "react";
import { Nav } from "@/components";
import { useTranslation } from "@/app/i18n";

export default async function Header(props: { lng: string }) {
  const { lng } = props;
  const { t } = await useTranslation(lng, undefined);
  return (
    <header className="flex p-2  border-b-2 dark:border-gray-600">
      <h1 className="font-bold pr-4">{t("title")}</h1>
      <Nav lng={lng}></Nav>
    </header>
  );
}
