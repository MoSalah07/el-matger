"use client";
import { selectCart } from "@/store/features/cart.slices";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

export default function CounterCart() {
  const t = useTranslations("Cart");
  const { cartProducts } = useSelector(selectCart);

  return (
    <div className="flex items-center lg:text-white">
      <div className="lg:ml-0 ml-1">
        <ShoppingCart size={30} />
      </div>
      <div className="flex flex-col ml-1 mb-2">
        <span className="text-center font-bold text-lg text-primary">
          {cartProducts.length}
        </span>
        <span className="text-[10px] font-bold text-black dark:text-white lg:text-white">
          {t("Shopping Cart")}
        </span>
      </div>
    </div>
  );
}
