import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../lib/motion";

const themeClasses = {
  dark: "bg-linear-to-tl from-stone-700 to-stone-950 text-white border-1 border-stone-950 outline-stone-400",
  light:
    "bg-linear-to-tl from-stone-100 to-stone-300 text-stone-900 border-stone-300 outline-stone-400",
};

const Tag = ({ children, theme = "dark" }) => {
  return (
    <motion.div
      className={`w-fit cursor-pointer select-none outline-2 rounded-full text-xs py-1 px-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] ${themeClasses[theme]}`}
      {...fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default Tag;
