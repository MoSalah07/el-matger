import React from "react";
import { getProductBySlug } from "@/actions/product.action";
import { getTranslations } from "next-intl/server";
import ProductGallery from "@/components/shared/product/product.gallery";
import ProductPrice from "@/components/shared/product/product.price";
import { Separator } from "@/components/ui/separator";
import SelectVariant from "@/components/shared/product/select.varient";
import { Card, CardContent } from "@/components/ui/card";
import AddToCart from "@/components/shared/product/add.to.cart";
import { generateId, round2 } from "@/lib/utils";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const t = await getTranslations();
  const params = await props.params;
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: t("Product.Product not found") };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; color: string; size: string }>;
}) {
  const searchParams = await props.searchParams;

  const { color, size } = searchParams;

  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);

  const t = await getTranslations();

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2 ">
          <ProductGallery images={product.images} />
        </div>
        <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">
          <div className="flex flex-col gap-3">
            <p className="p-medium-16 rounded-full bg-grey-500/10   text-grey-500">
              {t("Product.Brand")} {product.brand} {product.category}
            </p>
            <h1 className="font-bold text-lg lg:text-xl">{product.name}</h1>
            <Separator />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <ProductPrice
                  price={product.price}
                  listPrice={product.listPrice}
                  isDeal={product.tags.includes("todays-deal")}
                  forListing={false}
                />
              </div>
            </div>
          </div>
          <div>
            <SelectVariant product={product} />
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">
              {t("Product.Description")}:
            </p>
            <p className="p-medium-16 lg:p-regular-18">{product.description}</p>
          </div>
        </div>
        <div>
          <Card>
            <CardContent className="p-4 flex flex-col  gap-4">
              <ProductPrice price={product.price} />

              {product.countInStock > 0 && product.countInStock <= 3 && (
                <div className="text-destructive font-bold">
                  {t("Product.Only X left in stock - order soon", {
                    count: product.countInStock,
                  })}
                </div>
              )}
              {product.countInStock !== 0 ? (
                <div className="text-green-700 text-xl">
                  {t("Product.In Stock")}
                </div>
              ) : (
                <div className="text-destructive text-xl">
                  {t("Product.Out of Stock")}
                </div>
              )}

              {product.countInStock !== 0 && (
                <div className="flex justify-center items-center">
                  <AddToCart
                    item={{
                      ...product,
                      size: size || product.sizes[0],
                      color: color || product.colors[0],
                      image: product.images[0],
                      price: round2(product.price),
                      clientId: generateId(),
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
