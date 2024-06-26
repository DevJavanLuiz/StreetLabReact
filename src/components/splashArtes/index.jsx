import "./style.css";
import { motion } from "framer-motion";

export function SplashArt() {
  return (
    <div className="splash">
      <motion.img
        initial={{
          opacity: 0,
          translateX: "-50%",
          translateY: "-50%",
          rotate: 180 + 360,
        }}
        animate={{
          opacity: 1,
          translateX: "-50%",
          translateY: "-50%",
          rotate: 0,
        }}
        transition={{
          delay: 1,
          duration: 1.3,
          ease: "easeInOut",
          type: "spring",
        }}
        className="logo-splash"
        src="src/components/icons/logo.png"
        alt=""
      />
      <div className="splash-image"></div>
    </div>
  );
}
