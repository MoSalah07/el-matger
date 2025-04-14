import { i18n } from "@/i18n-confige";
import { JSX } from "react";
import HomeCarousel from "@/components/carousel/HomeCarousel";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/shared/product/product.slider";
import { IProduct } from "@/interfaces";
import { getTranslations } from "next-intl/server";
import fetchItemsHome from "@/lib/fetchItemsHome";
import { HomeCard } from "@/components/shared/home/home.card";

export default async function Home(): Promise<JSX.Element> {
  const t = await getTranslations("Home");
  const { bestSellingProducts, cards, todaysDeals } = await fetchItemsHome();

  return (
    <>
      <HomeCarousel />
      <div className="md:p-4 md:space-y-4">
        <HomeCard cards={cards} />
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider
              title={t("Today's Deals")}
              products={todaysDeals as IProduct[]}
            />
          </CardContent>
        </Card>
        <Card className="w-full rounded-none">
          <CardContent className="w-full">
            <ProductSlider
              products={bestSellingProducts as IProduct[]}
              title={t("Best Selling Products")}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<
  {
    locale: string;
  }[]
> {
  return i18n.locales.map((locale) => ({ locale: locale.code }));
}
