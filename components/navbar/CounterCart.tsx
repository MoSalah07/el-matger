"use client";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CounterCart() {
  const t = useTranslations("Cart");

  return (
    <div className="flex items-center">
      <div className="lg:ml-0 ml-1">
        <ShoppingCart size={40} />
      </div>
      <div className="flex flex-col ml-1">
        <span className="text-center font-bold text-lg">0</span>
        <span className="text-xs">{t("Shopping Cart")}</span>
      </div>
    </div>
  );
}
