import Header from "./Header";
import Footer from "./Footer";
import img1 from "../../public/assets/1st Project 2/Hero Section Image/Modern Scandinavian Living.webp"
import img2 from "../../public/assets/1st Project 2/Website Cover Photo - 2026-02-03T164143.713.webp"
import img3 from "../../public/assets/1st Project 2/Website Cover Photo - 2026-02-03T164746.985.webp"
import img4  from "../../public/assets/1st Project 2/Website Cover Photo - 2026-02-03T165927.030.webp"
import img5 from "../../public/assets/1st Project 2/Website Cover Photo - 2026-02-03T171433.638.webp"
import img6 from "../../public/assets/2nd Project 2/Hero Section Image/Urban Nordic Elegance.webp"
import img7 from "../../public/assets/2nd Project 2/626147940_4249711218622538_8540212003339402113_n.webp"
import img8 from "../../public/assets/2nd Project 2/Website Cover Photo - 2026-02-03T173054.811.webp"
import img9 from "../../public/assets/2nd Project 2/Website Cover Photo - 2026-02-03T173059.783.webp"
import img10 from "../../public/assets/2nd Project 2/Website Cover Photo - 2026-02-03T173126.996.webp"
import img11 from "../../public/assets/3rd project 3/Hero Section Image/Soft Minimal Luxury.webp"
import img12 from "../../public/assets/3rd project 3/Website Cover Photo - 2026-02-03T172026.954.webp"
import img13 from "../../public/assets/3rd project 3/Website Cover Photo - 2026-02-03T172319.485.webp"
import img14 from "../../public/assets/3rd project 3/Website Cover Photo - 2026-02-03T172327.398.webp"
import img15 from "../../public/assets/3rd project 3/Website Cover Photo - 2026-02-03T172507.086.webp"
import img16 from "../../public/assets/4th Project 4/Hero Section Image/Warm Contemporary Scandinavian.webp"
import img17 from "../../public/assets/4th Project 4/Website Cover Photo - 2026-02-03T174959.140.webp"
import img18 from "../../public/assets/4th Project 4/Website Cover Photo - 2026-02-03T175104.770.webp"
import img19 from "../../public/assets/4th Project 4/Website Cover Photo - 2026-02-03T175918.630.webp"
import img20 from "../../public/assets/4th Project 4/Website Cover Photo - 2026-02-03T181833.985.webp"
import img21 from "../../public/assets/5th Project 1/Hero Section Image/Kitchen.webp"
import img22 from "../../public/assets/5th Project 1/Website Cover Photo - 2026-02-03T184057.649.webp"
import img23 from "../../public/assets/5th Project 1/Website Cover Photo - 2026-02-03T184100.306.webp"
import img24 from "../../public/assets/5th Project 1/Website Cover Photo - 2026-02-03T184102.567.webp"
import img25 from "../../public/assets/5th Project 1/Website Cover Photo - 2026-02-03T184108.569.webp"
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

