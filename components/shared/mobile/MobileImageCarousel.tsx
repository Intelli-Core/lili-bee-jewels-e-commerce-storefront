import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Media } from "@/types";
import Image from "next/image";
import React from "react";

type MobileImageCarouselProps = {
  images: Media[];
};

export const MobileImageCarousel = ({ images }: MobileImageCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-[100%]">
            <AspectRatio ratio={1 / 1}>
              <Image
                alt={"product thumbnail"}
                src={image.image}
                className="h-auto max-w-full"
                fill
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-3 right-3 h-auto w-[50px] space-x-2 rounded-full bg-black text-white bg-opacity-35 py-[2px] text-center">
        <p className="p-regular-14">
          {current}/{count}
        </p>
      </div>
    </Carousel>
  );
};
