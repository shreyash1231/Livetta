import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

/* Images */
import hero from "../../public/assets/1st Project/Hero Section Image/Modern Scandinavian Living.webp";
import img1 from "../../public/assets/2nd Project/Hero Section Image/Urban Nordic Elegance.webp";
import img2 from "../../public/assets/3rd project/Hero Section Image/Soft Minimal Luxury.webp";
import img3 from "../../public/assets/4th Project/Hero Section Image/Warm Contemporary Scandinavian.webp";
import img4 from "../../public/assets/5th Project/Hero Section Image/Kitchen.webp";
import { useNavigate } from "react-router-dom";
/* Animation variants */
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ease: "easeOut",
    },
  },
};

const Projects = () => {

  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      category: "home",
      date: "11 Jan 2026",
      title: "Modern Scandinavian Living",
      location: "Bengaluru",
      image: hero,
    },
    {
      id: 2,
      category: "home",
      date: "25th Dec 2025",
      title: "Urban Nordic Elegance",
      location: "Bengaluru",
      image: img1,
    },
    {
      id: 3,
      category: "office",
      date: "15 Dec 2025",
      title: "Soft Minimal Luxury",
      location: "Bengaluru",
      image: img2,
    },
    {
      id: 4,
      category: "different",
      date: "30 Nov 2025",
      title: "Warm Contemporary Scandinavian",
      location: "Bengaluru",
      image: img3,
    },
    {
      id: 5,
      category: "different",
      date: "20 Nov 2025",
      title: "Timeless Nordic Modern",
      location: "Bengaluru",
      image: img4,
    },
  ];

  return (
    <div className="bg-stone-100 min-h-screen flex flex-col">
      <Header bgColor="#f5f5f4" />
     <div className="w-full mx-auto max-w-[1920px]">
      <div className="flex flex-col p-8 md:p-12 gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-16 pt-32">
          <div className="flex flex-col gap-5">
            <strong className="text-black text-4xl xl:text-8xl">
              Our Projects
            </strong>
            <strong className="text-black text-xl text-center">
              Design That Speaks Before Execution Begins
            </strong>
          </div>
          {/* Tabs
          <div className="flex justify-center gap-5 xl:gap-10 text-lg">
            {["all", "home", "office", "different"].map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer capitalize pb-1 transition
                  ${
                    activeTab === tab
                      ? "text-black border-b-2 border-black font-semibold"
                      : "text-gray-400 hover:text-black"
                  }`}
              >
                {tab}
              </span>
            ))}
          </div> */}
        </div>
        

        {/* Projects List */}
        <div
          className="flex flex-col gap-8 xl:gap-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="flex flex-col gap-4 xl:gap-8 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 xl:h-80 rounded-2xl object-cover"
                  onClick={() => {
                  const urlTitle = project.title.replace(/\s+/g, "-");
                  navigate(`/project/${urlTitle}`);
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-6 items-center">
                <span className="text-gray-400">{project.date}</span>

                <div className="flex flex-col xl:gap-3 col-span-2">
                  <strong className="text-black text-lg lg:text-4xl">
                    {project.title}
                  </strong>
                  <span className="text-gray-400">
                    {project.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
     </div>
    <div className="mt-auto">
  <Footer />
</div>

 
    </div>
  );
};

export default Projects;
