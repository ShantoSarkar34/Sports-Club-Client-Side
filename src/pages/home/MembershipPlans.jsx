import { motion } from "framer-motion";
import { FaCrown, FaStar, FaGem } from "react-icons/fa";

export default function MembershipPlans() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$29/mo",
      features: ["Access to all basic sports", "1 training session/week", "Locker access"],
      icon: <FaStar className="w-10 h-10 text-yellow-400" />,
      popular: false,
    },
    {
      id: 2,
      name: "Premium",
      price: "$59/mo",
      features: ["All Basic features", "3 training sessions/week", "Premium locker access", "Nutrition guidance"],
      icon: <FaCrown className="w-10 h-10 text-[#0da1ff]" />,
      popular: true,
    },
    {
      id: 3,
      name: "VIP",
      price: "$99/mo",
      features: ["All Premium features", "Unlimited sessions", "Personal coach", "Exclusive events"],
      icon: <FaGem className="w-10 h-10 text-purple-500" />,
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0da1ff] drop-shadow-sm">
            Membership Plans & Pricing
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to achieve your sports goals with us.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition cursor-pointer ${
                plan.popular ? "border-4 border-[#0da1ff]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 bg-[#0da1ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-[#0da1ff] mb-4">{plan.price}</p>
              <ul className="mb-6 text-gray-600 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="before:content-['✓'] before:text-[#0da1ff] before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#0da1ff] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0b8de0] transition"
              >
                Join Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
