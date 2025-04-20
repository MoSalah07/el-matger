import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const publicRoutes = ["/api"]; // قائمة الروابط التي لا تحتاج إلى لغة

// إنشاء `next-intl` middleware
const intlMiddleware = createIntlMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export async function middleware(req: NextRequest) {
  // استثناء NextAuth.js من `intlMiddleware`
  if (req.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  if (publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.next(); // اسمح بتمرير الطلب بدون تعديل
  }

  // تنفيذ `intlMiddleware` ولكن **دون الإرجاع المبكر**
  const res = intlMiddleware(req) || NextResponse.next();

  const userAgent = req.headers.get("user-agent");
  if (userAgent?.includes("bot")) {
    return NextResponse.redirect(new URL("/not-allowed", req.url));
  }

  const secret_Key = process.env.NEXTAUTH_SECRET;
  const session = await getToken({ req, secret: secret_Key });

  const { pathname } = req.nextUrl;
  const protectedRoutes = [
    "/profile",
    "/my-appointments",
    "/verify",
    "/api/dashboard",
  ];

  if (!session && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    session &&
    (pathname.includes("/auth") || pathname.includes("/sign-in"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

// ضبط `matcher` لدعم المسارات المترجمة
export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // استثناء الملفات الثابتة
    "/sign-in",
    "/sign-up",
  ],
};
