"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full h-[85vh] pt-10 bg-no-repeat bg-bottom bg-cover bg-bgHero">
      <div className="container mx-auto">
        {/* info */}
        <div className="p-3 pt-10 text-center">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl font-bold text-white md:text-7xl font-bangers"
          >
            Taste the <br /> best burger in town now!
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white text-md w-full md:w-[350px] py-5 mx-auto font-md"
          >
            And from this had sacred loved florid his are shun loved florid his
            are this had sacred loved florid his shun..
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className="px-6 py-2 text-xl font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-primary/95 bg-primary font-robotoCondensed">
              Go to menu
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
