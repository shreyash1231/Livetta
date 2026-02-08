import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import img98 from "../../public/assets/femail1.jpg"
import img110 from "../../public/assets/male1.jpg";
import img112 from "../../public/assets/male2.jpg";
import img111 from "../../public/assets/female2.jpg";
import { motion } from "framer-motion";
const clients = [
  {
    name: "Ananya Mehta",
    role: "Homeowner",
    image: img98,
    title: "The experience felt calm, considered, and deeply personal.",
    description:
      "From the first conversation to the final design, everything felt thoughtfully handled. The clarity in design helped me move forward with confidence and zero second thoughts.",
  },
  {
    name: "Rohit Kapoor",
    role: "Entrepreneur",
    image: img110,
    title:
      "They understood how I wanted my space to feel, not just how it should look.",
    description:
      "The designs reflected my lifestyle perfectly — subtle, functional, and timeless. It felt less like a service and more like a collaboration.",
  },
  {
    name: "Neha Sharma",
    role: "Marketing Consultant",
    image: img111,
    title: "Every detail was intentional, nothing felt forced.",
    description:
      "The design process was smooth and reassuring. The visuals made decision-making effortless, and the final outcome stayed true to the original vision.",
  },
  {
    name: "Arjun Malhotra",
    role: "Product Lead",
    image: img112,
    title: "A rare balance of creativity, clarity, and trust.",
    description:
      "What stood out most was the transparency and support even beyond design delivery. It gave me complete confidence during execution.",
  },
];


const Client = () => {
  const [current, setCurrent] = useState(0);

  // const nextClient = () => {
  //   setCurrent((prev) => (prev + 1) % clients.length);
  // };

  // const prevClient = () => {
  //   setCurrent((prev) =>
  //     prev === 0 ? clients.length - 1 : prev - 1
  //   );
  // };

  const client = clients[current];
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
    <div className="bg-white p-8 lg:p-12 h-180">
       <div className="mx-auto max-w-[1920px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 lg:gap-15"
      >
       
        {/* Heading */}
        <motion.div variants={itemVariants} className="flex flex-col text-black gap-3">
          <strong>OUR CLIENTS SAY</strong>
          <div className="text-gray-400 text-sm lg:text-xl">
            <strong>The kind words of our clients</strong>
            <strong> encourage us to do even better.</strong>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid xl:grid-cols-3 xl:gap-8 justify-center">
          {/* Profile */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 text-black items-center">
            <img
              src={client.image}
              loading="lazy"
              className="h-24 w-24 rounded-full object-cover"
              alt={client.name}
            />
            <strong>
              {client.name} <br />
              <span className="text-gray-400 ">{client.role}</span>
            </strong>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 flex flex-col gap-10"
          >
            <strong className="text-2xl xl:text-4xl text-black">
              {client.title}
            </strong>

            <p className="text-lg xl:text-2xl text-gray-400">
              {client.description}
            </p>

            {/* Arrows */}
            <motion.div variants={itemVariants} className="flex gap-3">
              <span
                onClick={() => setCurrent((c) => (c === 0 ? clients.length - 1 : c - 1))}
                className="cursor-pointer w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ArrowLeft className="text-black"/>
              </span>

              <span
                onClick={() => setCurrent((c) => (c + 1) % clients.length)}
                className="cursor-pointer w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ArrowRight className="text-black" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Client;
