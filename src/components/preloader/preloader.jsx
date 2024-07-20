import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { langs } from "./";

function preloader() {
  const [loading, setLoading] = useState(true);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [duration, setDuration] = useState(1000);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prevIndex) => {
        if (prevIndex === 0) {
          setDuration(400);
        }
        return (prevIndex + 1) % langs.length;
      });
    }, duration);

    const textFadeTimeout = setTimeout(() => {
      setTextVisible(false);
    }, 100 + (langs.length - 1) * 380);

    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 500 + (langs.length - 1) * 400);

    return () => {
      clearInterval(interval);
      clearTimeout(textFadeTimeout);
      clearTimeout(loaderTimeout);
    };
  }, [duration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -1000 }}
          transition={{ duration: 1 }}
          className=" overscroll-none overflow-hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            zIndex: 9999,
          }}
        >
          {textVisible && (
            <motion.div
              key={currentLangIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-poppins font-semibold"
              >
                {langs[currentLangIndex].label}
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default preloader;
