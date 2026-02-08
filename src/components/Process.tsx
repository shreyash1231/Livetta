import img69 from "../../public/assets/Home - The Process Section/First Conversation.jpeg";
import img70 from "../../public/assets/Home - The Process Section/Understanding the Space.jpeg";
import img71 from "../../public/assets/Home - The Process Section/Concept Direction.jpeg";
import img72 from "../../public/assets/Home - The Process Section/Visual Design.jpeg";
import img73 from "../../public/assets/Home - The Process Section/Refinement.jpeg";
import img74 from "../../public/assets/Home - The Process Section/Final Design Delivery.jpeg";
import img75 from "../../public/assets/Home - The Process Section/Ongoing Support.jpeg";
import bgimage from "../../public/assets/Images (3).webp";
import { motion } from "framer-motion";

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
    transition: { duration: 0.6, ease: "easeOut" as const},
  },
};

const ProcessCard = ({
  step,
  img,
  title,
  description,
  className = "",
}: {
  step: string;
  img: any;
  title: string;
  description: string;
  className?: string;
}) => (
  <motion.div
    variants={itemVariants}
    className={`flex flex-col gap-3 xl:px-6 ${className}`}
  >
    <h5 className="text-gray-400 text-lg md:text-2xl">{step}.</h5>
    <img src={img} alt={title} loading="lazy" className="w-full rounded-xl h-25" />
    <strong className="text-xl text-white">{title}</strong>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);


const Process = () => {
  return (
      <div
      className="p-8 lg:p-12 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgimage}')` }}
    >

      <div className="max-w-[1920px] mx-auto">
       <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-10"
        >

          {/* Heading */}
          <motion.strong
            variants={itemVariants}
            className="text-white text-2xl"
          >
            How We Work
          </motion.strong>

          {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Journey Title */}
           {/* The Journey */}
        <motion.strong
            variants={itemVariants}
            className="
                text-4xl lg:text-6xl xl:text-8xl text-white items-center justify-center
                md:col-span-2
                xl:col-start-1 xl:row-start-1
            "
            >
            The Journey
        </motion.strong>

            {/* 01 */}
        <ProcessCard
            step="01"
            img={img69}
            title="First Conversation"
            description="We begin with a quiet, thoughtful discussion — understanding your lifestyle, expectations, and how you want your space to feel."
            className="xl:col-start-4 xl:row-start-1"
        />

            {/* 02 */}
        <ProcessCard
            step="02"
            img={img70}
            title="Understanding the Space"
            description="We study your layout, light, surroundings, and practical needs to form a clear foundation before anything takes shape."
            className="xl:col-start-1 xl:row-start-2"
        />

            {/* 03 */}
        <ProcessCard
            step="03"
            img={img71}
            title="Concept Direction"
            description="A design direction is created that reflects your personality, preferences, and the mood you want your space to hold."
            className="xl:col-start-2 xl:row-start-2"
        />

            {/* 04 */}
        <ProcessCard
            step="04"
            img={img72}
            title="Visual Design"
            description="Your space comes to life through detailed 3D visuals, helping you see, feel, and experience it before decisions are made."
            className="xl:col-start-3 xl:row-start-2"
        />

            {/* 05 */}
        <ProcessCard
            step="05"
            img={img73}
            title="Refinement"
            description="We fine-tune every element based on your feedback — ensuring comfort, flow, and clarity in every detail."
            className="xl:col-start-4 xl:row-start-2"
        />

            {/* 06 */}
        <ProcessCard
            step="06"
            img={img74}
            title="Final Design Delivery"
            description="You receive a complete, well-structured design package, ready for execution whenever you choose to move forward."
            className="xl:col-start-2 xl:row-start-3"
        />

            {/* Depends */}
        <motion.div
            variants={itemVariants}
            className="
                flex items-center gap-3
                xl:col-start-3 xl:row-start-3
            "
        >
        <span className="text-yellow-300 text-2xl">*</span>
        <span className="text-white text-sm md:text-lg">
            Depends on your wishes
        </span>
        </motion.div>

            {/* 07 */}
         <ProcessCard
            step="07"
            img={img75}
            title="Ongoing Support"
            description="Even after delivery, we remain available to guide, clarify, and support you as your space moves toward reality."
            className="xl:col-start-4 xl:row-start-3"
        />

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
