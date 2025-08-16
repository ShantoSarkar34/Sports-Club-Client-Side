import { motion } from "framer-motion";
import {
  FaGoogle,
  FaStripe,
  FaCalendarAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const integrations = [
  {
    name: "Google Calendar",
    icon: <FaCalendarAlt className="text-blue-500 text-4xl" />,
    description:
      "Seamlessly sync your practice sessions, tournaments, and bookings with Google Calendar.",
  },
  {
    name: "Stripe Payments",
    icon: <FaStripe className="text-purple-600 text-4xl" />,
    description:
      "Secure & easy online payments for memberships, events, and coaching sessions.",
  },
  {
    name: "Google Login",
    icon: <FaGoogle className="text-red-500 text-4xl" />,
    description:
      "Quick & easy login using your Google account with industry-standard security.",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="text-blue-700 text-4xl" />,
    description:
      "Stay updated with our latest events and live streams via Facebook integration.",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
    description:
      "Follow our stories, reels, and behind-the-scenes from the Sports Club.",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500 text-4xl" />,
    description:
      "Get instant updates and connect with our support team on WhatsApp.",
  },
];

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 w-full pt-16 lg:pt-20">
      <div className="container mx-auto text-center px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-primary"
        >
          Powerful Integrations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600  mb-12 max-w-2xl mx-auto"
        >
          Connect Sports Club with your favorite tools & platforms to make your
          experience smoother, smarter, and more engaging.
        </motion.p>

        {/* Integration Cards */}
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {integrations.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white  rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{tool.name}</h3>
              <p className="text-gray-600  text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="py-16 lg:py-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">
            More Integrations Coming Soon{" "}
          </h3>
          <p className="text-gray-700  leading-relaxed mb-6">
            We are continuously working to add new integrations like Zoom, Apple
            Health, and Fitbit to give our members the most connected sports
            experience possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Integrations;
