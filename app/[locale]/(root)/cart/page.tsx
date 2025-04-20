"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/store/store";
import {
  removeToCartAction,
  selectCart,
  updateToCartAction,
} from "@/store/features/cart.slices";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/shared/product/product.price";
import { useRouter } from "next/navigation";
import { totalPriceProducts } from "@/lib/actions/addItemToShoppingCart";

export default function CartPage() {
  const { cartProducts } = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const router = useRouter();

  //========================= Handlers =======================
  const totalPrice = useMemo(() => {
    return totalPriceProducts({ cartProducts });
  }, [cartProducts]);

  const freeShippingMinPrice: number = 300;
  const itemsPrice: number = totalPrice;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 pt-4 pb-8">
        {cartProducts.length === 0 ? (
          <Card className="col-span-4 rounded-none">
            <CardHeader className="text-3xl  ">
              {t("Cart.Your Shopping Cart is empty")}
            </CardHeader>
            <CardContent>
              {t.rich("Cart.Continue shopping on", {
                name: "el matger",
                home: (chunks) => <Link href="/">{chunks}</Link>,
              })}
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="col-span-3">
              <Card className="rounded-none">
                <CardHeader className="text-3xl pb-0">
                  {t("Cart.Shopping Cart")}
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-end border-b mb-4 pb-4">
                    {t("Cart.Price")}
                  </div>
                  {cartProducts.map((item) => (
                    <div
                      key={item.clientId}
                      className="flex flex-col md:flex-row justify-between py-4 border-b gap-4"
                    >
                      <Link href={`/product/${item.slug}`}>
                        <div className="relative w-40 h-40">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="20vw"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </Link>

                      <div className="flex-1 space-y-4">
                        <Link
                          href={`/product/${item.slug}`}
                          className="text-lg hover:no-underline  "
                        >
                          {item.name}
                        </Link>
                        <div>
                          <p className="text-sm">
                            <span className="font-bold">
                              {" "}
                              {t("Cart.Color")}:{" "}
                            </span>{" "}
                            {item.color}
                          </p>
                          <p className="text-sm">
                            <span className="font-bold">
                              {" "}
                              {t("Cart.Size")}:{" "}
                            </span>{" "}
                            {item.size}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) =>
                              dispatch(
                                updateToCartAction({
                                  product: item,
                                  quantity: Number(value),
                                })
                              )
                            }
                          >
                            <SelectTrigger className="w-auto">
                              <SelectValue>
                                {t("Cart.Quantity")}: {item.quantity}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent position="popper">
                              {Array.from({
                                length: item.countInStock,
                              }).map((_, i) => (
                                <SelectItem key={i + 1} value={`${i + 1}`}>
                                  {i + 1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button
                            variant={"outline"}
                            onClick={() => dispatch(removeToCartAction(item))}
                          >
                            {t("Cart.Delete")}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-right">
                          {item.quantity > 1 && (
                            <>
                              {item.quantity} x
                              <ProductPrice price={item.price} plain />
                              <br />
                            </>
                          )}

                          <span className="font-bold text-lg">
                            <ProductPrice
                              price={item.price * item.quantity}
                              plain
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end text-lg my-2">
                    {t("Cart.Subtotal")} ({totalPrice} {t("Cart.Items")}):{" "}
                    <span className="font-bold ml-1">
                      {/* <ProductPrice price={itemsPrice} plain /> */}
                    </span>{" "}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="rounded-none">
                <CardContent className="py-4 space-y-4">
                  {itemsPrice < freeShippingMinPrice ? (
                    <div className="flex-1">
                      {t("Cart.Add")}{" "}
                      <span className="text-green-700">
                        <ProductPrice
                          price={freeShippingMinPrice - itemsPrice}
                          plain
                        />
                      </span>{" "}
                      {t(
                        "Cart.of eligible items to your order to qualify for FREE Shipping"
                      )}
                    </div>
                  ) : (
                    <div className="flex-1">
                      <span className="text-green-700">
                        {t("Cart.Your order qualifies for FREE Shipping")}
                      </span>{" "}
                      {t("Cart.Choose this option at checkout")}
                    </div>
                  )}
                  <div className="text-lg">
                    {t("Cart.Subtotal")} ({totalPrice} {t("Cart.items")}):{" "}
                    <span className="font-bold">
                      <ProductPrice price={itemsPrice} plain />
                    </span>{" "}
                  </div>
                  <Button
                    onClick={() => router.push("/checkout")}
                    className="rounded-full w-full cursor-pointer"
                  >
                    {t("Cart.Proceed to Checkout")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
