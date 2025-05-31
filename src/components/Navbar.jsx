import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Get in touch ->", href: "#" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
          className={`flex items-center justify-between bg-stone-800 ${
            mobileOpen ? "rounded-none" : "rounded-b-xl"
          }  shadow-lg px-4 py-2 w-fit mx-auto gap-4 relative`}
        >
          {/* Logo */}
          <div className="bg-linear-to-b from-sky-300 to-sky-600 border-2 border-sky-600 rounded-lg w-fit h-10 px-4 flex items-center justify-center mr-2">
            <span className="text-white text-sm font-dm-serif-text italic">
              Sky Int.
            </span>
          </div>
          {/* Nav Links - Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-white font-inter text-sm">
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
          {/* Hamburger Icon - Mobile */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          {/* Mobile Menu with Animation */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 bg-stone-800 rounded-b-xl shadow-lg flex flex-col items-center py-4 gap-4 md:hidden z-50"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white font-inter text-base py-2 px-4 rounded hover:bg-sky-700/20 transition-colors duration-200 w-full text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
