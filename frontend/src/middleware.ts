import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import type { NextRequest } from "next/server";
import { fallbackLng, languages, cookieName } from "@/app/i18n/settings";
import * as fs from "fs/promises";
import path from "path";
import loadImage from "@/scripts/loadImage";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.basePath);
  let lng: string | null | undefined;

  if (req.cookies.has(cookieName)) {
    // @ts-ignore-error  checked in if statement above
    lng = req.cookies.get(cookieName).value;
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  if (!lng) {
    lng = fallbackLng;
  }

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith(`_next`)
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    // @ts-expect-error  checked in if statement above
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }

    return response;
  }

  return NextResponse.next();
}
