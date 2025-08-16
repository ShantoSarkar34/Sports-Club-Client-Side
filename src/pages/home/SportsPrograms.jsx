import { FaFootballBall, FaBasketballBall, FaTableTennis, FaSwimmer, FaRunning } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SportsPrograms() {
  const programs = [
    {
      id: 1,
      name: "Football Training",
      desc: "Learn skills, strategies, and teamwork from professional coaches.",
      icon: <FaFootballBall className="w-12 h-12 text-[#0da1ff]" />,
    },
    {
      id: 2,
      name: "Basketball Coaching",
      desc: "Improve dribbling, shooting, and fitness with our expert trainers.",
      icon: <FaBasketballBall className="w-12 h-12 text-[#0da1ff]" />,
    },
    {
      id: 3,
      name: "Tennis Classes",
      desc: "Enhance your serve, volley, and footwork for all levels.",
      icon: <FaTableTennis className="w-12 h-12 text-[#0da1ff]" />,
    },
    {
      id: 4,
      name: "Swimming Lessons",
      desc: "Indoor pool training for beginners and advanced swimmers.",
      icon: <FaSwimmer className="w-12 h-12 text-[#0da1ff]" />,
    },
    {
      id: 5,
      name: "Athletics & Running",
      desc: "Track and field coaching to boost speed, endurance, and stamina.",
      icon: <FaRunning className="w-12 h-12 text-[#0da1ff]" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0da1ff] drop-shadow-sm">
            Sports Programs & Training
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join our sports programs and elevate your skills with professional coaching.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
              <p className="text-gray-600">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
