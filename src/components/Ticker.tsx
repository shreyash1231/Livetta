
import { motion } from 'framer-motion';

const Ticker = () => {
  const tickerItems = [
    { text: "10%", subtext: "Off to Our Friends" },
    { text: "10%", subtext: "Off to Our Friends" },
    { text: "10%", subtext: "Off to Our Friends" },
    { text: "10%", subtext: "Off to Our Friends" },
    { text: "10%", subtext: "Off to Our Friends" },
    { text: "10%", subtext: "Off to Our Friends" },
  ];


  return (
    <div className="bg-[#f1dfc2] py-4 lg:py-8 overflow-hidden">
      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 px-4"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            
            <div className="flex items-baseline gap-2">
              <span 
               className="text-xl md:text-2xl font-semibold tracking-tight text-black"

              >
                {item.text}
              </span>
              {item.subtext && (
                <span className="text-black text-lg">
                  {item.subtext}
                </span>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;