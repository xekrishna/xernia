import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { items } from "./items";

const Cart = () => {
  const calculateDiscountedPrice = (price, discount) => {
    const discountPercentage = parseFloat(discount) / 100;
    const discountedPrice = price - price * discountPercentage;
    return discountedPrice.toFixed(2);
  };

  const calculateTotalDiscountedPrice = () => {
    return items
      .reduce((total, item) => {
        const discountedPrice = parseFloat(
          calculateDiscountedPrice(item.price, item.discount)
        );
        return total + discountedPrice;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <main className="laptop:mt-[10vh] mt-[8vh] laptop:p-10 p-5 flex flex-col laptop:flex-row gap-10  laptop:overflow-hidden max-h-[90vh]">
        <AnimatePresence>
          <motion.div className="flex-[2]">
            <h2 className="laptop:text-4xl text-2xl uppercase text-pretty font-poppins">
              Shopping Cart
            </h2>
            <motion.p className="laptop:text-lg font-poppins font-semibold border-b-2 border-b-black laptop:mt-5 p-2 uppercase">
              {items.length} Items
            </motion.p>
            <motion.ul className="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden laptop:max-h-[65vh] cart-item-container">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  className="bg-white laptop:max-h-40 max-h-30  rounded-sm shadow-sm p-2 relative max-h-40 flex gap-10"
                  initial={{ opacity: 0, scale: 0.8, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: 100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <div className=" float-start  overflow-hidden  p-2h-[100%]  laptop:w-36 max-w-20">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-[100%] w-full object-cover"
                    />
                  </div>
                  <div>
                    <motion.p className="uppercase laptop:text-2xl text-lg font-poppins laptop:mt-5 ">
                      {item.name}
                    </motion.p>
                    <div className="flex gap-2">
                      <p className=" line-through font-medium text-gray-500">
                        ₹{parseFloat(item.price).toFixed(2)}
                      </p>
                      <p className=" font-medium text-amber-700">
                        ₹
                        {calculateDiscountedPrice(
                          parseFloat(item.price),
                          parseFloat(item.discount)
                        )}
                      </p>
                    </div>
                    {item.description.map((det, i) => (
                      <div className="laptop:text-sm text-xs font-poppins text-gray-500">
                        <p>Color : {det.Color}</p>
                        <p>Size : {det.Size}</p>
                        <p>Quantity : {det.Quantity}</p>
                      </div>
                    ))}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="flex flex-col flex-[1] pt-5 pb-8 laptop:pb-0 gap-2 mt-10">
            <section className="flex items-center gap-2 border-b-2 border-black pb-1">
              <h2 className="text-2xl uppercase text-pretty font-poppins ">
                Order Summary
              </h2>
            </section>
            <section className="flex  gap-2 items-center  px-3 border-2 border-gray-500 rounded-sm py-2 mt-5 text-black hover:bg-black hover:text-white transition duration-700 hover:border-black">
              <i class="bx bxs-purchase-tag-alt"></i>
              <p>Have a promo code?</p>
            </section>
            <section>
              <section className="border-b-2 py-2">
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between uppercase px-2">
                    <p>{item.name}</p>
                    <p className="text-amber-700">
                      ₹
                      {calculateDiscountedPrice(
                        parseFloat(item.price),
                        parseFloat(item.discount)
                      )}
                    </p>
                  </div>
                ))}
              </section>
              <section className="flex justify-between uppercase px-2 py-2">
                <p>Order Total</p>
                <p className="text-amber-800">
                  ₹{calculateTotalDiscountedPrice()}
                </p>
              </section>
              <section className="overflow-hidden">
                <motion.button className="bg-black text-white w-full h-10 uppercase text-sm font-poppins active:scale-105 transition ">
                  Proceed To Checkout
                </motion.button>
              </section>
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Cart;