const projects = [
  {
    title: "Modern-Scandinavian-Living",
    category: "Home",
    teamMembers: 15,
    Date:"11 Jan 2026",
    description:
      "Rooted in Modern Scandinavian Living, this home is designed to celebrate calm, clarity, and everyday comfort—crafted for contemporary Bengaluru lifestyles. The space embraces a philosophy of less, but better, where every element serves both purpose and beauty",
    desc: "Textural layering plays a subtle yet powerful role —linen curtains soften natural light, plush rugs ground the space, and minimal décor enhances character without overwhelming the senses. Carefully planned lighting introduces warmth through soft glows, creating an inviting atmosphere from day to night. This project reflects a modern Scandinavian ethos adapted for urban living—where functionality meets elegance, and design quietly supports a peaceful, elevated way of life.",
    gallery: [img1, img2, img3, img4, img5],
    keySpaces: [
      {
        title: "Living Room",
        desc: "Scandinavian Modern Living Space Deigned as the heart of the home, the living room reflects modern Scandinavian interior design with a focus on openness, comfort, and natural light. A neutral-toned sofa with clean line anchors the space, enhanced by soft textured cushions and throws that add warmth without visual clutter. Natural wood furniture elements bring balance to the minimalist palette, while large windows with sheer linen curtains allow daylight to flow freely—creating an airy, calming environment ideal for modern urban living in Bengaluru."
      },
      {
        title: "Kitchen",
        desc: "Functional Scandinavian Modular Kitchen This modern Scandinavian kitchen is designed to balance functionality and elegance. Light-colored cabinetry in soft whites and muted greys creates a clean visual appeal, complemented by warm wooden countertops that add natural character. Open shelving enhances accessibility while showcasing minimal ceramic ware and indoor greenery. The layout supports efficient movement and everyday usability, making it a perfect example of a functional yet stylish modular kitchen designed for contemporary homes."
      },
      {
        title: "Bedroom",
        desc: "Minimal Scandinavian Bedroom Design The bedroom is conceived as a peaceful retreat, inspired by Scandinavian minimalism and comfort-led design. A wooden bedframe in light oak or birch sets a natural foundation, paired with layered bedding in soft neutral and pastel tones. Subtle textures, plush fabrics, and uncluttered styling promote relaxation and restful sleep. Soft lighting and balanced proportions complete the space, offering a serene bedroom design suited for modern lifestyle needs."
      },
  
    ],
    Details:
    [
      {
        title: "Color Palette – Modern Scandinavian Interior Colors",
        desc:
          "The color palette is rooted in modern Scandinavian interior design, using soft whites, warm beiges, and light greys as the base. These neutral tones are layered with subtle pastel accents such as muted blues, sage greens, and soft blush tones to introduce gentle contrast without overpowering the space. This balanced palette enhances natural light, promotes visual calm, and creates a timeless aesthetic suited for modern Bengaluru homes.",
      },
      {
        title: "Materials and Textures – Natural Scandinavian Finishes",
        desc:
          "Natural materials form the foundation of this Scandinavian-inspired interior. Light-toned woods like oak and birch are used across flooring, furniture, and detailing to bring warmth and authenticity. Soft textures including linen, cotton, and wool add comfort and depth, while accents of ceramics and matte finishes introduce understated sophistication. Together, these materials create a tactile, inviting environment that feels both refined and lived-in.",
      },
      {
        title: "Furniture – Minimal Scandinavian Furniture Design",
        desc:
          "The furniture selection focuses on clean lines, ergonomic comfort, and everyday functionality—hallmarks of Scandinavian furniture design. Each piece is carefully chosen to maintain openness while maximizing usability. Multi-functional elements, space-saving layouts, and minimalist silhouettes ensure the home remains uncluttered and efficient. The result is a thoughtfully curated interior that supports modern living without compromising on style.",
      },
      {
        title: "Lighting – Scandinavian Lighting Design",
        desc:
          "Lighting is designed to enhance warmth and spatial balance throughout the home. Large windows allow natural daylight to define the interiors, filtered gently through sheer linen curtains. Artificial lighting is layered using minimalist pendant lights, floor lamps, and wall-mounted fixtures, all finished in soft, modern tones. Warm LED lighting adds a cozy ambiance, ensuring comfort and visual harmony during both day and night.",
      },
    ],
  },
  {
    title: "Urban-Nordic-Elegance",
    category: "Home",
    teamMembers: 10,
    Date:"25th Dec 2025",
    description:
      "Inspired by Urban Nordic Elegance, this project blends Scandinavian minimalism with a refined urban sensibility—designed specifically for modern Bengaluru homes. The design approach focuses on clean geometry, muted sophistication,and functional luxury, creating interiors that feel calm yet confidently contemporary.",
    desc: "A neutral base of soft greys, warm whites, and charcoal accents establishes a modern foundation, while subtle contrasts in texture and finish add depth and character. Natural materials are carefully balanced with sleek modern elements, allowing the space to feel structured,elegant, and effortlessly livable.",
    gallery: [img6,img7,img8,img9,img10],
    keySpaces: [
      {
        title: "Living Room",
        desc: "The living room is designed as a refined yet inviting space that reflects modern Nordic elegance. Clean-lined seating in neutral tones is paired with textured cushions and soft upholstery to create visual comfort. Contemporary furniture with subtle curves complements the minimalist layout, while large windows enhance natural light and openness. The overall composition delivers a sophisticated living room interior ideal for urban homes in Bengaluru.",
      },
      {
        title: "Kitchen",
        desc: "This kitchen embodies modern Scandinavian functionality with an urban edge. Matte-finish cabinetry in neutral shades is paired with warm wood or stone countertops to maintain visual balance. Streamlined storage solutions and clutter-free surfaces enhance efficiency, while open shelving adds a touch of warmth and personality. Designed for both everyday cooking and modern entertaining, the kitchen reflects a perfect balance of style and practicality.",
      },
      {
        title: "Bedroom",
        desc: "The bedroom is crafted as a calm and elegant retreat, inspired by Nordic simplicity and modern comfort. A minimal wooden or upholstered bed forms the focal point, complemented by layered bedding in muted tones. Soft textures, balanced lighting, and uncluttered layouts promote relaxation and restful living. The design prioritizes serenity while maintaining a refined, urban aesthetic.",
      },
    ],
    Details: 
    [
      {
        title: "Color Palette",
        desc: "The color palette features sophisticated neutrals such as warm whites, soft greys, and muted charcoal tones. These are enhanced with subtle accent shades to add depth without overwhelming the space. The result is a modern, timeless palette that complements natural light and aligns seamlessly with contemporary urban interior design trends in Bengaluru.",
      },
      {
        title: "Materials and Textures",
        desc: "Natural and refined materials define this interior. Wood finishes, soft fabrics, and matte surfaces are layered thoughtfully to create warmth and tactile comfort. Textiles such as linen and cotton soften the structured design, while elements like stone, metal accents, and ceramics introduce a modern edge. This balanced material palette enhances durability, elegance, and everyday comfort.",
      },
      {
        title: "Furniture",
        desc: "Furniture selection emphasizes simplicity, functionality, and clean silhouettes. Each piece is chosen to support space efficiency while maintaining visual lightness. Multi-functional furniture and well-proportioned forms ensure the interiors remain adaptable to modern urban living. The design reflects Scandinavian furniture principles adapted for premium city homes.",
      },
      {
        title: "Lighting",
        desc: "Lighting plays a key role in shaping the atmosphere of the space. Natural light is maximized through open layouts and large windows, while artificial lighting is layered using minimalist pendant lights, wall-mounted fixtures, and soft ambient sources. Warm-toned lighting enhances comfort and creates a welcoming mood throughout the day and night.",
      },
    ],
  },
  {
    title: "Soft-Minimal-Luxury",
    category: "Home",
    teamMembers: 8,
    Date:"15 Dec 2025",
    description:
      "The Soft Minimal Luxury concept is designed to express elegance through simplicity, where luxury is felt rather than displayed. Crafted for modern Bengaluru homes, this project blends minimal design language with refined textures,muted tones, and a sense of quiet sophistication.",
    desc: "A soft neutral palette forms the base, enhanced by subtle contrasts and gentle material layering. Clean lines, uncluttered layouts, and thoughtfully selected finishes create interiors that feel calm,premium, and effortlessly luxurious. The design prioritizes comfort, balance, and timeless appeal —perfect for homeowners who value understated elegance.",
    gallery: [img11,img12,img13,img14,img15],
    keySpaces: 
    [
      {
        title: "Living Room",
        desc: "The living room is designed as a serene and refined space, defined by soft-toned seating, clean-lined furniture, and plush textures. Neutral upholstery is layered with elegant cushions and subtle accents to create depth without visual noise. Natural light enhances the openness of the space, delivering a minimal luxury living room that feels warm, spacious, and welcoming.",
      },
      {
        title: "Kitchen",
        desc: "This kitchen combines minimal aesthetics with functional luxury. Sleek cabinetry in soft neutral finishes is paired with refined countertops that add understated richness. Storage is seamlessly integrated to maintain a clutter-free look, while the layout supports ease of movement and everyday efficiency—ideal for modern luxury apartments in Bengaluru.",
      },
      {
        title: "Bedroom",
        desc: "Designed as a calming retreat, the bedroom features a balanced mix of soft textures, neutral hues, and minimal detailing. A refined bed design anchors the space, complemented by layered bedding and warm lighting. The overall atmosphere promotes relaxation, comfort, and timeless sophistication.",
      },
    ],
    Details:
    [
      {
        title: "Color Palette",
        desc: "A palette of warm whites, beiges, and muted greys creates a soothing foundation. These tones are enhanced with subtle accents to add depth while preserving a clean, luxurious feel. The palette reflects modern minimal luxury interior design trends.",
      },
      {
        title: "Materials and Textures",
        desc: "Premium materials such as soft-touch laminates, natural wood finishes, and textured fabrics define the space. Linen, cotton, and smooth matte surfaces add tactile comfort, while refined detailing enhances the luxury quotient without excess.",
      },
      {
        title: "Furniture",
        desc: "Furniture is selected for elegance, proportion, and comfort. Clean silhouettes, soft edges, and functional layouts ensure visual lightness while maintaining a premium presence. Each piece complements the minimalist luxury theme.",
      },
      {
        title: "Lighting",
        desc: "Lighting is layered to enhance warmth and softness. Natural light is maximized, while warm ambient lighting creates a cozy, luxurious atmosphere throughout the home—ideal for relaxed urban living.",
      },
    ],
  },
    {
    title: "Warm-Contemporary-Scandinavian",
    category: "Home",
    teamMembers: 8,
    Date:"25th Dec 2025",
    description:
      "The Warm Contemporary Scandinavian concept reinterprets classic Nordic design through a modern, comfort-driven lens. Designed for Bengaluru’s urban lifestyle, this project blends Scandinavian simplicity with contemporary warmth and livability.",
    desc: "Clean forms, warm textures, and balanced proportions define the interiors. The design focuses on functionality while introducing a welcoming emotional warmth, creating spaces that feel modern, human, and timeless.",
    gallery: [img16,img17,img18,img19,img20],
    keySpaces: [
      {
        title: "Living Room",
        desc: "The living room combines clean Scandinavian lines with warm textures and inviting finishes. Neutral seating is layered with cozy textiles, while wooden accents add depth and character. Natural light enhances openness, making the space ideal for relaxed, everyday living.",
      },
      {
        title: "Kitchen",
        desc: "This kitchen balances modern efficiency with Scandinavian warmth. Light-toned cabinetry, warm wood finishes, and clean layouts ensure both style and practicality. Open shelves and streamlined storage support a functional yet visually pleasing cooking space.",
      },
      {
        title: "Bedroom",
        desc: "The bedroom is designed as a peaceful sanctuary with soft tones, natural materials, and minimal styling. Layered bedding, warm textures, and gentle lighting create a calming environment that supports rest and relaxation.",
      },
    ],
    Details:
    [
      {
        title: "Color Palette",
        desc: "A blend of soft whites, warm greys, and earthy tones creates a cozy yet modern palette. Subtle accents enhance depth while maintaining visual harmony across the home.",
      },
      {
        title: "Materials and Textures",
        desc: "Wood, linen, cotton, and textured finishes form the core material palette. These elements introduce warmth and tactile comfort while staying true to Scandinavian design principles.",
      },
      {
        title: "Furniture",
        desc: "Furniture emphasizes simplicity, comfort, and functionality. Clean-lined forms with warm finishes ensure the interiors remain uncluttered, efficient, and inviting.",
      },
      {
        title: "Lighting",
        desc: "Lighting is soft and layered, combining natural daylight with warm artificial illumination. Minimalist fixtures enhance the contemporary feel while maintaining a cozy ambiance.",
      },
    ],

  },
    {
    title: "Timeless-Nordic-Modern",
    category: "Home",
    teamMembers: 8,
    Date:"25th Dec 2025",
    testimonial: {
      name: "Meera Patil",
      role: "Client",
      text: "The designs emphasize openness and breathability while staying stylish.",
    },
    description:
      "The Timeless Nordic Modern concept is built around enduring design principles that transcend trends. Designed for modern Bengaluru homes, this project blends Nordic minimalism with refined modern detailing to create interiors that remain relevant for years to come.",
    desc: "Balanced proportions, neutral tones, and purposeful layouts define the space. The design celebrates clarity, function, and subtle elegance —resulting in a home that feels modern today and timeless tomorrow.",
    gallery: [img21,img22,img23,img24,img25],
    keySpaces:
    [
    {
      title: "Living Room",
      desc: "The living room features clean geometry, neutral furnishings, and a harmonious layout. Soft textures and natural finishes add warmth, while minimal décor ensures the space remains calm, open, and enduring in style.",
    },
    {
      title: "Kitchen",
      desc: "This kitchen focuses on efficiency, clarity, and long-lasting aesthetics. Neutral cabinetry, refined finishes, and streamlined storage solutions create a modern yet timeless cooking environment suitable for everyday living.",
    },
    {
      title: "Bedroom",
      desc: "The bedroom is designed for comfort and longevity, featuring minimal furniture, neutral tones, and layered textures. The result is a restful space that supports both functionality and visual calm.",
    },
  ],
    Details: [
      {
        title: "Color Palette",
        desc: "A classic mix of whites, greys, and soft neutral shades ensures longevity and versatility. These colors enhance natural light and maintain a balanced, modern look across all spaces.",
      },
      {
        title: "Materials and Textures",
        desc: "Natural wood, matte surfaces, and soft textiles create a durable yet elegant material palette. The focus is on quality finishes that age gracefully over time.",
      },
      {
        title: "Furniture",
        desc: "Furniture is selected for longevity, comfort, and proportion. Clean lines and functional forms ensure the interiors remain adaptable and future-ready.",
      },
      {
        title: "Lighting",
        desc: "Lighting is designed to enhance architectural clarity and comfort. Natural daylight is prioritized, while warm artificial lighting creates a soft, balanced ambiance throughout the home.",
      },
    ],

  },
];

