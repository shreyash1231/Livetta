import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import kitchen from "../../public/assets/4th Project/Hero Section Image/Warm Contemporary Scandinavian.webp";
import estate from  "../../public/assets/5th Project/Hero Section Image/Kitchen.webp";
import logo from "../../public/assets/Livetta (1).svg"
import hero from  "../../public/assets/1st Project/Hero Section Image/Modern Scandinavian Living.webp";
import house from  "../../public/assets/2nd Project/Hero Section Image/Urban Nordic Elegance.webp";
import kitchen2 from "../../public/assets/3rd project/Hero Section Image/Soft Minimal Luxury.webp";
const Project = () => {
  const [page, setPage] = useState("next");
  const navigate =useNavigate();
  const nextArray = [
   {
    image: hero,
    title: "Modern Scandinavian Living",
    // subtitle: "quiet warmth, light, and balance",
  },
  {
    image: house,
    title: "Urban Nordic Elegance",
    // subtitle: "balanced tones, intentional space",
  },
  {
    image: kitchen2,
    title: "Soft Minimal Luxury",
    // subtitle: "openness and breathability",
  },
  ];

  const previousArray = [
  {
    image: kitchen,
    title: "Warm Contemporary Scandinavian",
    // subtitle: "quiet warmth, light, and balance",
  },
  {
    image: estate,
    title: "Timeless Nordic Modern",
    // subtitle: "balanced tones, intentional space",
  },
  // {
  //   image: estate1,
  //   title: "Quiet Air",
  //   subtitle: "openness and breathability",
  // },
  ];
  const images = page === "next" ? nextArray : previousArray;

  return (
    <div className="bg-stone-100">
      <div className="max-w-[1920px] mx-auto">
      <div className="p-8 md:p-12 grid grid-rows-2 md:gap-5">
        <span className="flex flex-col gap-3">
          <div className="w-full h-[2px] bg-black"></div>
          <strong className="text-black">WHAT WE’RE PROUD OF</strong>
        </span>

        <div className="grid grid-cols-1 -mt-[20px] lg:mt-0 lg:flex gap-5 lg:gap-25">
          <strong className="lg:flex-2 text-4xl lg:text-6xl xl:text-6xl text-black">
            Selected Works:
          </strong>

          <div className="flex gap-3 lg:flex-1 lg:gap-4">
            <div className="flex items-center lg:gap-2">
              <span
                className="cursor-pointer w-10 h-10 xl:w-18 xl:h-18 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                onClick={() => setPage("previous")}
              >
                <ArrowLeft className="w-6 h-6 xl:w-8 xl:h-8 text-black" />
              </span>
              {page === "previous" && (
                <>
                  <h4 className="text-gray-700 text-xl hidden lg:block xl:hidden">
                    Previous
                  </h4>
                  <h4 className="text-gray-700 text-xl hidden xl:block">
                    Previous page
                  </h4>
                </>
              )}
            </div>

            <div className="flex items-center lg:gap-2 lg:ml-auto">
              {page === "next" && (
                <>
                 <h4 className="text-gray-700 text-xl hidden lg:block xl:hidden">
                    Next
                  </h4>
                  <h4 className="text-gray-700 text-xl hidden xl:block">
                    Next page
                  </h4>
                </>
              )}
              <span
                className="cursor-pointer w-10 h-10 xl:w-18 xl:h-18 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                onClick={() => setPage("next")}
              >
                <ArrowRight className="w-6 h-6 xl:w-8 xl:h-8 text-black" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 md:p-12">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
            <div className="relative w-full overflow-hidden rounded-2xl">
              <motion.img
                src={img.image}
                alt="project"
                loading="lazy"
                className={`w-full object-cover rounded-xl ${
                  index % 2 === 1 ? "h-100 lg:h-100 xl:h-150" : "h-100 lg:h-90 xl:h-140"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  const urlTitle = img.title.replace(/\s+/g, "-");
                  navigate(`/project/${urlTitle}`);
                }}
              />

               {/* Logo Overlay */}
              <img
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  className="absolute top-1 right-1 w-30 h-auto z-10"
                />

            </div>
            </motion.div>
            <div className="flex flex-col gap-2">
              <strong className="text-black text-xl xl:text-2xl">
                {img.title}
              </strong>

              {/* <span className="text-gray-600 text-lg xl:text-xl">
                {img.subtitle}
              </span> */}
            </div>

            {index === images.length - 1 && (
              <strong className="flex items-center gap-4 text-black text-lg">
                View Our Explorations
                <span
                  className="cursor-pointer w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                  // onClick={() => navigate("/projects")}
                >
                  <ArrowRight className="w-8 h-8 text-black" />
                </span>
              </strong>
            )}
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
