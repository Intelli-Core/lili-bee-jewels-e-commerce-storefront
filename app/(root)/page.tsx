import ProductCarousel from "@/components/shared/ProductCarousel";
import { getProducts } from "@/lib/actions/product.actions";
import { josefin_sans } from "@/lib/fonts";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F2F4F7] bg-contain py-2 mb-5 md:py-2">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-2 text-center md:text-left">
            <h2 className="h2-bold">
              Affordable Elegance, Uncompromised Quality
            </h2>
            <p
              className={`${josefin_sans.className} p-regular-14 md:p-regular-14`}
            >
              Where high-end meets high value. Our mission is to provide you
              with beautifully crafted, affordable jewelry that exudes elegance
              and quality, proving that luxury doesn't always have to come with
              a high price tag."
            </p>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={400}
            height={400}
            className="hidden md:block pl-10 max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      {/* Showcased Products Section */}
      <section className="wrapper flex flex-col gap-5">
        {/* Latest Arrival Carousel */}
        <ProductCarousel
          products={products}
          title={"Latest Products"}
          route={"/store/products/?sort=newest"}
        />
        {/* Featured Products */}
        <ProductCarousel
          products={products}
          title={"Featured Products"}
          route={"/store/products/"}
        />
      </section>
    </>
  );
}
