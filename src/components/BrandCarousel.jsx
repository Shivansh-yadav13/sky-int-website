import React from "react";
import { motion } from "framer-motion";

const loremLogos = [
  "/dell_logo.png",
  "/hp_logo.png",
  "/lenovo_logo.png",
  "/asus_logo.png",
  "/nvidia_logo.png",
  "/acer_logo.png",
  "/amd_logo.png",
];

const BrandCarousel = ({ logos = loremLogos, speed = 20 }) => {
  // speed: seconds for one full loop
  if (!logos.length) return null;

  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-4 flex flex-col gap-4">
      <div className="text-sm text-center font-geist text-stone-400">
        Trusted Brands We Serve
      </div>
      <motion.div
        className="flex gap-8"
        style={{ width: "max-content" }}
        animate={{ x: [0, `-${100 / 2}%`] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {allLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center h-20 w-32">
            <img
              src={logo}
              alt="brand"
              className="h-10 max-w-[90px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              style={{ background: "transparent" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandCarousel;
