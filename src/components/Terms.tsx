import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
    <div className="bg-stone-100 min-h-screen">
      <Header bgColor="#f5f5f4" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="pt-32 md:pt-80 px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-20 md:gap-32"
      >

        <motion.h1
          variants={itemVariants}
          className="text-center text-black text-3xl sm:text-4xl md:text-7xl font-semibold"
        >
          Terms & Conditions
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <span className="text-gray-400 text-sm sm:text-base md:text-lg">
              01 January, 2026
            </span>
          </motion.div>

          <div className="md:col-span-3 flex flex-col gap-10 text-base sm:text-lg md:text-xl leading-relaxed">
            {/* Intro */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <p className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Welcome to Livetta
              </p>
              <p className="text-gray-400">
                These Terms & Conditions apply to all users, clients, visitors,
                and partners of Livetta. By accessing our website, submitting
                enquiries, or engaging with our services, you agree to be bound
                by these terms.
              </p>
            </motion.div>

            {/* Scope */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Scope of Services
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Interior design consultation</li>
                <li>Space planning and layout development</li>
                <li>Concept designs and visual presentations</li>
                <li>3D design services (where applicable)</li>
                <li>Design coordination and documentation</li>
              </ul>
              <p className="text-gray-400">
                Livetta reserves the right to modify the service scope based on
                project requirements and feasibility.
              </p>
            </motion.div>

            {/* Onboarding */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Client Onboarding & Approvals
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Projects begin only after formal onboarding</li>
                <li>Each design stage requires written or digital approval</li>
                <li>Approval delays may impact project timelines</li>
              </ul>
            </motion.div>

            {/* Timelines */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Design Timelines
              </strong>
              <p className="text-gray-400">
                Timelines are indicative and depend on client inputs, approval
                speed, and design complexity. Livetta is not liable for delays
                caused by incomplete information or late feedback.
              </p>
            </motion.div>

            {/* Payments */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Payments & Commercial Terms
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Payments are milestone or stage based</li>
                <li>Invoices must be cleared as per agreed timelines</li>
                <li>Livetta may pause work in case of delayed payments</li>
              </ul>
            </motion.div>

            {/* IP */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Intellectual Property Rights
              </strong>
              <p className="text-gray-400">
                All designs, drawings, concepts, and documents remain Livetta’s
                intellectual property. Clients receive limited usage rights for
                their specific project only. Reproduction or resale without
                written consent is prohibited.
              </p>
            </motion.div>

            {/* Liability */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Limitation of Liability
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Vendor execution deviations</li>
                <li>Structural or civil issues beyond design scope</li>
                <li>
                  On-site execution quality when not part of Livetta’s contract
                </li>
              </ul>
            </motion.div>

            {/* Termination */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Termination of Engagement
              </strong>
              <p className="text-gray-400">
                Either party may terminate the engagement with written notice.
                Work completed up to termination will be billed. Refunds, if
                applicable, are governed by the Refund Policy.
              </p>
            </motion.div>

            {/* Refund Policy */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Refund & Cancellation Policy
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Design fees and booking amounts are non-refundable</li>
                <li>No refunds after design work has commenced</li>
                <li>
                  No refunds for change of mind or subjective dissatisfaction
                </li>
                <li>
                  Livetta may cancel projects due to payment delays or breaches
                </li>
              </ul>
            </motion.div>

            {/* Client Agreement */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Client Agreement – Key Clauses
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Design outputs are conceptual and visual</li>
                <li>Limited revisions per design stage</li>
                <li>Client is responsible for accurate site measurements</li>
                <li>Both parties agree to confidentiality</li>
                <li>
                  Livetta may showcase projects with consent or anonymized data
                </li>
              </ul>
            </motion.div>

            {/* Law */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Governing Law & Jurisdiction
              </strong>
              <p className="text-gray-400">
                These Terms are governed by Indian law. Jurisdiction shall be
                Bengaluru, Karnataka, India.
              </p>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 pb-16 md:pb-20"
            >
              <strong className="text-black text-xl sm:text-2xl font-semibold">
                Legal Disclaimer
              </strong>
              <p className="text-gray-400">
                All designs, visuals, and timelines shared by Livetta are
                indicative in nature. Final execution outcomes may vary based on
                site conditions, materials, and third-party vendors. Livetta
                shall not be held responsible for deviations beyond its agreed
                scope of services.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Terms;
