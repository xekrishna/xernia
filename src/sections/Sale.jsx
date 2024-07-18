import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Sale() {
  const buttonProp =
    "hover:scale-110 transition-all hover:translate-y-[-0.5px] hover:text-amber-800 border-b-2 border-gray-800 px-1 pb-2 hover:pb-0 hover:border-amber-800";

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight * 0.1;
      const scrollFraction = scrollTop / maxScroll;
      const newScale = 1 + scrollFraction * 0.2;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <main className="main-bg">
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: 0, scale }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" h-full items-center justify-center flex flex-col pb-16 z-0 hover:brightness-[.95] transition"
          >
            <motion.h1
              className="font-cormorant font-medium border-b-[1px] whitespace-nowrap  border-b-black text-6xl transition-all"
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              Summer Sale
            </motion.h1>
            <motion.p
              className="laptop:text-xl font-light uppercase whitespace-nowrap transition-all "
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              Enjoy upto <span className=" text-amber-800">50% Off</span> on
              your favourite items
            </motion.p>
            <motion.ul
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              style={{ marginBottom: "50px" }}
              className="flex uppercase gap-10 mt-5 text-md"
            >
              <motion.li variants={itemVariants}>
                <h2 className={buttonProp}>Men</h2>
              </motion.li>
              <motion.li variants={itemVariants}>
                <h2 className={buttonProp}>Women</h2>
              </motion.li>
              <motion.li variants={itemVariants}>
                <h2 className={buttonProp}>Kids & Baby</h2>
              </motion.li>
            </motion.ul>
            <motion.button
              className="uppercase font-medium border-2 border-black text-black backdrop-blur-sm rounded-md font-poppins px-5 py-3 hover:bg-black hover:text-white transition-all"
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              Shop Now
            </motion.button>
          </motion.main>
        </AnimatePresence>
      </main>
    </>
  );
}

export default Sale;
