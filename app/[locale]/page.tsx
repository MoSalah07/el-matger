import { useTranslations } from "next-intl";
import { i18n } from "@/i18n-confige";
import { JSX } from "react";

export default function Home(): JSX.Element {
  const t = useTranslations("Header");

  return (
    <section>
      <h1>hello SSG</h1>
      <h2>{t("Hello")}</h2>
    </section>
  );
}

export async function generateStaticParams(): Promise<
  {
    locale: string;
  }[]
> {
  return i18n.locales.map((locale) => ({ locale: locale.code }));
}
