import { ImageGallery } from "@/components/shared/ImageGallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Media } from "@/types";
import Image from "next/image";
import React from "react";

type ProductImageProps = {
  thumbnail: string;
  mediaList: Media[];
};

const ProductMedia = ({ thumbnail, mediaList }: ProductImageProps) => {
  const productThumbnail = thumbnail
    ? thumbnail
    : "/assets/images/placeholders/image-placeholder.svg";

  return (
    <React.Fragment>
      <div className="h-stack flex-wrap justify-start">
        {mediaList.length > 0 ? (
          <ImageGallery images={mediaList} />
        ) : (
          <div className="w-full lg:w-[650px] cursor-zoom-in">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={productThumbnail}
                alt={"product thumbnail"}
                className="h-auto max-w-full"
                priority
                fill
              />
            </AspectRatio>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductMedia;
