import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FadeInSection } from "../components";

import {
  CollectionDataMale,
  CollectionDataFemale,
} from "../assets/collections";
function Collections() {
  const itemProps =
    "h-full w-full object-cover hover:scale-[1.05] hover:brightness-[0.9] transition-all duration-700";
  const liProps =
    "bg-slate-500 laptop:max-w-[25%] max-w-[45%] dekstop:max-h-[500px] max-h-[400px]  object-contain laptop:flex-[0_0_33.3333%] flex-[0_0_50%]  overflow-hidden relative";
  const textProps =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 laptop:text-3xl text-white uppercase z-10 drop-shadow hover:scale-[1.1] transition duration-700";
  return (
    <>
      <AnimatePresence>
        <motion.main className="w-full h-full">
          <FadeInSection>
            <motion.section className="uppercase font-poppins flex flex-col items-center mt-20 text-xl laptop:text-5xl gap-2 ">
              <motion.h1>Our Collections</motion.h1>
              <motion.ul className="flex gap-5 laptop:text-lg text-sm">
                <motion.li>Elegant</motion.li>
                <motion.li>|</motion.li>
                <motion.li>Traditonal</motion.li>
                <motion.li>|</motion.li>
                <motion.li>Premium</motion.li>
              </motion.ul>
              <motion.p className="text-xs laptop:text-sm laptop:w-[800px] p-2 text-center">
                Elevate your style with our Traditional collection, meticulously
                crafted to embody timeless elegance and sophistication. Discover
                the elegance that sets you apart.
              </motion.p>
            </motion.section>
          </FadeInSection>

          <motion.section className="flex flex-col flex-wrap justify-center gap-10">
            <FadeInSection>
              <motion.h1 className="text-center text-2xl font-poppins uppercase mt-20 mb-10 p-5">
                For Men
              </motion.h1>
              <motion.ul className="flex gap-5 flex-wrap laptop:flex-[0_0_33.3333%] flex-[0_0_50%]  h-full w-[100vw] justify-center">
                {CollectionDataMale.map((item, index) => (
                  <motion.li key={index} className={liProps}>
                    <img src={item.src} alt={item.alt} className={itemProps} />
                    <motion.p className={textProps}>{item.label}</motion.p>
                  </motion.li>
                ))}
              </motion.ul>
            </FadeInSection>
            <FadeInSection>
              <motion.h1 className="text-center text-2xl font-poppins uppercase mt-10 mb-5 p-5">
                For Women
              </motion.h1>
              <motion.ul className="flex gap-5 flex-wrap flex-[0_0_33.3333%] h-full w-[100vw] justify-center">
                {CollectionDataFemale.map((item, index) => (
                  <motion.li key={index} className={liProps}>
                    <img src={item.src} alt={item.alt} className={itemProps} />
                    <motion.p className={textProps}>{item.label}</motion.p>
                  </motion.li>
                ))}
              </motion.ul>
            </FadeInSection>
          </motion.section>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default Collections;
