import {
  getAllCategories,
  getAllProductsBySearchParams,
  getAllTags,
} from "@/actions/product.action";
import CollapsibleOnMobile from "@/components/shared/collapsible.on.mobile";
import ProductSortSelector from "@/components/shared/product/product.sort.selector";
import { Button } from "@/components/ui/button";
import { getFilterUrl, toSlug } from "@/lib/utils";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react";
import Container from "@/components/shared/Container";
import { IProduct } from "@/interfaces";
import ProductCard from "@/components/shared/product/product.card";
import Pagination from "@/components/shared/pagination";

const sortOrders = [
  { value: "price-low-to-high", name: "Price: Low to high" },
  { value: "price-high-to-low", name: "Price: High to low" },
  { value: "newest-arrivals", name: "Newest arrivals" },
  { value: "best-selling", name: "Best selling" },
];

const prices = [
  {
    name: "$1 to $20",
    value: "1-20",
  },
  {
    name: "$21 to $50",
    value: "21-50",
  },
  {
    name: "$51 to $1000",
    value: "51-1000",
  },
];

interface IProps {
  q: string;
  category: string;
  tag: string;
  price: string;
  sort: string;
  page: string;
}

// GenerateMetadata Dynamic
export async function generateMetadata(props: {
  searchParams: Promise<IProps>;
}) {
  const searchParams = await props.searchParams;
  const t = await getTranslations();
  const {
    q = "all",
    category = "all",
    tag = "all",
    price = "all",
  } = searchParams;

  if (
    (q !== "all" && q !== "") ||
    category !== "all" ||
    tag !== "all" ||
    price !== "all"
  ) {
    return {
      title: `${t("Search.Search")} ${q !== "all" ? q : ""}
          ${category !== "all" ? ` : ${t("Search.Category")} ${category}` : ""}
          ${tag !== "all" ? ` : ${t("Search.Tag")} ${tag}` : ""}
          ${price !== "all" ? ` : ${t("Search.Price")} ${price}` : ""}
          `,
    };
  } else {
    return {
      title: t("Search.Search Products"),
    };
  }
}

export default async function SearchPage(props: {
  searchParams: Promise<IProps>;
}) {
  const searchParams = await props.searchParams;
  const {
    q = "all",
    category = "all",
    tag = "all",
    price = "all",
    sort = "best-selling",
    page = "1",
  } = searchParams;

  const params = { q, category, tag, price, sort, page };

  const categories = await getAllCategories();
  const tags = await getAllTags();
  const data = await getAllProductsBySearchParams({
    category,
    tag,
    query: q,
    price,
    page: Number(page),
    sort,
  });

  const t = await getTranslations();

  return (
    <div className="">
      <Container className="">
        <div className="my-2 py-4 md:py-2 md:px-4 bg-card md:border-b flex-between flex-col gap-4 md:gap-0 md:flex-row ">
          <div className="flex items-center">
            {data.totalProducts === 0
              ? t("Search.No")
              : `${data.from}-${data.to} ${t("Search.of")} ${
                  data.totalProducts
                }`}{" "}
            {t("Search.results")}
            {(q !== "all" && q !== "") ||
            (category !== "all" && category !== "") ||
            (tag !== "all" && tag !== "") ||
            price !== "all"
              ? ` ${t("Search.for")} `
              : null}
            {q !== "all" && q !== "" && '"' + q + '"'}
            {category !== "all" &&
              category !== "" &&
              `   ${t("Search.Category")}: ` + category}
            {tag !== "all" && tag !== "" && `   ${t("Search.Tag")}: ` + tag}
            {price !== "all" && `    ${t("Search.Price")}: ` + price}
            &nbsp;
            {(q !== "all" && q !== "") ||
            (category !== "all" && category !== "") ||
            (tag !== "all" && tag !== "") ||
            price !== "all" ? (
              <Button variant={"link"} asChild>
                <Link href="/search">{t("Search.Clear")}</Link>
              </Button>
            ) : null}
          </div>
          <div>
            <ProductSortSelector
              sortOrders={sortOrders}
              sort={sort}
              params={params}
            />
          </div>
        </div>
        {/* Cards And Pagination */}
        <div className="bg-card py-4 md:py-2 md:px-4 grid md:grid-cols-5 md:gap-4">
          <CollapsibleOnMobile title={t("Search.Filters")}>
            <div className="space-y-4">
              <div>
                <div className="font-bold">{t("Search.Department")}</div>
                <ul>
                  <li>
                    <Link
                      className={`${
                        ("all" === category || "" === category) &&
                        "text-primary"
                      }`}
                      href={getFilterUrl({ category: "all", params })}
                    >
                      {t("Search.All")}
                    </Link>
                  </li>
                  {categories.map((c: string) => (
                    <li key={c}>
                      <Link
                        className={`${c === category && "text-primary"}`}
                        href={getFilterUrl({ category: c, params })}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold">{t("Search.Price")}</div>
                <ul>
                  <li>
                    <Link
                      className={`${"all" === price && "text-primary"}`}
                      href={getFilterUrl({ price: "all", params })}
                    >
                      {t("Search.All")}
                    </Link>
                  </li>
                  {prices.map((p) => (
                    <li key={p.value}>
                      <Link
                        href={getFilterUrl({ price: p.value, params })}
                        className={`${p.value === price && "text-primary"}`}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold">{t("Search.Tag")}</div>
                <ul>
                  <li>
                    <Link
                      className={`${
                        ("all" === tag || "" === tag) && "text-primary"
                      }`}
                      href={getFilterUrl({ tag: "all", params })}
                    >
                      {t("Search.All")}
                    </Link>
                  </li>
                  {tags.map((t: string) => (
                    <li key={t}>
                      <Link
                        className={`${toSlug(t) === tag && "text-primary"}`}
                        href={getFilterUrl({ tag: t, params })}
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CollapsibleOnMobile>

          <div className="md:col-span-4 space-y-4">
            <div>
              <div className="font-bold text-xl">{t("Search.Results")}</div>
              <div>
                {t("Search.Check each product page for other buying options")}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3  ">
              {data.products.length === 0 && (
                <div>{t("Search.No product found")}</div>
              )}
              {data.products.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {data.totalPages > 1 && (
              <Pagination page={page} totalPages={data.totalPages} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
