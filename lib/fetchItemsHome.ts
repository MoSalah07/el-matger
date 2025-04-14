import {
  getAllCategories,
  getProductsByTag,
  getProductsForCard,
} from "@/actions/product.action";

import { toSlug } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export default async function fetchItemsHome() {
  const t = await getTranslations("Home");

  const [todaysDeals] = await getProductsByTag({
    tage: "todays-deal",
  });
  const [bestSellingProducts] = await getProductsByTag({
    tage: "best-seller",
  });

  const categories = (await getAllCategories()).slice(0, 4);

  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
  });
  const featureds = await getProductsForCard({
    tag: "featured",
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
  });

  const cards = [
    {
      title: t("Categories to explore"),
      link: {
        text: t("See More"),
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: t("Explore New Arrivals"),
      items: newArrivals,
      link: {
        text: t("View All"),
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: t("Discover Best Sellers"),
      items: bestSellers,
      link: {
        text: t("View All"),
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: t("Featured Products"),
      items: featureds,
      link: {
        text: t("Shop Now"),
        href: "/search?tag=new-arrival",
      },
    },
  ];

  return { cards, todaysDeals, bestSellingProducts };
}
