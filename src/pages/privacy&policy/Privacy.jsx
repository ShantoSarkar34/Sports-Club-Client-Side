import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";


const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 w-full pt-16 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto bg-white px-4 rounded-2xl shadow-lg p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-yellow-500 text-3xl" />
          <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>
        </div>
        <p className="mb-4">
          At <span className="font-semibold">Sports Club</span>, we value your privacy and are committed to protecting your personal information. 
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2"> Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal details like name, email, and phone number.</li>
          <li>Booking history and membership details.</li>
          <li>Payment information (secured with encryption).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2"> How We Use Information</h2>
        <p>
          We use your data to improve our services, personalize your experience, and send important updates.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2"> Your Rights</h2>
        <p>
          You can request access, update, or delete your personal data anytime. Contact our support team for assistance.
        </p>
      </motion.div>
    </div>
  );
};

export default Privacy;
