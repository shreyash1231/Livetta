import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Project from "../components/Project";
import Process from "../components/Process";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Client from "../components/Client";
import Craft from "../components/Craft";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import AboutSection from "../components/About";
import AutoPopupForm from "../components/AutoPopupForm";
import SEO from "../components/SEO";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
    <SEO
      title="Premium 3D Interior Designers in Bengaluru | Custom 3D Home Interiors"
      description="Looking for premium 3D interior designers in Bengaluru? We design stylish, functional home interiors with transparent pricing, expert designers & end-to-end support."
      keywords="interior designers in Bengaluru, home interior design, premium interiors Bangalore, residential interior designers, modular kitchen interiors, modern home interiors"
    />
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <AutoPopupForm />
      <Header />
      <Hero />
      <AboutSection />
      <Project />
      <Process />
      <Team />
      <Faq />
      <Ticker />
      <Craft />
      <Client />
      <Advantages />
      <Footer />
    </motion.div>
    </>
  );
}
