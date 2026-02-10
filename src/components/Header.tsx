import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import tree from "../../public/assets/Home - Where a Space Begins to Feel Like Home/Where a Space Begins to Feel Like Home.webp";
import p1 from "../../public/assets/Home - The People Behind the Work/Modern Balance.webp";
import p2 from "../../public/assets/Home - The People Behind the Work/Quiet Luxury.webp";
import p3 from "../../public/assets/Home - The People Behind the Work/Warm Minimal.webp";
import p4 from "../../public/assets/Home - The People Behind the Work/Nordic Calm.webp";
import p5 from "../../public/assets/Home - The People Behind the Work/Urban Stillness.webp";
// import p1 from "../../public/assets/Images (90).webp";
// import p2 from "../../public/assets/Images (91).webp";
// import p3 from "../../public/assets/Images (88).webp";
// import p4 from "../../public/assets/Images (89).webp";
// import p5 from "../../public/assets/Images (87).webp";
import { Link } from "react-router-dom";
import logo from "../../public/assets/Livetta (2).svg";
import logo1 from "../../public/assets/Livetta (1).svg";
import { useNavigate } from "react-router-dom";
import heroImage from "../../public/assets/Home - Hero Section/Home Page - Hero Section.webp";
const DEFAULT_BG = "rgba(0,0,0,0)";

const Header = ({ bgColor = DEFAULT_BG }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  const peopels = [p1, p2, p3, p4, p5, p4];

  const { scrollY } = useScroll();

  const socialLinks = {
    Instagram: "https://www.instagram.com/livettainterior?igsh=OHlldTFnaGwwMG9o",
    FaceBook: "https://www.facebook.com/share/1DB6p9v2yG/",
  };

  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current > prevScroll && current > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setPrevScroll(current);
    });
  }, [prevScroll, scrollY]);

  const isCustomBg = bgColor !== DEFAULT_BG;
  let textColor;
  if(!open){
      textColor = isCustomBg ? "text-black" : "text-white";
  }
  else{
      textColor="text-white"
  }
  let logosrc;
  if(isCustomBg){
    logosrc = logo1
  }
  else{
    logosrc=logo
  }
  const hoverTextColor = isCustomBg
    ? "hover:text-black/70"
    : "hover:text-[#F1DFC2]";

  return (
    <div className={`relative ${open ? "overflow-hidden" : ""}`}>
      <motion.header
        className="fixed -top-9 md:-top-1 lg:-top-9 left-0 right-0 z-50 px-3 md:px-3 py-3"
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ type: "tween", duration: 0.35 }}
      >
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <motion.span
            className={`tracking-widest text-2xl font-medium ${textColor} ${hoverTextColor}`}
            animate={{ scale: open ? 1.5 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "left center" }}
          >
            <img
              src={logosrc}
              alt="Logo"
              loading="lazy"
              className="h-40 sm:h-12 md:h-16 lg:h-40 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
          </motion.span>

          <div className="flex items-center gap-4 cursor-pointer">
            <a
              href={`mailto:livettainterior@gmail.com`}
              className={`hidden md:flex items-center gap-4 border px-12 py-2 xl:px-12 xl:py-2 rounded-full text-sm ${textColor}`}
            >
              <strong>Say "Hello"</strong>

              <span className="group w-8 h-8 rounded-full bg-[#ffd900] hover:bg-white text-black flex items-center justify-center relative overflow-hidden">
                <span className="absolute left-3 h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-4" />
                <span className="relative w-8 h-8 rounded-full bg-[#ffd900] hover:bg-white transition flex items-center justify-center overflow-hidden">
                  <span
                    className="absolute w-0 h-[1px] bg-black rotate-[-180deg] origin-left transition-all duration-300 ease-out group-hover:w-3"
                    style={{
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "2px",
                    }}
                  />
                  <ArrowRight size={14} className="relative z-10" />
                </span>
              </span>
            </a>

            <button onClick={() => setOpen(!open)} className={`${textColor} cursor-pointer`}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 overflow-y-auto"
          >
            <div className="h-80 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-20 p-8 pt-35 relative max-w-[1280px] mx-auto">
              {/* LEFT */}
              <div className="relative">
                <div className="relative w-full h-[65%] mb-8">
                  <img
                    src={heroImage}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <img
                    src={tree}
                    alt=""
                    loading="lazy"
                    className="absolute bottom-[-18px] right-[-18px] w-2/5 rounded-lg shadow-2xl"
                  />
                </div>
                <div className="text-gray-400 text-sm leading-6">
                  <div>Bengaluru Karnataka</div>
                  <div>India</div>
                  <br />
                  {/* <a href="tel:+380997910075" className="text-white hidden block lg:block">
                    (000) 000-00-00
                  </a> */}
                  <a
                    href={`mailto:livettainterior@gmail.com`}
                    className="text-white hidden lg:block"
                  >
                   livettainterior@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-start lg:justify-center items-start order-[-1] lg:order-none">
                <ul className="text-left">
                  {[
                    { label: "Home", path: "/" },
                    { label: "Projects", path: "/projects" },
                    { label: "About Us", path: "/AboutUs" },
                    { label: "Contact", path: "/contact" },
                  ].map((item) => (
                    <li key={item.label} className="my-6">
                      <Link
                        to={item.path}
                        className="text-white text-3xl font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:translate-x-[-50%]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  {Object.entries(socialLinks).map(([item, link]) => (
                    <li key={item}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-start items-start gap-4 md:flex-row md:justify-center hidden lg:block">
                <div className="grid grid-cols-3 grid-rows-2 gap-3">
                  {peopels.map((p, i) => (
                    <img
                      key={i}
                      src={p}
                      alt={`Person ${i + 1}`}
                      loading="lazy"
                      className={`w-20 h-20 rounded-[20%] object-cover transition-transform duration-400 ${
                        open ? "translate-y-0" : "translate-y-4"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
