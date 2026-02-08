import img26 from "../../public/assets/Advantages/Client-oriented  Approach.webp";
import img19 from "../../public/assets/Advantages/Serious Attention to Detail.webp";
import img30 from "../../public/assets/Advantages/Innovative Solutions.webp";
import img41 from "../../public/assets/Advantages/Logo block image.webp";
import img42 from "../../public/assets/Advantages/Unique Design Aestetic.webp";
import { motion } from "framer-motion";
import logo1 from "../../public/assets/Livetta (1).svg";
import logo from "../../public/assets/Livetta (2).svg";
const Advantages = () => {
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
    <div className="bg-stone-100 p-8 xl:p-12">
      <div className="mx-auto max-w-[1920px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-5 xl:gap-15"
        >
          <strong className="text-black">WHY PEOPLE CHOOSE US</strong>

          <div className="grid grid-cols-2">
            <strong className="text-black text-4xl xl:text-6xl ml-auto">
              Advantages
            </strong>
          </div>
        </motion.div>

        {/* FIRST GRID */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:grid md:grid-cols-5 gap-5 xl:gap-10 mt-15"
        >
          <motion.div variants={itemVariants} className="col-span-2 flex justify-center items-center bg-white shadow-lg rounded-2xl p-6 w-full h-[260px] md:h-[440px] lg:h-110 mx-auto">
            <motion.img
              src={logo1}
              variants={itemVariants}
              alt="Logo"
              loading="lazy"
              className="h-40 sm:h-12 md:h-16 lg:h-40 w-auto cursor-pointer"
            />
          </motion.div>
          <motion.div
              variants={itemVariants}
              className="relative col-span-2"
            >
            <motion.img
              loading="lazy"
              className="w-full h-[260px] md:h-[440px] rounded-2xl object-cover"
              src={img19}
              alt=""
            />

            {/* Text Overlay */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <strong className="text-white text-xl font-semibold leading-tight">
                Unique Design<br />
                Aesthetic
              </strong>
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-5 xl:gap-8">
        <motion.div
  variants={itemVariants}
  className="relative w-full"
>
  {/* Background Image */}
  <motion.img
    loading="lazy"
    className="w-full h-[200px] md:h-[205px] rounded-2xl object-cover"
    src={img30}
    alt=""
  />

  {/* Logo Overlay */}
  <motion.img
    src={logo}
    variants={itemVariants}
    alt="Logo"
    className="absolute inset-0 m-auto w-24 md:w-32 opacity-90"
  />
</motion.div>


           <motion.div
  variants={itemVariants}
  className="relative w-full"
>
  {/* Image */}
  <motion.img
    loading="lazy"
    className="w-full h-[202px] rounded-2xl object-cover"
    src={img41}
    alt=""
  />

{/* Dotted Circle Text */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="w-32 h-32 rounded-full border-2 border-dotted border-white flex items-center justify-center text-center">
    <strong className="text-sm font-semibold text-white leading-tight px-3">
      Innovative<br />Solutions
    </strong>
  </div>
</div>

</motion.div>

          </motion.div>
        </motion.div>

        {/* SECOND GRID */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-5 gap-5 xl:gap-10"
        >
      <motion.div
  variants={itemVariants}
  className="relative md:col-span-2 w-full"
>
  {/* Image */}
  <motion.img
    loading="lazy"
    className="w-full h-[400px] md:h-[440px] rounded-2xl object-cover"
    src={img42}
    alt=""
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

  {/* Text */}
  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
    <strong className="text-white text-2xl font-semibold leading-tight">
      Client-oriented<br />Approach
    </strong>
  </div>
</motion.div>


    <motion.div
  variants={itemVariants}
  className="relative md:col-span-3 w-full"
>
  {/* Image */}
  <motion.img
    loading="lazy"
    className="w-full h-[260px] md:h-[440px] rounded-2xl object-cover"
    src={img26}
    alt=""
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

  {/* Text */}
  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-md">
    <strong className="mt-2 text-white text-2xl font-semibold leading-tight">
      Serious Attention<br />to Detail
    </strong>
  </div>
</motion.div>

        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};


export default Advantages;
