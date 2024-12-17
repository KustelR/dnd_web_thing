import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

async function initI18next(lng: string | undefined, ns: string | undefined) {
  const i18nInstance = createInstance();

  const options = getOptions(lng, ns);

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`public/locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));

  return { i18nInstance, options };
}

export async function useTranslation(
  lng: string | undefined,
  ns: string | undefined,
) {
  const { i18nInstance, options } = await initI18next(lng, ns);

  return {
    t: i18nInstance.getFixedT(options.lng, options.ns),
    i18n: i18nInstance,
  };
}
