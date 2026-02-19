import { ArrowRight } from "lucide-react";
import bgimage from "../../public/assets/Home - Where a Space Begins to Feel Like Home/Where a Space Begins to Feel Like Home.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Craft = () => {

  const navigate = useNavigate();

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };
    return (
      <section className="relative overflow-hidden min-h-screen">
  {/* Background image layer */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="absolute inset-0"
  >
    <img
      src={bgimage}
      alt="Background"
      loading="lazy"
      className="w-full h-full object-cover"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
  </motion.div>

  {/* Content */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative z-10 min-h-screen
             flex flex-col justify-end items-center
             gap-8 p-8 lg:p-12"
>

    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-2 text-sm md:text-xl"
    >
      <motion.div variants={itemVariants} className="ml-auto xl:flex xl:flex-col">
        <motion.strong variants={itemVariants}>
          Thoughtfully designed environments,
        </motion.strong>
        <motion.strong
          variants={itemVariants}
          className="text-[#F1DFC2]"
        >
          shaped around how you live.
        </motion.strong>
      </motion.div>
    </motion.div>

    <motion.div variants={itemVariants} className="xl:flex xl:flex-col">
      <motion.strong
        variants={itemVariants}
        className="text-6xl xl:text-8xl text-left"
      >
        Where a Space Begins
      </motion.strong>

      <motion.div variants={itemVariants} className="ml-auto">
        <motion.span
          variants={itemVariants}
          className="text-6xl xl:text-8xl text-right"
        >
          <motion.strong variants={itemVariants}>to Feel</motion.strong>
          <br className="xl:hidden block" />
          <motion.strong
            variants={itemVariants}
            className="text-[#F1DFC2]"
          >
            {" "}Like Home
          </motion.strong>
        </motion.span>
      </motion.div>
    </motion.div>

    <motion.div
      variants={itemVariants}
      className="flex justify-center cursor-pointer"
    >
      <motion.a
        onClick={()=>navigate("/contact")}
        className="w-73 text-[12px] md:text-sm flex items-center
                   border px-6 py-3 rounded-full text-white"
      >
        <strong>Begin With a Conversation</strong>
        <span className="ml-4 w-8 h-8 rounded-full bg-[#ffd900]
                         hover:bg-white text-black flex items-center
                         justify-center transition">
          <ArrowRight size={14} />
        </span>
      </motion.a>
    </motion.div>
  </motion.div>
</section>


    );
}

export default Craft;