import { motion } from "framer-motion";
import logo from "../../public/assets/Livetta (1).svg"

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex bg-[#D0B89C]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-1/3 h-full bg-white border-r border-gray-200"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
          delay: 1,
        }}
        onAnimationComplete={onComplete} 
      />

      <motion.div
        className="w-1/3 h-full bg-white flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
       <span className="text-black text-2xl font-semibold tracking-wide">
  <motion.img
    src={logo}
    alt="logo"
    loading="lazy"
    className="w-32 h-32"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />
</span>
      </motion.div>

      <motion.div
        className="w-1/3 h-full bg-white border-l border-gray-200"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