const Specificproject = () => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === title?.toLowerCase(),
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-stone-100 min-h-screen font-inter">
      <Header bgColor="#f5f5f4" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="pt-32"
      >
        {/* HERO IMAGE */}
        <div className="relative">
          <motion.img
            variants={itemVariants}
            src={project.gallery[0]}
            alt={project.title}
            loading="lazy"
            className="w-full h-[80vh] object-cover"
          />

          {/* Text overlay */}
          <motion.div
            variants={itemVariants}
            className="absolute inset-0 grid grid-cols-4 p-8 text-white items-end pb-16 mx-auto max-w-[1920px]"
          >
            <div>
              <strong className="text-sm md:text-2xl">{project.Date}</strong>
            </div>

            <div className="col-span-3 flex flex-col gap-2 md:gap-5">
              {/* Back to projects with arrow */}
              <span
                className="flex gap-3 -mt-10 cursor-pointer"
                onClick={() => navigate("/projects")}
              >
                <ArrowLeft size={18} />
                <strong>Back</strong>
              </span>

              <span>
                <strong className="text-lg md:text-2xl lg:text-8xl leading-none">
                 {project.title}
                </strong>
              </span>

              <span>
                <strong className="text-sm md:text-2xl">Banglore</strong>
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12 max-w-6xl mx-auto py-16 mx-auto max-w-[1920px]"
        >
          {/* <div>
            <p className="text-gray-400 uppercase text-sm">Category</p>
            <p className="font-semibold text-black">{project.category}</p>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-4xl font-bold text-black">
              {project.teamMembers}
            </span>
            <div>
              <p className="text-gray-400 uppercase text-sm">Team Members</p>
              <p className="font-semibold text-black">Involved</p>
            </div>
          </div> */}
        </motion.div>

        {/* TESTIMONIAL */}
        <div className="grid xl:grid-cols-4 gap-12 px-8 md:px-12  mx-auto max-w-[1920px]">
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* <div className="flex gap-4 items-center">
              <img
                src={img98}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-black">
                  {project.testimonial.name}
                </p>
                <p className="text-gray-400 text-sm">
                  {project.testimonial.role}
                </p>
              </div>
            </div> */}
            {/* <p className="text-gray-600 text-sm">{project.testimonial.text}</p> */}

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="xl:col-span-3 flex flex-col gap-10"
          >
            <strong className="text-2xl text-black">
              {project.description}
            </strong>
            <strong className="text-lg text-gray-400">
              {project.desc}
            </strong>
            <img
              src={project.gallery[1]}
              loading="lazy"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* KEY SPACES */}
        <div className="grid md:grid-cols-4 gap-12 px-8 md:px-12 py-20  mx-auto max-w-[1920px]">
          <motion.div variants={itemVariants}>
            <strong className="text-2xl font-semibold text-black">Key Spaces</strong>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3 flex flex-col gap-12"
          >
            {project.keySpaces.map((space, i) => (
              <div key={i} className="flex flex-col gap-4">
                <strong className="text-2xl font-semibold text-black">
                  {space.title}
                </strong>
                <p className="text-gray-400 text-lg">{space.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* GALLERY */}
        <motion.div
          variants={itemVariants}
          className="px-8 md:px-12 pb-20 flex flex-col gap-8"
        >
          {/* First image */}
          <section className="relative overflow-hidden rounded-2xl min-h-[60vh]">
            <div className="absolute inset-0">
              <img
                src={project.gallery[2]}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </section>

          {/* Second + Third images */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {project.gallery.slice(3,5).map((img, i) => (
              <section
                key={i}
                className="relative overflow-hidden rounded-2xl min-h-[40vh]"
              >
                <div className="absolute inset-0">
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </section>
            ))}
          </div>
        </motion.div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-4 gap-12 px-8 md:px-12 py-20  mx-auto max-w-[1920px]">
          <motion.div variants={itemVariants}>
            <strong className="text-2xl font-semibold text-black">Details</strong>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3 flex flex-col gap-12"
          >
            {project.Details.map((space, i) => (
              <div key={i} className="flex flex-col gap-4">
                <strong className="text-2xl font-semibold text-black">
                  {space.title}
                </strong>
                <p className="text-gray-400 text-lg">{space.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Specificproject;
