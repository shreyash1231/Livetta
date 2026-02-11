import Client from "./Client";
import Footer from "./Footer";
import Header from "./Header";
import img98 from "../../public/assets/WhatsApp Image 2026-02-10 at 2.55.10 PM.jpeg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

const Contact = () => {

  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const socialLinks = {
      Instagram: "https://www.instagram.com/livettainterior?igsh=OHlldTFnaGwwMG9o",
      FaceBook: "https://www.facebook.com/share/1DB6p9v2yG/",
    };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(
      "https://formsubmit.co/ajax/shreyashchandwadkar@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );
    e.target.reset();
    navigate("/thank-you");
  };


  return (
    <>
      <SEO
        title="Contact Interior Designers in Bengaluru | Free Consultation"
        description="Get in touch with our interior designers in Bengaluru for a free consultation. Discuss your home interior ideas, budget and design requirements today."
        keywords="contact interior designers bengaluru, interior design consultation, home interior enquiry, interior design contact page"
      />
    <div className="bg-stone-100 min-h-screen">
      <Header bgColor="#f5f5f4" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col pt-24 md:pt-70"
      >

        {/* ================= TOP SECTION ================= */}
      <div className="w-full mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-10 px-8 md:px-12">
          {/* Heading */}
          <div className="text-center">
            <motion.strong
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl text-black"
            >
              Let’s make Design
            </motion.strong>
          </div>

          {/* Profile + Text */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-10"
          >
            {/* Profile */}
            <div className="flex gap-5 md:col-span-2 items-center md:justify-center">
              <img
                src={img98}
                loading="lazy"
                alt="Mark Jackson"
                className="h-16 w-16 rounded-full object-cover"
              />
              <motion.div
                variants={itemVariants}
                className="flex flex-col text-sm"
              >
                <motion.span
                  variants={itemVariants}
                  className="text-black font-semibold"
                >
                  Mark Jackson
                </motion.span>
                <motion.span
                  variants={itemVariants}
                  className="text-gray-400 font-semibold"
                >
                  Designer
                </motion.span>
              </motion.div>
            </div>

            {/* Text */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <motion.strong
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl text-black leading-snug"
              >
                Let’s design your dream space together.
                <br />
                Or maybe you want to join our team?
                <br />
                Say hello to us.
              </motion.strong>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full h-[4px] bg-gray-300"
          />

          {/* ================= CONTACT INFO ================= */}
          <motion.div
            variants={itemVariants}
            className="flex w-full items-start text-black flex-col md:flex-row gap-12"
          >
            {/* Left */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
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
            </motion.div>

            {/* Center */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 md:mx-auto"
            >
              <motion.strong
                variants={itemVariants}
                className="text-gray-400"
              >
                Address:
              </motion.strong>
              <motion.strong variants={itemVariants}>
                Bengaluru Karnataka
              </motion.strong>
              <motion.strong variants={itemVariants}>
                India
              </motion.strong>
            </motion.div>

            {/* Right */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              {/* <motion.strong variants={itemVariants}>
                (099) 791-00-75
              </motion.strong> */}
              <motion.strong variants={itemVariants}>
                livettainterior@gmail.com
              </motion.strong>
            </motion.div>
          </motion.div>

          {/* ================= FORM SECTION ================= */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-black"
          >
            {/* Left label */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.strong variants={itemVariants} className="text-3xl">
                Message
              </motion.strong>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 mt-2 max-w-sm"
              >
                Tell us about your space, timeline, or any inspiration you have
                in mind.
              </motion.p>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                variants={itemVariants}
                className="lg:col-span-3 flex flex-col gap-10"
              >
              {/* ---------- FormSubmit Config ---------- */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Optional redirect after submit */}
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

              {/* ---------- Basic Contact ---------- */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Full Name *"
                  required
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address *"
                  required
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                />

                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number (Optional)"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none md:col-span-2"
                />
              </motion.div>

              {/* ---------- Project Basics ---------- */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <select
                  name="Property Type"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                >
                  <option value="">Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Commercial Space</option>
                </select>

                <input
                  type="text"
                  name="Location"
                  placeholder="Property Location (City / Area)"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                />

                <select
                  name="Property Size"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                >
                  <option value="">Property Size</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK / Villa</option>
                  <option>Custom</option>
                </select>
              </motion.div>

              {/* ---------- Design Requirement ---------- */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <strong className="text-lg">What are you looking for?</strong>
                <select
                  name="Design Requirement"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option>Only 3D Interior Design</option>
                  <option>3D Design + Design Consultation</option>
                  <option>Design + Execution</option>
                </select>
              </motion.div>

              {/* ---------- Style + Budget ---------- */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <select
                  name="Style Preference"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                >
                  <option value="">Style Preference</option>
                  <option>Modern</option>
                  <option>Contemporary</option>
                  <option>Minimal</option>
                  <option>Luxury</option>
                  <option>Classic</option>
                  <option>Not Sure</option>
                </select>

                <select
                  name="Budget Range"
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none"
                >
                  <option value="">Budget Range</option>
                  <option>Under ₹5L</option>
                  <option>₹5L – ₹10L</option>
                  <option>₹10L – ₹20L</option>
                  <option>₹20L+</option>
                </select>
              </motion.div>

              {/* ---------- Message ---------- */}
              <motion.textarea
                name="Message"
                placeholder="Your Message"
                rows={4}
                className="border-b border-gray-300 bg-transparent py-3 focus:outline-none resize-none"
              />

              {/* ---------- CTA ---------- */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between flex-wrap gap-6"
              >
                <motion.p variants={itemVariants} className="text-sm max-w-md">
                  If you’re ready to shape the future with us, your journey could start here.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="
                    flex items-center justify-center
                    gap-3 border
                    px-4 md:px-6 lg:px-12
                    py-2 md:py-3
                    text-sm md:text-base lg:text-lg
                    rounded-full cursor-pointer w-fit
                  "
                >
                  Submit
                  <span className="group w-8 h-8 rounded-full bg-[#ffd900] hover:bg-white text-black flex items-center justify-center relative overflow-hidden">
                    <span
                      className="
                        absolute left-3 h-[2px] w-0 bg-black
                        transition-all duration-300 ease-out
                        group-hover:w-4
                      "
                    />
                    <span className="relative z-10">
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.form>

          </motion.div>
        </div>
      </div>

        {/* Clients */}
        <motion.div variants={itemVariants} className="mt-24">
          <Client />
        </motion.div>

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
    </>
  );
};

export default Contact;
