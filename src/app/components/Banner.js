"use client";

import Image from "next/image";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="h-screen bg-primary bg-pattern">
      <div className="container flex items-center justify-center h-full mx-auto ">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="flex flex-col items-center justify-between w-full lg:flex-row"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col flex-1 px-6 text-center text-white lg:text-left">
              <div className="">
                <div className=" font-bangers text-[32px] text-yellow-300 uppercase">
                  Best burger in city
                </div>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bangers drop-shadow-md">
                Burger perfection <br /> in every bite
              </h1>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.3}
            className="relative md:flex md:items-center md:h-screen "
          >
            <div>
              <div>
                <Image
                  src={"/assets/burgers/hero.webp"}
                  width={550}
                  height={558}
                  alt=""
                  priority={1}
                />
              </div>
            </div>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute hidden top-16 left-10 xl:flex"
            >
              <Image
                src={"/assets/extras/chilli-2.webp"}
                width={160}
                height={84}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.2}
              className="absolute hidden bottom-32 right-32 xl:flex"
            >
              <Image
                src={"/assets/extras/leaves.webp"}
                width={160}
                height={84}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
