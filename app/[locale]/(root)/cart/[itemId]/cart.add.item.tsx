"use client";
import { Card, CardContent } from "@/components/ui/card";
import { selectCart } from "@/store/features/cart.slices";
import { CheckCircle2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function CartAddItem({ itemId }: { itemId: string }) {
  const { cartProducts } = useSelector(selectCart);
  const item = cartProducts.find((product) => product.clientId === itemId);
  const t = useTranslations();
  if (!item) return notFound();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <Card className="w-full rounded-none">
          <CardContent className="flex h-full items-center justify-center  gap-3 py-4">
            <Link href={`/product/${item.slug}`}>
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <div>
              <h3 className="text-xl font-bold flex gap-2 my-2">
                <CheckCircle2Icon className="h-6 w-6 text-green-700" />
                {t("Cart.Added to cart")}
              </h3>
              <p className="text-sm">
                <span className="font-bold"> {t("Cart.Color")}: </span>{" "}
                {item.color ?? "-"}
              </p>
              <p className="text-sm">
                <span className="font-bold"> {t("Cart.Size")}: </span>{" "}
                {item.size ?? "-"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
