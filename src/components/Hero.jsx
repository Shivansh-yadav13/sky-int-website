import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";
import Button from "./Button";
import Tag from "./Tag";
import BrandCarousel from "./BrandCarousel";

const Hero = () => {
  return (
    <div className="mt-36">
      <div className="w-fit h-fit flex flex-col gap-10">
        <Tag>Sky International - Since 1999</Tag>
        <div className="flex flex-col gap-4">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl font-geist text-gray-900"
          >
            Delivering <span className="font-jersey-20">Technology</span> <br />{" "}
            That <span className="font-dm-serif-text italic">Works</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-stone-500 text-xs md:text-sm font-inter"
          >
            From premium computers and accessories to custom-built software —{" "}
            <br /> everything you need to power your work, in one place.
          </motion.p>
        </div>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button theme="light">Book a Call</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
