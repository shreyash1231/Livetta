import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

/* Animation variants */
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

const Privacy = () => {
  return (
    <div className="bg-stone-100 min-h-screen">
      <Header bgColor="#f5f5f4" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="pt-40 md:pt-80 p-8 md:p-12 max-w-7xl mx-auto flex flex-col gap-32"
      >

        {/* Page Title */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-black text-4xl md:text-7xl font-semibold"
        >
          Privacy Policy
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Dates */}
          <motion.div variants={itemVariants}>
            <span className="text-gray-400 text-lg block">
              01 January, 2026
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="md:col-span-3 flex flex-col gap-10 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            {/* Intro */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Livetta respects your privacy.
              </p>
              <p className="text-gray-400">
                At Livetta, we are committed to protecting the personal,
                professional, and project-related information shared with us.
                This Privacy Policy explains how we collect, use, store,
                protect, and disclose information throughout our interior design
                services.
              </p>
              <p className="text-gray-400">
                By accessing our website, submitting enquiries, or engaging with
                our services, you agree to the practices described in this
                Privacy Policy.
              </p>
            </motion.div>

            {/* Information Collection */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Information We Collect
              </strong>

              <ul className="list-disc pl-6 text-gray-400">
                <li>
                  <strong className="text-black">Personal Information:</strong>{" "}
                  Full name, phone number, email address, city, property
                  location, and preferred communication mode.
                </li>
                <li>
                  <strong className="text-black">
                    Project & Property Information:
                  </strong>{" "}
                  Property type, floor plans, layouts, measurements, budget
                  range, lifestyle requirements, reference images, and shared
                  documents.
                </li>
                <li>
                  <strong className="text-black">Communication Data:</strong>{" "}
                  Notes from calls, WhatsApp messages, emails, form submissions,
                  feedback, approvals, and revisions.
                </li>
                <li>
                  <strong className="text-black">
                    Payment & Transaction Information:
                  </strong>{" "}
                  Booking amount, milestone payments, transaction references (no
                  card, UPI, or bank credentials are stored).
                </li>
                <li>
                  <strong className="text-black">
                    Technical & Usage Data:
                  </strong>{" "}
                  IP address, browser type, device information, and website
                  interaction data via cookies or analytics tools.
                </li>
              </ul>
            </motion.div>

            {/* Purpose */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Purpose of Data Collection
              </strong>

              <ul className="list-disc pl-6 text-gray-400">
                <li>Client onboarding and requirement understanding</li>
                <li>Design consultation and concept development</li>
                <li>Preparing layouts, 3D designs, and presentations</li>
                <li>Project coordination and internal planning</li>
                <li>Payment processing and invoicing</li>
                <li>Customer support and follow-ups</li>
                <li>Service improvement and workflow optimization</li>
                <li>Legal, accounting, and compliance requirements</li>
              </ul>
            </motion.div>

            {/* Confidentiality */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Client Discussions & Design Confidentiality
              </strong>
              <p className="text-gray-400">
                All client discussions, design concepts, layouts, and proposals
                are treated as confidential. Design ideas created for a client
                remain exclusive and are not reused or replicated without
                consent.
              </p>
            </motion.div>

            {/* Ownership */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Design Data Usage & Ownership
              </strong>
              <p className="text-gray-400">
                All design documents created by Livetta are protected
                intellectual property. Clients receive usage rights solely for
                personal execution of their project. Commercial use, resale, or
                redistribution requires written approval.
              </p>
            </motion.div>

            {/* Sharing */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Client Data Sharing Policy
              </strong>
              <p className="text-gray-400">
                We do not sell, rent, or trade client data. Information may be
                shared only with internal teams, authorized vendors, payment
                gateways, or legal authorities when required by law.
              </p>
            </motion.div>

            {/* Vendors */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Vendor & Partner Access
              </strong>
              <p className="text-gray-400">
                Limited project-related information may be shared with site
                measurement teams, consultants, or execution partners strictly
                on a need-to-know basis.
              </p>
            </motion.div>

            {/* Security */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Data Storage & Security Measures
              </strong>
              <p className="text-gray-400">
                We implement industry-standard safeguards including secure
                servers, role-based access, and regular audits. While no system
                is 100% secure, we continuously improve our security practices.
              </p>
            </motion.div>

            {/* Marketing */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Marketing & Communication Preferences
              </strong>
              <p className="text-gray-400">
                We may contact you for project updates, consultations, and
                service-related communication. Promotional communication is sent
                only if you opt in, and you may opt out at any time.
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Cookies & Analytics
              </strong>
              <p className="text-gray-400">
                Cookies help improve user experience and analyze website
                traffic. You may disable cookies through your browser settings.
              </p>
            </motion.div>

            {/* Rights */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Client Rights & Control
              </strong>
              <ul className="list-disc pl-6 text-gray-400">
                <li>Request access to stored information</li>
                <li>Request corrections or updates</li>
                <li>Request deletion (subject to legal requirements)</li>
                <li>Withdraw consent for non-essential data usage</li>
              </ul>
            </motion.div>

            {/* Compliance */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Legal Compliance
              </strong>
              <p className="text-gray-400">
                This Privacy Policy complies with the Indian Information
                Technology Act, 2000, and applicable consumer and data
                protection laws. Jurisdiction lies with Indian courts.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 pb-20"
            >
              <strong className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
                Contact Information
              </strong>
              <div className="text-gray-400">
                <p>
                  <strong className="text-black">Email:</strong> livettainterior@gmail.com
                </p>
                <p>
                  {/* <strong className="text-black">Phone:</strong> Your Official
                  Number */}
                </p>
                <p>
                  <strong className="text-black">Business Location:</strong>{" "}
                  Bengaluru, India
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Privacy;
