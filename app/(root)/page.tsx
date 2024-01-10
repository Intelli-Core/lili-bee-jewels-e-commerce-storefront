import { josefin_sans } from "@/lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-[#F2F4F7] bg-contain py-2 md:py-2">
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

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        Home
      </section>
    </>
  );
}
