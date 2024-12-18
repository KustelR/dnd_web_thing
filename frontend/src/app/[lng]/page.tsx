import { Header, Footer } from "@/components";
import { useTranslation } from "@/app/i18n/index";
import Chat from "@/components/chat";

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
    <div className="h-full">
      <Chat lng={lng}></Chat>
    </div>
  );
}
