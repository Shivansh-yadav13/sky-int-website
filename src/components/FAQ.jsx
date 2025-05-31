import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "../lib/motion";

const faqs = [
  {
    q: "I only have an idea — can you help me build from scratch?",
    a: "Yes! We can help you build your idea from scratch. We have a team of experienced developers who can help you build your idea from scratch.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "Most MVPs take 3–6 weeks, depending on the complexity. Our process is optimized to help you launch quickly, test with users, and iterate faster.",
  },
  {
    q: "How much does an MVP cost?",
    a: "Pricing typically depends on your features, platform, and required integrations. We offer flexible packages and a free consultation to estimate your scope.",
  },
  {
    q: "What’s included in your MVP development service?",
    a: "Our MVP service includes ideation support, UI/UX design, development (web or mobile), basic testing, and handover with full ownership of the product. Optional add-ons include pitch decks, demo videos, and post-launch support.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full max-w-3xl mx-auto py-16">
      <motion.h2
        {...fadeInUp}
        className="text-3xl md:text-4xl font-geist font-semibold text-center text-stone-900 mb-8"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial="collapsed"
            animate={open === i ? "open" : "collapsed"}
            variants={{
              open: {
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              },
              collapsed: {
                scale: 0.98,
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              },
            }}
            className="rounded-2xl bg-white shadow border border-stone-100 overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 font-geist text-lg text-stone-900 flex justify-between items-center focus:outline-none hover:bg-stone-50 transition-colors duration-200"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-2 text-xl text-stone-400"
              >
                {open === i ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: {
                        duration: 0.3,
                        delay: 0.1,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="px-6 pb-4 text-stone-600 font-inter text-base"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
