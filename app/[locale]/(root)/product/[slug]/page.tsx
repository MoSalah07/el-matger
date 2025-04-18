import React from "react";
import { getProductBySlug } from "@/actions/product.action";
// import { getTranslations } from "next-intl/server";
import ProductGallery from "@/components/shared/product/product.gallery";

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; color: string; size: string }>;
}) {
  //   const searchParams = await props.searchParams;

  //   const { page, color, size } = searchParams;

  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);

  //   const t = await getTranslations();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2 ">
          <ProductGallery images={product.images} />
        </div>
        <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">hhh</div>
      </div>
    </section>
  );
}
