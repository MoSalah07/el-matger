import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IProduct } from "@/interfaces";
import React from "react";
import ProductCard from "./product.card";

export default function ProductSlider({
  title,
  products,
  hideDetails = false,
}: {
  title?: string;
  products: IProduct[];
  hideDetails?: boolean;
}) {
  return (
    <div className="w-full relative z-1">
      <h2 className="mb-5 font-bold">{title}</h2>
      <Carousel opts={{ align: "start", loop: false }}>
        <CarouselContent className="w-full">
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className={
                hideDetails
                  ? "md:basis-1/4 lg:basis-1/6"
                  : "md:basis-1/3 lg:basis-1/5"
              }
            >
              <ProductCard
                hideDetails={hideDetails}
                hideAddToCart
                hideBorder
                product={product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 z-50 bg-white border border-gray-300 text-black hover:bg-gray-100 w-10 h-10 rounded-full shadow" />
        <CarouselNext className="-right-2 z-50 bg-white border border-gray-300 text-black hover:bg-gray-100 w-10 h-10 rounded-full shadow" />
      </Carousel>
    </div>
  );
}
