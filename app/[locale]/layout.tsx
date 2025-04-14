import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Fonts
import { Geist, Geist_Mono } from "next/font/google";
// Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getDirection } from "@/i18n-confige";
import { getMessages } from "next-intl/server";
// Providers
import ThemeProvider from "@/providers/ThemeProvider";
import StoreProvider from "@/providers/StoreProvider";
import ThemeDataProvider from "@/context/theme.context";
// Image Open Graph
import imageGraph from "@/public/icons/logo.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce El-Matger",
  description: "Created By Mohamed Salah",
  openGraph: {
    locale: "en_US",
    images: imageGraph,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      dir={getDirection(locale) === "rtl" ? "rtl" : "ltr"}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ThemeDataProvider>{children}</ThemeDataProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
