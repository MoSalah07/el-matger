/* eslint-disable @typescript-eslint/no-unused-vars */
import { getTranslations } from "next-intl/server";
import React from "react";

interface IProps {
  q: string;
  category: string;
  tag: string;
  price: string;
  sort: string;
  page: string;
}

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

  return <div>SearchPage</div>;
}
