import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import Button from "./Button";
import { fadeInUp } from "../lib/motion";

const features = [
  {
    image: "/hardware.jpg",
    tag: <Tag theme="light">Hardware</Tag>,
    title: "Reliable Computers Accessories",
    desc: "Business-grade laptops and accessories from trusted brands, delivered ready to use.",
  },
  {
    image: "/software.jpg",
    tag: <Tag theme="light">Software</Tag>,
    title: "Softwares That Work",
    desc: "We turn your idea into a working MVP in weeks—fast, functional, and ready to scale.",
  },
];

const FeaturesShowcase = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 flex flex-col items-center">
      <motion.h2
        {...fadeInUp}
        className="text-xl md:text-4xl font-geist font-semibold text-center text-stone-900 mb-2"
      >
        Everything you need,
        <br />
        nothing you don't
      </motion.h2>
      <motion.div
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
        className="flex flex-col md:flex-row justify-center gap-16 mt-8"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 + i * 0.1 }}
            className="flex-1 max-w-[200px] md:max-w-xs mx-auto"
          >
            {/* Card */}
            <div className="relative rounded-3xl shadow-lg overflow-hidden aspect-[9/16] bg-stone-200 flex flex-col justify-between">
              {/* Image */}
              <img
                src={f.image}
                alt="feature"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              {/* Top content */}
              <div className="relative z-10 flex flex-col items-center pt-6 px-4">
                {f.tag}
              </div>
            </div>
            {/* Title & Description */}
            <div className="mt-4 text-center">
              <div className="font-geist text-lg text-stone-900 font-semibold">
                {f.title}
              </div>
              <div className="text-stone-500 text-sm mt-1 font-inter">
                {f.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesShowcase;
