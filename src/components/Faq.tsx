import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const faqData = [
  {
    question: "What happens after the design is delivered?",
    answer:
      "We remain available for clarification and guidance, ensuring you feel confident while moving towards execution.",
  },
  {
    question: "Is this service available only in Bengaluru?",
    answer:
      "Currently, our focus is on Bengaluru, allowing us to offer a more personal and involved experience.",
  },
  {
    question: "What exactly do you do?",
    answer:
      "We focus exclusively on interior design.Our role is to help you visualise,understand, and confidently decide on your space before any execution begins.",
  },
  {
    question: "Can I take your design and execute it with another company?",
    answer:
      "Yes, absolutely.Once the design is complete, it’s yours to execute with any contractor or interior company you trust.",
  },
  {
    question: "Do you work on single rooms or only full homes?",
    answer:
      "We work on both. Whether it’s one space or an entire home, every project is approached with the same level of care and intention.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Our pricing is based on the scope of design and level of detail required.Everything is discussed transparently before we begin — no hidden costs.",
  },
  {
    question: "Why should I choose a design-only studio like yours?",
    answer:
      "Because good design should come before big decisions.We help you avoid guesswork, reduce regret, and move forward with confidence.",
  }
];

const Faq = () => {


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
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} 
      className="bg-stone-100 p-8 md:p-12">
        <div className="max-w-[1920px] mx-auto">
      <motion.span variants={itemVariants} className="flex flex-col gap-3">
        <motion.div variants={itemVariants} className="w-full h-[2px] bg-black"></motion.div>
        <motion.strong variants={itemVariants} className="text-black mt-5">YOU MIGHT ASK US</motion.strong> 
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 mt-5 lg:gap-4 lg:mt-0 xl:mt-20">
        <motion.div variants={itemVariants}  className="mt-10">
          <strong className="text-6xl text-black">FAQ</strong>
        </motion.div>
        <div className="flex flex-col col-span-2 gap-6 md:gap-6 lg:gap-10 mt-5">
          {faqData.map((item, index) => (
            <motion.div variants={itemVariants} key={index} className="flex flex-col gap-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <strong className="text-black text-sm md:text-lg xl:text-3xl">
                  {item.question}
                </strong>

                <span className="flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-black" />
                  ) : (
                    <Plus className="w-6 h-6 text-black" />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 text-sm md:text-lg max-w-3xl">
                  {item.answer}
                </p>
              )}

              <div className="w-full h-[0.5px] bg-black"></div>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}  className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-80 mt-6">
            <motion.strong variants={itemVariants} className="text-sm md:text-lg text-gray-400">
              Things You May Want to Know:
            </motion.strong>

            <motion.div variants={itemVariants}  className="flex items-center gap-4 lg:ml-auto">
              <motion.strong variants={itemVariants}  className="text-black text-lg md:text-2xl">
                Ask your Question
              </motion.strong>
              <span className="cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                    onClick={()=>navigate("/contact")}>
                <ArrowRight className="w-6 h-6 text-black" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Faq;
