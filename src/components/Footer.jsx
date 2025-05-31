import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "⌨" },
  ];

  return (
    <footer className="w-full rounded-t-2xl bg-stone-800 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div {...fadeInUp} className="space-y-4">
            <div className="bg-linear-to-b from-sky-300 to-sky-600 border-2 border-sky-600 rounded-lg w-fit h-10 px-4 flex items-center justify-center">
              <span className="text-white text-sm font-dm-serif-text italic">
                Sky Int.
              </span>
            </div>
            <p className="text-stone-300 font-inter text-sm">
              Empowering startups with intelligent banking solutions for the
              future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-stone-400 hover:text-sky-200 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 className="text-sm font-geist font-semibold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-sky-200 font-inter text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-sm font-geist font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-sky-200 font-inter text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-sm font-geist font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-sky-200 font-inter text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-stone-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-300 font-inter text-sm">
              © {currentYear} SkyInt. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-stone-300 font-inter text-sm">
                Made with ❤️ for startups
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
