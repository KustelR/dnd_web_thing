import { Header, Footer } from "@/components";
import { useTranslation } from "@/app/i18n/index";
import Chat from "@/components/chat";

import Image from "next/image";
import map from "../../../public/map.png";

export default async function Page({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, undefined);

  return (
    <div className="h-full w-full  bg-[#353535] flex-col justify-center items-center gap-[30px] inline-flex overflow-hidden">
      <div
        data-layer="Post"
        className="px-2 w-[1200px] h-[844px] relative bg-[#3e3e3e] flex-col justify-start items-start flex overflow-hidden"
      >
        <div
          data-layer="image"
          className="Image w-[1200px] h-[724px] relative  overflow-hidden"
        >
          <Image
            alt="img here"
            fill
            data-layer="Sword-Coast-Map_HighRes 1"
            className="opacity-25"
            src={map}
          />
          <div
            data-layer="Ellipse 1"
            className="Ellipse1 w-[1000px] h-[1000px] left-[-276px] top-[-158px] absolute bg-black/20 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          />
          <h2
            data-layer="DND THING"
            className="uppercase left-[28px] top-[279px] absolute text-white text-8xl font-normal font-['Jacques Francois Shadow']"
          >
            {t("title")}
          </h2>
          <p
            data-layer="Just how did you get there?"
            className="w-[667px] left-[28px] top-[393px] absolute text-white text-[40px] font-normal font-['Jacques Francois']"
          >
            {t("welcome_bigtext")}
          </p>
        </div>
        <div className="flex">
          <h3
            data-layer="Welcome to my website and thanks for the visit tho. I just needed to write something here"
            className="mr-4 w-[979px] h-[126px] text-white text-4xl font-normal font-['Jacques Francois']"
          >
            Welcome to my website and thanks for the visit tho. I just needed to
            write something here
          </h3>
          <span
            data-layer="19.12.2024 3:13 PM"
            className="122024313Pm text-white text-4xl font-normal font-['Jacques Francois']"
          >
            19.12.2024 3:13 PM
          </span>
        </div>
        <div>
          <p>{t("loremipsum1")}</p>
        </div>
      </div>
    </div>
  );
}
