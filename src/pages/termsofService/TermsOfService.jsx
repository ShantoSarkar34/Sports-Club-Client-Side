import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 w-full pt-16 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto bg-white px-4 rounded-2xl shadow-lg p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <FaFileContract className="text-primary text-3xl" />
          <h1 className="text-3xl font-bold text-primary">Terms of Service</h1>
        </div>

        <p className="mb-4">
          By accessing and using{" "}
          <span className="font-semibold">Sports Club</span>, you agree to the
          following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          User Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide accurate registration and payment details.</li>
          <li>Respect court booking rules and time slots.</li>
          <li>Maintain appropriate behavior within the club premises.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Payments & Refunds</h2>
        <p>
          Membership and booking fees must be paid in advance. Refunds are
          subject to our cancellation policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Limitation of Liability
        </h2>
        <p>
          Sports Club is not responsible for injuries, lost belongings, or
          misuse of facilities.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2"> Contact Us</h2>
        <p>
          For questions or disputes, please contact us via our official support
          channels.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
