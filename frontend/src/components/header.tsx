import React from "react";
import Image from "next/image";
import { Nav } from "@/components";
import { useTranslation } from "@/app/i18n";

export default async function Header(props: { lng: string }) {
  const { lng } = props;
  const { t } = await useTranslation(lng, undefined);
  return (
    <header className="place-items-end p-1 h-fit w-full Navbar relative bg-neutral-800 flex-row justify-start items-start flex overflow-hidden">
      <div data-layer="Logo" className="flex place-items-end h-full">
        <Image
          height={50}
          width={50}
          className="flex-bottom"
          src="/favicon.ico"
          alt=""
        ></Image>
      </div>
      <Nav lng={lng} data-layer="Navbar" className="mt-auto"></Nav>
    </header>
  );
}
