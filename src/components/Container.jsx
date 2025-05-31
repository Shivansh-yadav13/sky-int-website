import React from "react";
import { motion } from "motion/react";
const Container = ({ children }) => {
  return (
    <motion.div className="lg:mx-[12%] mx-10 flex flex-col gap-10">
      {children}
    </motion.div>
  );
};

export default Container;
