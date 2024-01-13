"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import Link from "next/link";

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
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={{
                      id: product.category.id,
                      value: product.category.value,
                    }}
                    material={{
                      id: product.material.id,
                      value: product.material.value,
                    }}
                    color={{
                      id: product.color.id,
                      value: product.color.value,
                      hex: product.color.hex,
                    }}
                    priceRange={{
                      id: product.priceRange.id,
                      value: product.priceRange.value,
                    }}
                  />
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
