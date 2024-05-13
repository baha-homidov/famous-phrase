// components/Layout.tsx
// import Footer from "./Footer";
// import Header from "./Header";
import { motion } from "framer-motion";
import Link from "next/link";
const layoutVariants = {
  initial: {
    opacity: 0,
    x: "-10%", // Start from the left (completely outside the viewport)
  },
  animate: {
    opacity: 1,
    x: "0%", // End at the center (fully visible in the viewport)
    transition: {
      duration: 0.3, // Adjust the duration as needed
      ease: "easeInOut", // You can use other easing functions
    },
  },
  exit: {
    opacity: 0,
    x: "10%", // Exit to the right (completely outside the viewport)
  },
};

export default function Layout({ children, t }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={layoutVariants}
    >
      {/* <Header t={t} /> */}

      {children}
      {/* <Footer t={t} /> */}
    </motion.div>
  );
}
