import img91 from "../../public/assets/Home - The People Behind the Work/Modern Balance.webp";
import img90 from "../../public/assets/Home - The People Behind the Work/Quiet Luxury.webp";
import img89 from "../../public/assets/Home - The People Behind the Work/Warm Minimal.webp";
import img88 from "../../public/assets/Home - The People Behind the Work/Nordic Calm.webp";
import img80 from "../../public/assets/Home - The People Behind the Work/Urban Stillness.webp";
import { motion } from "framer-motion";
import logo from "../../public/assets/Livetta (1).svg";
import { ArrowRight } from "lucide-react";
const Team = () => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-stone-100 p-8 md:p-12"
    >
      <div className="mx-auto max-w-[1920px]">
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <motion.strong className="text-black text-xl md:text-2xl">
            WHO WORK FOR YOU
          </motion.strong>
          <motion.strong className="text-gray-400 text-sm md:text-xl">
            The team which changes the world <br />
            of interior design
          </motion.strong>
          <motion.strong className="text-black text-lg md:text-3xl xl:text-6xl xl:ml-80 mt-5 md:0">
            The People Behind the Work:
          </motion.strong>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-5 xl:mt-20 md:gap-6">
          <motion.div
            variants={itemVariants}
            className="flex flex-col text-black text-sm md:text-2xl lg:text-2xl md:gap-2"
          >
            <motion.strong variants={itemVariants} className="flex flex-col">
              <motion.strong variants={itemVariants}>
                <img src={logo} loading="lazy" className="w-20 h-20" />
              </motion.strong>
              <motion.strong variants={itemVariants} className="font-semibold">
                We believe great spaces are created by the right people, not
                large teams. Our work is shaped through carefully chosen
                collaborations — designers, specialists, and thinkers aligned
                with our values and standards.
              </motion.strong>
            </motion.strong>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 mt-5"
          >
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <img src={img91} loading="lazy" className="rounded-xl h-30 md:h-45 w-full" />
              <div className="absolute flex flex-col -mt-20 md:-mt-25 ml-5 md:ml-10 text-sm md:text-xl">
                <span className="text-white">
                  <strong>Modern</strong>
                  <br />
                  <strong className="text-[#F1DFC2]">Balance</strong>
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <img src={img90} loading="lazy" className="rounded-xl h-30 md:h-45 w-full" />
              <div className="absolute flex flex-col -mt-20  md:-mt-25 ml-5 md:ml-10 text-sm md:text-xl">
                <span className="text-white">
                  <strong>Quiet</strong>
                  <br />
                  <strong className="text-[#F1DFC2]">Luxury</strong>
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <img src={img89} loading="lazy" className="rounded-xl h-30 md:h-45 w-full" />
              <div className="absolute flex flex-col -mt-15 md:-mt-25 ml-5 md:ml-10 text-sm md:text-xl">
                <span className="text-white">
                  <strong>Warm</strong>
                  <br />
                  <strong className="text-[#F1DFC2]">Minimal</strong>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 mt-5 xl:gap-6">
          <motion.div
            variants={itemVariants}
            className="col-span-2 relative flex justify-end"
          >
            {/* Image */}
            <img
              src={img80}
              loading="lazy"
              className="w-full max-w-md sm:max-w-md lg:max-w-lg lg:h-90 rounded-xl"
            />

            {/* Left Overlay */}
            <div className="absolute right-35 bottom-6 sm:right-65 sm:bottom-15 lg:right-80 lg:bottom-21 flex flex-col text-xs sm:text-sm md:text-lg text-white">
              <ArrowRight size={22} className="text-white" />

              <span className="text-white leading-tight">
                <strong>Nordic</strong>
                <br />
                <strong>Calm</strong>
              </span>

              <span className="text-[#f1dfc2] leading-tight">
                <strong>Designed by</strong>
                <br />
                <strong>Valeria Novakova</strong>
              </span>
            </div>

            {/* Right Overlay */}
            <div className="absolute right-4 bottom-6 sm:right-8 sm:bottom-10 lg:right-14 lg:bottom-16 flex flex-col text-xs sm:text-sm md:text-lg text-white">
              <strong>Soft light, warmth,</strong>
              <strong>and balance</strong>
              <strong className="text-[#f1dfc2]">inspired by</strong>
              <strong className="text-[#f1dfc2]">Scandinavian living</strong>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-10 xl:mt-0 w-full"
          >
            <div className="relative xl:col-span-2">
              <img src={img88} loading="lazy" className="rounded-xl h-30 md:h-45 w-full" />
              <div className="absolute flex flex-col -mt-20 md:-mt-25 ml-5 md:ml-10 text-sm md:text-xl">
                <span className="text-white">
                  <strong>Urban</strong>
                  <br />
                  <strong className="text-[#F1DFC2]">Stillness</strong>
                </span>
              </div>
            </div>
            <div className="hidden lg:block xl:hidden"></div>
            <div className="w-full h-full rounded-xl xl:h-[175px] border-2 border-dotted border-black-600 w-40 h-40 flex flex-col items-center justify-center text-center xl:col-span-2">
              <div className="text-3xl font-bold text-black leading-none">
                50+
              </div>
              <div className="text-sm text-gray-700 mt-1">
                People in business
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
