import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function nav(props: { lng: string; className: string }) {
  const { lng, className } = props;
  const { t } = await useTranslation(lng, undefined);

  const liClassName =
    " uppercase" +
    " text-white" +
    " text-3xl" +
    " font-normal" +
    " font-['Inter']" +
    " hover:bg-white" +
    " hover:bg-opacity-10" +
    " items-baseline flex";

  return (
    <nav className={className}>
      <ul className="flex flex-grow [&>*]:mr-2 [&>*]:px-2 [&>*]:bg-black [&>*]:dark:bg-white  [&>*]:bg-opacity-0 [&>*]:dark:bg-opacity-0">
        <li className={liClassName}>
          <Link href={`/${lng}/`}>{t("nav_home")}</Link>
        </li>
        <li className={liClassName}>
          <Link href={`/${lng}/play`}>{t("nav_play")}</Link>
        </li>
        <li className={liClassName}>
          <Link href={`/${lng}/master`}>{t("nav_master")}</Link>
        </li>
      </ul>
    </nav>
  );
}
