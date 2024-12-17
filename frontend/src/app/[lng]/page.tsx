import { Header, Footer } from "@/components";
import { useTranslation } from "@/app/i18n/index";

export default async function Page({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { lng } = params;
  const { t } = await useTranslation(lng, undefined);

  return (
    <div className="">
      <Header></Header>
      {t("title")};<Footer></Footer>
    </div>
  );
}
