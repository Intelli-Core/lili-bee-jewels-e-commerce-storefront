"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

type ProductCarouselProps = {
  products: Product[];
  title: string;
  route: string;
};

const ProductCarousel = ({ products, title, route }: ProductCarouselProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col gap-2.5 md:gap-2.5">
      <div className="flex justify-between">
        <p className="p-medium-16">{title}</p>
        <p className="p-regular-14">
          <Link href={route}>View All</Link>
        </p>
      </div>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-2">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-1 basis-1/2 md:basis-1/4"
              >
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
