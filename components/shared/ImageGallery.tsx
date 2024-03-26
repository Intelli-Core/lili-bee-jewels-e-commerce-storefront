import { Media } from "@/types";
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Stack } from "../ui/stack";
import { MobileImageCarousel } from "./mobile/MobileImageCarousel";
import Image from "next/image";

type ImageGalleryProps = {
  images: Media[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentImage = images[currentIndex].image;

  return (
    <Stack direction="column" gap={3}>
      <div className="hidden w-[100%] md:block lg:w-[650px]">
        <AspectRatio ratio={1 / 1}>
          <Image
            alt={"product thumbnail"}
            src={currentImage}
            className="h-auto max-w-full md:rounded-sm"
            fill
          />
          <div className="absolute bottom-3 right-3 space-x-2">
            <Button
              variant={"outline"}
              className="rounded-full p-3"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full p-3"
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
        </AspectRatio>
      </div>
      <div className="w-[100%] md:hidden ">
        <MobileImageCarousel images={images} />
      </div>
      {/* Gallery */}
      <div className="hidden flex-row gap-3 px-2 md:flex ">
        {images.map((image, key) => (
          <div
            className={`relative w-[100px] cursor-pointer rounded-sm ${key === currentIndex ? "ring-2 ring-gray-600" : ""}`}
            onClick={() => setCurrentIndex(key)}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                key={key}
                alt={"product thumbnail"}
                src={image.image}
                className="h-auto max-w-full md:rounded-sm"
                fill
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </Stack>
  );
};
