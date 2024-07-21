import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const UnknownPath = () => {
  return (
    <>
      <main className="mt-[10vh] text-6xl">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1>Page not found</h1>
            <p>Sorry, but the page you're looking for doesn't exist.</p>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default UnknownPath;
