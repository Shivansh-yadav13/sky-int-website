import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Button from "./Button";

const navLinks = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Get in touch ->", href: "#" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center justify-between bg-stone-800 rounded-b-xl shadow-lg px-4 py-2 w-fit mx-auto gap-4"
        >
          {/* Logo */}
          <div className="bg-linear-to-b from-sky-300 to-sky-600 border-2 border-sky-600 rounded-lg w-fit h-10 px-4 flex items-center justify-center mr-2">
            <span className="text-white text-sm font-dm-serif-text italic">
              Sky Int.
            </span>
          </div>
          {/* Nav Links */}
          <ul className="flex items-center gap-6 text-white font-inter text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-sky-200 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
