import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl text-center flex flex-col items-center gap-6"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900">
          Thank you!
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
          Your message has been sent successfully.
          We’ll get back to you shortly to discuss your ideas and next steps.
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="
            mt-6
            w-56
            py-4
            rounded-full
            bg-black text-white
            text-lg md:text-xl
            hover:bg-black/80
            transition
            cursor-pointer
          "
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ThankYou;
