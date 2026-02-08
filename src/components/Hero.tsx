import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../../public/assets/Home - Hero Section/Home Page - Hero Section.webp";

const Hero = () => {
  const { scrollY } = useScroll();

  // const imageY = useTransform(scrollY, [0, 600], [0, 160]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

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
    <section className="relative h-screen overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute inset-0"
      >
        <img src={heroImage} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 mx-auto max-w-[1920px]"
      >

        <motion.strong
          variants={itemVariants}
          className="text-[clamp(3rem,7vw,10rem)] leading-none"
        >
          More Than a Space.
        </motion.strong>

        <div className="flex flex-wrap md:gap-4 ml-auto ">
          <motion.strong
            variants={itemVariants}
            className="text-[clamp(3rem,7vw,10rem)]"
          >
            A Sense
          </motion.strong>
          <motion.strong
            variants={itemVariants}
            className="text-[clamp(3rem,7vw,10rem)] text-[#F1DFC2] whitespace-nowrap"
          >
            of Belonging.
          </motion.strong>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
