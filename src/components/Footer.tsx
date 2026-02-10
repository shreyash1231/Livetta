import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hero1 from "../../public/assets/Footer Image/Website Cover Photo - 2026-01-30T133532.400.webp";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = {
    Instagram: "https://www.instagram.com/livettainterior?igsh=OHlldTFnaGwwMG9o",
    FaceBook: "https://www.facebook.com/share/1DB6p9v2yG/",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-8 md:p-12 w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${hero1}')` }}
    >
      <div className="flex flex-col gap-10 mx-auto max-w-[1920px]">

        {/* Top section */}
        <div className="grid grid-cols-1 xl:grid-cols-11 gap-5 items-start">

          {/* Text */}
          <div className="xl:col-span-3">
            <span className="text-3xl">
              <strong className="text-white">
                More Than a Space.<br />
              </strong>
              <strong className="text-[#F1DFC2]">
                A Sense of Belonging.
              </strong>
            </span>
          </div>

          {/* Navigation */}
          <div className="xl:col-span-5 text-3xl flex flex-col xl:gap-50 cursor-pointer xl:ml-auto">
            <span className="flex flex-col gap-4">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "About Us", path: "/AboutUs" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <motion.span
                  key={item.label}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <strong
                    className="hover:text-[#F1DFC2]"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </strong>
                </motion.span>
              ))}
            </span>

            <motion.div whileHover={{ scale: 1.05 }}>
              <strong className="hover:text-[#F1DFC2] text-lg">
                {/* (000) 000-00-00 */}
              </strong>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="xl:col-span-3 flex xl:justify-end gap-8 text-gray-500 cursor-pointer items-start justify-start">
           {Object.entries(socialLinks).map(([social, link]) => (
              <motion.a
                key={social}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#F1DFC2] font-semibold"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex justify-center mt-10">
          <motion.strong
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="text-2xl xl:text-7xl text-white hover:text-[#F1DFC2] text-center cursor-pointer"
          >
            livettainterior@gmail.com
          </motion.strong>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

          {/* Left */}
          <div className="flex flex-wrap gap-4 items-center">
            <strong className="text-gray-500">© All rights Reserved</strong>

            <motion.strong
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/privacy")}
              className="text-gray-500 hover:text-[#F1DFC2] cursor-pointer"
            >
              Privacy policy
            </motion.strong>

            <motion.strong
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/terms")}
              className="text-gray-500 hover:text-[#F1DFC2] cursor-pointer"
            >
              Terms of Service
            </motion.strong>
          </div>

          {/* Right */}
          <div className="flex justify-center items-center text-center">
            <span className="text-gray-500">
              <strong>Bengaluru Karnataka</strong><br />
              <strong>India</strong>
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
