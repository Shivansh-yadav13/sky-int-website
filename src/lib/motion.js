export const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const scaleIn = {
  initial: { scale: 0.95, opacity: 0.5 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
