import Header from "./Header";
import imge111 from "../../public/assets/2nd Section (1st Image)/Website Cover Photo (97).webp";
import imge112 from "../../public/assets/Join the Team (Last Section)/Always positive.webp";
import imge113 from "../../public/assets/Join the Team (Last Section)/Color selection.webp";
import imge114 from "../../public/assets/Join the Team (Last Section)/Working on plan.webp";
import Team from "./Team";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img98 from "../../public/assets/WhatsApp Image 2026-02-10 at 2.55.10 PM.jpeg";
import SEO from "./SEO";
import { useNavigate } from "react-router-dom";
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

const Aboutcompany = () => {
  const navigate = useNavigate();
  const timelineData = [
    {
      year: "2026",
      text: "Launch of a premium, design-only interior platform focused on high-quality 3D visualization, clarity, and personalized designer access.",
    },
    {
      year: "2027",
      text: "Expansion of the designer network and service offerings, enabling homeowners to choose styles, designers, and design depth with transparent pricing.",
    },
    {
      year: "2028",
      text: "Introduction of advanced design experiences — immersive walkthroughs, refined material detailing, and optional site-visit collaborations.",
    },
    {
      year: "2029",
      text: "Platform growth across major metro cities, establishing a strong presence as a trusted design-first interior brand.",
    },
    {
      year: "2030",
      text: "Positioned as a leading premium interior design platform, setting new standards for design clarity, creativity, and customer confidence.",
    },
  ];

  return (
    <>
      <SEO
        title="About Us | Trusted Interior Design Experts in Bengaluru"
        description="We are a Bengaluru-based interior design team delivering premium, functional and aesthetic home interiors with expert designers and a customer-first approach."
        keywords="about interior designers, interior design company bengaluru, interior design experts, home interior professionals, premium interior brand"
      />
    <div className="bg-stone-100 min-h-screen">
      <Header bgColor="#f5f5f4" />

      <motion.div
        className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="p-8 md:p-12 mx-auto max-w-[1920px] ">
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 xl:grid-cols-4 pt-50"
          >
            <div />
            <strong className="text-4xl xl:text-7xl text-black">About Us</strong>
          </motion.div>

          {/* Intro Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 xl:grid-cols-4 mt-5 gap-5 xl:mt-15"
          >
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <img
                  src={img98}
                  alt="Nishant Tyagi"
                  loading="lazy"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col justify-center text-sm"
                >
                  <motion.span
                    variants={itemVariants}
                    className="text-black font-semibold"
                  >
                    Nishant Tyagi
                  </motion.span>
                  <motion.span
                    variants={itemVariants}
                    className="text-gray-400 font-semibold"
                  >
                    Designer
                  </motion.span>
                </motion.div>
              </div>
              <div className="text-black">
                I deeply love and appreciate my team <br className="hidden xl:block"/>
                for everything they do!
              </div>
            </div>

            <div className="xl:col-span-3 flex flex-col gap-5 xl:gap-10 text-black">
              <strong className="xl:text-2xl leading-relaxed">
              We believe interior design is more than aesthetics; it’s about
              emotion, functionality, and clarity. As a premium 3D interior design studio, we create
              thoughtfully designed homes that reflect refined taste and support modern living.
              From concept to detailed 3D visualisation, our interior design process gives
              homeowners complete confidence before execution, eliminating uncertainty and
              ensuring every decision feels intentional.
              </strong>

              <strong className="text-gray-400 text-sm xl:text-xl leading-relaxed">
                We create user-focused interior designs that balance luxury,
                purpose, and timeless appeal — turning ideas into spaces you can
                truly connect with.
              </strong>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div variants={itemVariants} className="xl:mt-25 mt-5">
            <img
              src={imge111}
              alt="About company"
              loading="lazy"
              className="rounded-2xl w-full object-cover h-160"
            />
          </motion.div>

          {/* History & Timeline */}
          <div className="grid grid-cols-1 xl:grid-cols-4 mt-5 xl:mt-25">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="text-black flex flex-col gap-5">
              <strong className="text-2xl">History</strong>
              <div className="flex flex-col">
                <p className="text-sm">Our history is full of interesting stages</p>
                <p>and events.</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="col-span-3 flex flex-col gap-5 mt-5">
              {timelineData.map((item) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-8 xl:pb-8"
                >
                  <div className="text-2xl xl:text-6xl text-black">{item.year}</div>
                  <div className="xl:col-span-3 text-gray-400 text-sm xl:text-lg">
                    {item.text}
                  </div>
                  <div className="xl:col-span-4 w-full h-[1px] bg-black" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <motion.div variants={itemVariants}>
          <Team />
        </motion.div>

        {/* Images Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10 p-8 md:p-12 mx-auto max-w-[1920px]"
        >
          <div className="xl:col-span-4 w-full h-[1px] bg-black" />
          <img src={imge112} loading="lazy" className="rounded-2xl" />
          <img src={imge113} loading="lazy" className="rounded-2xl" />
          <img src={imge114} loading="lazy" className="rounded-2xl" />
        </motion.div>

        {/* Join the Team */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 xl:grid-cols-4 gap-10 p-8 md:p-12 mx-auto max-w-[1920px]"
        >
          <div className="xl:col-span-2 xl:ml-auto">
            <strong className="text-2xl text-black">Join the Team</strong>
          </div>
          <div className="flex flex-col gap-8 xl:col-span-2">
            <div className="flex flex-col">
              <div className="text-xl text-black">If you’re ready to shape the future with us,</div>
              <div className="text-xl text-black">your journey could start here.</div>
            </div>
            <div className="flex xl:items-center gap-4 cursor-pointer">
                  <a
                    onClick={()=>navigate("/contact")}
            className={`hidden md:flex items-center gap-4 border px-12 xl:px-12 xl:py-2 rounded-full text-sm text-black`}
          >
            <strong>Say "Hello"</strong>

            <span className="group w-8 h-8 rounded-full bg-[#ffd900] hover:bg-white text-black flex items-center justify-center relative overflow-hidden">
              {/* Tail */}
              <span
                className="
                        absolute left-3 h-[2px] w-0 bg-black
                        transition-all duration-300 ease-out
                        dire
                        group-hover:w-4
                      "
                  />
                  <span className="group relative w-8 h-8 rounded-full bg-[#ffd900] hover:bg-white transition flex items-center justify-center overflow-hidden">
                    {/* Tail */}
                    <span
                      className="
                      absolute
                      w-0 h-[1px]
                      bg-black
                      rotate-[-180deg]
                      origin-left
                      transition-all duration-300 ease-out
                      group-hover:w-3 
                    "
                  style={{
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '2px',
                  }}
                />
                <ArrowRight size={14} className="relative z-10" />

              </span>


              {/* Arrow */}
            </span>
          </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-30">
          <Footer />
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Aboutcompany;
