import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import type { Variants } from "framer-motion";


import img118 from "../../public/assets/Images (118).webp";
import img117 from "../../public/assets/Images (117).webp";
import img116 from "../../public/assets/Images (116).webp";

import img115 from "../../public/assets/Images (115).webp";
import img114 from "../../public/assets/Images (114).webp";
import img113 from "../../public/assets/Images (113).webp";

import img112 from "../../public/assets/Images (112).webp";
import img111 from "../../public/assets/Images (111).webp";
import img110 from "../../public/assets/Images (110).webp";

import img109 from "../../public/assets/Images (109).webp";
import img108 from "../../public/assets/Images (108).webp";
import img107 from "../../public/assets/Images (107).webp";
import { useNavigate } from 'react-router-dom';

const AnimatedCounter = ({ value, duration = 2 }:any) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
};

const AboutSection = () => {
  const navigate = useNavigate();
 const sloganWords = [
  'Livetta', 'Interiors', 'is', 'a', 'Bengaluru-based', '3D', 'interior',
  'design', 'studio', 'offering', 'design-first', 'interior',
  'solutions', 'and', 'execution', 'support.'
];



  const statsData = [
    {
      number: 2026,
      title: "Year We Began",
      description: " A new chapter, built on clarity, care, and long-term vision.",
      isRounded: true,
      images: [img118, img117, img116],
    },
    {
      number: 304,
      title: "Currently Serving",
      description: " Starting locally to stay close, present, and deeply involved.",
      isRounded: false,
      images: [img115, img114, img113],
    },
    {
      number: 150,
      title: "Focused Platform",
      description: "A dedicated space created for those who value understanding, transparency, and belonging.",
      isRounded: true,
      images: [img112, img111, img110],
    },
    {
      number: 12,
      title: "Projects Accepted",
      description: "We take on only what we can give our full attention to — quality always comes first.",
      isRounded: false,
      images: [img109, img108, img107],
    },
  ];



  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };


  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };


  const ImageStack = ({ images, isRounded }:any) => (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {images.map((img:any, idx:any) => (
          <motion.div
            key={idx}
            className={`w-[50px] h-[50px] border-[3px] border-[#f1f1f1] overflow-hidden relative ${
              isRounded ? 'rounded-full' : 'rounded-lg'
            }`}
            style={{ zIndex: 3 - idx }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="h-px bg-[#d6dbdc] flex-1 ml-4 origin-left"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <svg 
        className="w-[30px] h-[90px]  hidden lg:block" 
        viewBox="0 0 30 90"
        fill="none"

      >
        <line x1="15" y1="0" x2="15" y2="90" stroke="#d6dbdc" strokeWidth="1" />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M0.5 19L14.5 22L8.4 22L0.5 20.2V19ZM0.5 24.8L8.4 23.1L14.5 23.1L0.5 26V24.8Z" 
          fill="#d6dbdc"
          transform="translate(-3, 23)"

        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M29.5 19L15.5 22L21.6 22L29.5 20.2V19ZM29.5 24.8L21.6 23.1L15.5 23.1L29.5 26V24.8Z" 
          fill="#d6dbdc"
          transform="translate(0, 23)"
        />
      </svg>
    </div>
  );

  const StatCard = ({ stat, index }:any) => (
    <motion.div
      className="flex-1 min-w-[280px] md:min-w-[320px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-center mb-6">
        <span 
          className="text-[72px] md:text-[80px] font-semibold text-black tracking-[-0.05em] leading-none"
          style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
        >
          <AnimatedCounter value={stat.number} duration={2 + index * 0.3} />
        </span>
      </div>

      <div className="mb-4">
        <h4 
          className="text-black font-medium text-base tracking-[-0.03em]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {stat.title}
        </h4>
        <p 
          className="text-[#828487] text-sm mt-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {stat.description}
        </p>
      </div>

      <ImageStack images={stat.images} isRounded={stat.isRounded} />
    </motion.div>
  );

  const ArrowIcon = () => (
    <div className="w-[30px] h-[30px] bg-[#ffd900] rounded-full flex items-center justify-center relative overflow-hidden group">
      <motion.div 
        className="flex items-center"
        whileHover={{ x: 2 }}
      >
        <div className="w-3 h-[2px] bg-black rounded-full" />
        <div className="absolute right-[8px] w-0 h-0 border-l-[5px] border-l-black border-y-[3px] border-y-transparent" />
      </motion.div>
    </div>
  );

  return (
    <section className="bg-stone-100 py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-[32px]">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="flex justify-center mb-12 md:mb-16 lg:mb-20">
          <motion.p 
            className="text-[#828487] text-sm mb-4 mr-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* 2025 */}
          </motion.p>

          <div className="flex flex-wrap gap-x-[0.35em] gap-y-1 max-w-4xl">
            {sloganWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-black text-[30px] font-semibold leading-[1.4] tracking-[-0.03em]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  willChange: 'transform'
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`${index % 2 === 0 ? 'xl:mt-0' : 'xl:mt-16'}`}
            >
              <StatCard stat={stat} index={index} />
            </div>
          ))}
        </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6">
          
          <motion.a
            onClick={()=>navigate("/contact")}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-4 px-5 py-3 bg-white rounded-full shadow-[0_2px_1px_-1px_rgba(0,0,0,0.06)] border border-white/30 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span 
              className="text-black font-semibold text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Want your own Design?
            </span>
            <ArrowIcon />
          </motion.a>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span 
              className="text-[#828487] text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Slots are avaliable
            </span>
            <motion.div 
              className="w-2 h-2 bg-[#09c300] rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;