import { motion } from "motion/react";
import React from "react";
import { fadeInUp, buttonHover } from "../lib/motion";

const themeClasses = {
  primary:
    "bg-linear-to-tr from-sky-300 to-sky-600 border-sky-600 outline-sky-200 text-white",
  dark: "bg-linear-to-b from-stone-700 to-stone-950 border-stone-950 outline-stone-400 text-white",
  light:
    "bg-linear-to-tl from-stone-100 to-stone-300 text-stone-900 border-stone-300 outline-stone-400",
};

const Button = ({ children, className = "", theme = "primary" }) => {
  return (
    <motion.button
      {...fadeInUp}
      {...buttonHover}
      className={`w-fit text-xs md:text-sm cursor-pointer outline-2 border-2 font-inter px-4 py-2 rounded-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] ${themeClasses[theme]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
