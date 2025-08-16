import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaDumbbell,
  FaCalendarCheck,
  FaMedal,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Professional Coaches",
    description: "Learn from certified trainers with years of experience in multiple sports disciplines.",
    icon: <FaUserFriends className="text-blue-500 text-4xl" />,
  },
  {
    title: "World-Class Facilities",
    description: "Access to modern courts, swimming pools, and training equipment for all members.",
    icon: <FaDumbbell className="text-green-500 text-4xl" />,
  },
  {
    title: "Easy Online Booking",
    description: "Reserve courts, training sessions, and events instantly through our digital platform.",
    icon: <FaCalendarCheck className="text-purple-500 text-4xl" />,
  },
  {
    title: "Tournaments & Events",
    description: "Compete and showcase your talent in exciting matches and tournaments every month.",
    icon: <FaMedal className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Mobile-Friendly",
    description: "Manage your membership, payments, and schedules right from your smartphone.",
    icon: <FaMobileAlt className="text-pink-500 text-4xl" />,
  },
  {
    title: "Safe & Secure",
    description: "Your data and payments are protected with the latest security standards.",
    icon: <FaShieldAlt className="text-red-500 text-4xl" />,
  },
];

const Features = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 w-full pt-16 lg:pt-20">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
         Why Choose <span className="text-primary">Sports Club?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600  mb-12 max-w-2xl mx-auto"
        >
          Our mission is to make sports accessible, enjoyable, and professional
          for everyone. Here’s what sets us apart:
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8  transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary ">
                {feature.title}
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="py-16 lg:py-20"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary ">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Join Sports Club today and unlock a world of opportunities to train,
            compete, and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
