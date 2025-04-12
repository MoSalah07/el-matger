import { i18n } from "@/i18n-confige";
import { JSX } from "react";
import HomeCarousel from "@/components/carousel/HomeCarousel";

export default async function Home(): Promise<JSX.Element> {
  return (
    <section>
      <HomeCarousel />
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
