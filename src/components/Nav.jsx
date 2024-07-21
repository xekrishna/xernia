import { logo } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const windowHeight = scrollHeight - clientHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleCloseClick = () => {
    setIsSearchActive(false);
  };

  const handleBackgroundClick = () => {
    if (isSearchActive) {
      setIsSearchActive(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isSearchActive && (
          <motion.div
            onClick={handleBackgroundClick}
            className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 20 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
        }}
      >
        <main className="max-h-[8vh] laptop:max-h-[10vh] w-full bg-[#fffffff8] flex justify-between items-center backdrop-blur-sm">
          <AnimatePresence>
            {isSearchActive ? (
              <motion.section
                className="min-w-full flex justify-between items-center min-h-[8vh] laptop:min-h-[10vh] bg-[#fff8] px-10"
                initial={{ x: "-100px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100px", opacity: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
              >
                <div></div>
                <section
                  className="flex justify-center items-center transition-all border-b-black border-b-2 px-4 "
                  tabIndex={-1}
                >
                  <i className="bx bx-search text-2xl text-black cursor-pointer"></i>
                  <input
                    type="text"
                    placeholder="Search"
                    className="laptop:w-[500px] bg-white px-1 py-3 outline-none font-poppins font-light "
                  />
                </section>

                <button
                  onClick={handleCloseClick}
                  className="active:text-amber-500 hover:text-amber-500 text-3xl transition-all"
                >
                  <i className="bx bx-x"></i>
                </button>
              </motion.section>
            ) : (
              <motion.section
                className="w-full flex justify-between items-center max-h-[8vh] laptop:max-h-[10vh] px-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <section>
                  <i
                    className="bx bx-search text-2xl text-black cursor-pointer"
                    onClick={handleSearchClick}
                  ></i>
                </section>
                <section className="flex gap-5 font-poppins text-black leading-none">
                  <button>
                    <span
                      className="btn hidden laptop:block"
                      onClick={() => navigate("/shop")}
                    >
                      Shop
                    </span>
                  </button>
                  <img
                    src={logo}
                    alt="xernia"
                    className="size-28 filter invert object-contain"
                    onClick={() => navigate("/")}
                  />
                  <button>
                    <span
                      className="btn hidden laptop:block"
                      onClick={() => navigate("/contact")}
                    >
                      Contact
                    </span>
                  </button>
                </section>
                <section className="flex text-black gap-5 text-2xl">
                  <i
                    className="bx bx-user"
                    onClick={() => navigate("/register")}
                  ></i>
                  <i
                    className="bx bx-shopping-bag"
                    onClick={() => navigate("/cart")}
                  ></i>
                </section>
              </motion.section>
            )}
          </AnimatePresence>
        </main>
        <div className="w-full h-[2px] bg-gray-300">
          <motion.div
            className="h-full bg-amber-500"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default Nav;
