import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "🏀 What sports programs are available at Sports Club?",
    answer:
      "We offer football, basketball, tennis, swimming, and fitness training programs for all age groups.",
  },
  {
    question: "💳 How can I become a member?",
    answer:
      "You can choose a membership plan from our pricing page and complete registration with secure online payment.",
  },
  {
    question: "📅 Can I book courts online?",
    answer:
      "Yes! Our platform allows you to reserve courts online and manage your bookings from your dashboard.",
  },
  {
    question: "👨‍🏫 Do you provide professional coaching?",
    answer:
      "Absolutely! We have certified coaches and trainers to help you improve your skills at every level.",
  },
  {
    question: "📩 How can I contact support?",
    answer:
      "You can reach out to us via the contact form on our website or email us at support@sportsclub.com.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 w-full pt-16 lg:pt-20">
      <div className="container mx-auto bg-white px-4 rounded-2xl shadow-lg p-8 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-200 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg focus:outline-none ${
                  activeIndex === index ? " text-primary" : ""
                }`}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="px-6 pb-4 text-gray-600 "
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
