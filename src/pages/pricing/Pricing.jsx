import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "29",
    duration: "per month",
    features: [
      "Access to all standard courts",
      "Free entry to local tournaments",
      "1 Free guest pass per month",
      "Email support",
    ],
    highlight: "Perfect for casual players",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Premium Plan",
    price: "59",
    duration: "per month",
    features: [
      "Unlimited access to courts & facilities",
      "Free entry to all tournaments",
      "5 Free guest passes per month",
      "Priority customer support",
      "Free fitness training program",
    ],
    highlight: "Most Popular Choice",
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "VIP Plan",
    price: "99",
    duration: "per month",
    features: [
      "All Premium benefits",
      "1-on-1 Personal coaching",
      "Exclusive VIP lounge access",
      "Free club merchandise",
      "Private event invitations",
    ],
    highlight: "For serious athletes & enthusiasts",
    color: "from-gray-700 to-gray-800",
  },
];

const Pricing = () => {
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
          Membership Plans & Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600  mb-12 max-w-2xl mx-auto"
        >
          Choose the plan that best suits your needs and take your sports
          journey to the next level. Upgrade anytime with flexible membership
          options.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative bg-white  rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300`}
            >
              {/* Top Banner */}
              <div
                className={`bg-gradient-to-r ${plan.color} p-6 text-white text-center`}
              >
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className="text-sm mt-1">{plan.highlight}</p>
                <div className="flex justify-center items-end mt-4">
                  <span className="text-5xl font-extrabold text-primary">${plan.price}</span>
                  <span className="ml-2 text-sm">{plan.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 text-center">
                <button className="px-6 cursor-pointer py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-700  text-white font-semibold transition-all duration-200 ">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="py-16 lg:py-20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Why Choose Us?</h3>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">Sports Club</span>, we believe in
            creating an inclusive and energetic community where every athlete —
            beginner or pro — can thrive. Our facilities are world-class,
            coaches are certified, and our community is vibrant. Join us today
            and experience the difference!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
