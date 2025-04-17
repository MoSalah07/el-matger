"use client";
import {
  clearToCartAction,
  removeToCartAction,
  selectCart,
  updateToCartAction,
} from "@/store/features/cart.slices";
import { ShoppingCart, Trash } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ICartProduct } from "@/interfaces";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { useAppDispatch } from "@/store/store";
import { useCallback, useMemo } from "react";
import {
  countProducts,
  totalPriceProducts,
} from "@/lib/actions/addItemToShoppingCart";
import { getDirection } from "@/i18n-confige";
import ProductPrice from "../shared/product/product.price";

export default function CounterCart({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const t = useTranslations("Cart");
  const { cartProducts } = useSelector(selectCart);

  const countAllProducts = useMemo(
    () => countProducts({ cartProducts }),
    [cartProducts]
  );

  return (
    <>
      {isMobile ? (
        <div className="flex items-center lg:text-white">
          <div className="lg:ml-0 ml-1">
            <ShoppingCart size={30} />
          </div>
          <div className="flex flex-col ml-1 mb-2">
            <span className="text-center font-bold text-lg text-primary">
              {countAllProducts}
            </span>
            <span className="text-[10px] font-bold text-black dark:text-white lg:text-white">
              {t("Shopping Cart")}
            </span>
          </div>
        </div>
      ) : (
        <ShoppingCartMenu
          cartProducts={cartProducts}
          title={t("Shopping Cart")}
          countAllProducts={countAllProducts}
        />
      )}
    </>
  );
}

// Component ShoppingCartMenu DeskTop
function ShoppingCartMenu({
  cartProducts,
  title,
  countAllProducts,
}: {
  cartProducts: ICartProduct[];
  title: string;
  countAllProducts: number;
}) {
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const locale = useLocale();

  //========================= Handlers =======================
  const totalPrice = useMemo(() => {
    return totalPriceProducts({ cartProducts });
  }, [cartProducts]);

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <div className="flex items-center lg:text-white">
          <div className="lg:ml-0 ml-1">
            <ShoppingCart size={30} />
          </div>
          <div className="flex flex-col ml-1 mb-2">
            <span className="text-center font-bold text-lg text-primary">
              {countAllProducts}
            </span>
            <span className="text-[10px] font-bold text-black dark:text-white lg:text-white">
              {title}
            </span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        dir={getDirection(locale) === "rtl" ? "rtl" : "ltr"}
        className="w-50 overflow-y-auto"
      >
        <SheetHeader className="text-center">
          <SheetTitle className="mt-8 ">Shopping Menu</SheetTitle>
          <SheetDescription>{t("Cart.Subtotal")}</SheetDescription>
          <div className="text-xs">
            {t("Cart.Your order qualifies for FREE Shipping")}
          </div>
          <div className="font-bold ">
            <ProductPrice price={totalPrice} plain />
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-y-4">
          {cartProducts.map((product) => (
            <ShoppingCartMenuItem
              key={product.id}
              title={product.name}
              price={product.price}
              imageSrc={product.images[0]}
              quantity={product.quantity}
              countInStock={product.countInStock}
              product={product}
            />
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={() => dispatch(clearToCartAction())}>
              Clear All
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

// Component ShoppingCartMenuItem
const ShoppingCartMenuItem = ({
  title,
  imageSrc,
  price,
  quantity,
  countInStock,
  product,
}: {
  title: string;
  imageSrc: string;
  price: number;
  quantity: number;
  countInStock: number;
  product: ICartProduct;
}) => {
  const dispatch = useAppDispatch();

  // ============== Handlers ==================
  const handleValueChange = useCallback(
    (value: string) => {
      dispatch(updateToCartAction({ product, quantity: Number(value) }));
    },
    [dispatch, product]
  );

  const stockOptions = useMemo(() => {
    return Array.from({ length: countInStock }).map((_, i) => (
      <SelectItem value={(i + 1).toString()} key={i + 1}>
        {i + 1}
      </SelectItem>
    ));
  }, [countInStock]);

  return (
    <div className="border p-3">
      <div className="flex flex-col items-center gap-y-2">
        <h5
          className="overflow-hidden text-center"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </h5>
        <div>
          <Image
            className="size-20 object-contain object-center"
            src={imageSrc}
            alt={title}
            width={80}
            height={80}
          />
        </div>
        <p>{price}</p>
      </div>
      <div className="mt-2 flex items-center justify-center gap-x-3">
        <Button
          className="cursor-pointer"
          onClick={() => dispatch(removeToCartAction({ id: product.id }))}
        >
          <Trash />
        </Button>
        <Select value={quantity.toString()} onValueChange={handleValueChange}>
          <SelectTrigger className="text-xs w-12 ml-1 h-auto py-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>{stockOptions}</SelectContent>
        </Select>
      </div>
    </div>
  );
};
