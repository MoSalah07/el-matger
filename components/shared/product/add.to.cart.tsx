"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICartProduct } from "@/interfaces/index";
import { addItemToStore } from "@/lib/actions/addItemToShoppingCart";
import { addToCartAction } from "@/store/features/cart.slices";
import { useAppDispatch } from "@/store/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: ICartProduct;
  minimal?: boolean;
}) {
  //PROMPT: add quantity state
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const router = useRouter();

  return minimal ? (
    <Button
      className="rounded-full w-auto cursor-pointer"
      onClick={() => {
        try {
          // Add Item To Cart Store
          dispatch(
            addToCartAction({ product: addItemToStore(item), quantity })
          );
          // toast({
          //   description: t("Product.Added to Cart"),
          //   action: (
          //     <Button
          //       onClick={() => {
          //         router.push("/cart");
          //       }}
          //     >
          //       {t("Product.Go to Cart")}
          //     </Button>
          //   ),
          // });
        } catch (error: unknown) {
          // toast({
          //   variant: "destructive",
          //   description: error.message,
          // });
          if (error instanceof Error) {
            console.log(error.message);
            throw new Error(error.message);
          }
          console.log("Unknown error", error);
        }
      }}
    >
      {t("Product.Add to Cart")}
    </Button>
  ) : (
    <div className="w-full space-y-2">
      <Select
        value={quantity.toString()}
        onValueChange={(i) => setQuantity(Number(i))}
      >
        <SelectTrigger className="">
          <SelectValue>
            {t("Product.Quantity")}: {quantity}
          </SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className="rounded-full w-full cursor-pointer"
        type="button"
        onClick={() => {
          dispatch(
            addToCartAction({ product: addItemToStore(item), quantity })
          );
          router.push(`/cart/${item.clientId}`);
        }}
        // onClick={async () => {
        //   try {
        //     const itemId = await addItem(item, quantity);
        //     router.push(`/cart/${itemId}`);
        //   } catch (error: any) {
        //     toast({
        //       variant: "destructive",
        //       description: error.message,
        //     });
        //   }
        // }}
      >
        {t("Product.Add to Cart")}
      </Button>
      <Button
        variant="secondary"
        // onClick={() => {
        //   try {
        //     addItem(item, quantity);
        //     router.push(`/checkout`);
        //   } catch (error: any) {
        //     toast({
        //       variant: "destructive",
        //       description: error.message,
        //     });
        //   }
        // }}
        className="w-full rounded-full "
      >
        {t("Product.Buy Now")}
      </Button>
    </div>
  );
}
