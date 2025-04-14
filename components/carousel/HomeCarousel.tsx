"use client";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

import { useTranslations } from "next-intl";
import BannerImage_1 from "@/public/images/banner1.jpg";
import BannerImage_2 from "@/public/images/banner2.jpg";
import BannerImage_3 from "@/public/images/banner3.jpg";

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const t = useTranslations("Home");

  const items = [
    {
      image: BannerImage_1,
      title: "Best Sellers in T-Shirts",
    },
    {
      image: BannerImage_2,
      title: "Best Deals on Wrist Watches",
    },
    {
      image: BannerImage_3,
      title: "Most Popular Shoes For Sale",
    },
  ];

  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={`/`}>
              <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                  <h2
                    className={
                      "text-xl md:text-6xl font-bold mb-4 text-primary"
                    }
                  >
                    {t(`${item.title}`)}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        style={{ backgroundColor: "black" }}
        aria-label="Previous Slide"
        className="left-0 md:left-12 bg-black text-primary"
      />
      <CarouselNext
        style={{ backgroundColor: "black" }}
        aria-label="Next Slide"
        className="right-0 md:right-12 bg-black text-primary"
      />
    </Carousel>
  );
}
