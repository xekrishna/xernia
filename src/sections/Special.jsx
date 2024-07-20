import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FadeInSection } from "../components";

import { Bride, Groom } from "../assets/images/special";

function Special() {
  const itemProps =
    "h-full w-full object-cover hover:scale-[1.05] hover:brightness-[0.9] transition-all duration-700";
  const liProps =
    "laptop:max-w-[50%] max-w-[45%] laptop:max-h-[700px] max-h-[500px] object-contain laptop:flex-[0_0_50%] flex-[0_0_50%] overflow-hidden relative";
  const textProps =
    "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white drop-shadow-lg laptop:text-5xl hover:scale-[1.1] transition duration-500 text-center";

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls1.start({ x: 0, opacity: 1 });
    } else {
      controls1.start({ x: "-100%", opacity: 0 });
    }
  }, [controls1, inView]);
  useEffect(() => {
    if (inView) {
      controls2.start({ x: 0, opacity: 1 });
    } else {
      controls2.start({ x: "100%", opacity: 0 });
    }
  }, [controls1, inView]);

  return (
    <>
      <AnimatePresence>
        <motion.main className="w-full h-full">
          <FadeInSection>
            <motion.section className="uppercase font-poppins flex flex-col items-center mt-20 text-xl laptop:text-5xl gap-2">
              <motion.h1>The Wedding Season</motion.h1>
              <motion.p className="text-xs laptop:text-sm laptop:w-[800px] p-2 text-center">
                Elevate your wedding with our Wedding Season Collection,
                designed to bring timeless romance and sophistication to your
                special day. Discover elegance redefined.
              </motion.p>
              <FadeInSection>
                <motion.ul
                  className="flex gap-5 justify-center items-center w-full h-full"
                  ref={ref}
                >
                  <motion.li
                    className={liProps}
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls1}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    <img src={Groom} className={itemProps} />
                    <p className={textProps}>The Groom</p>
                  </motion.li>
                  <li className=" hidden laptop:block"></li>
                  <motion.li
                    className={liProps}
                    initial={{ x: 100, opacity: 0 }}
                    animate={controls2}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    <img src={Bride} className={itemProps} />
                    <p className={textProps}>The Bride</p>
                  </motion.li>
                </motion.ul>
              </FadeInSection>
            </motion.section>
          </FadeInSection>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default Special;
