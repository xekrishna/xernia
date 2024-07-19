import { AnimatePresence, motion } from "framer-motion";

import { footerItems, endFooter } from "../assets/footer";
import { logo } from "../assets";

function Footer() {
  const divProps = "flex flex-col gap-5";
  const listProp = " capitalize text-xs flex flex-col gap-2";

  return (
    <>
      <main>
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-around p-5 py-10 uppercase font-poppins text-sm"
          >
            {footerItems.map((item, index) => {
              return (
                <motion.div key={index} className={divProps}>
                  <p>{item.title}</p>
                  <ul className={listProp}>
                    {item.items.map((link, linkIndex) => (
                      <li key={linkIndex}>{link.title}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.section>
          <motion.section className="border-t-2 flex flex-col items-center justify-center p-5">
            <img src={logo} alt="xernia" className="w-20" />
            <div className="flex gap-5">
              {endFooter.map((item, index2) => {
                return (
                  <motion.p
                    key={index2}
                    className="text-xs uppercase my-5 font-poppins"
                  >
                    {item.title}
                  </motion.p>
                );
              })}
            </div>
            <p className="text-sm font-poppins uppercase ">
              &copy; 2024 Xernia
            </p>
          </motion.section>
        </AnimatePresence>
      </main>
    </>
  );
}

export default Footer;
