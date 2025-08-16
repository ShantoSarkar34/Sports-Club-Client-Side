import { motion } from "framer-motion";
import { FaStar, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function CoachesTrainers() {
  const coaches = [
    {
      id: 1,
      name: "John Doe",
      role: "Football Coach",
      rating: 5,
      photo:
        "https://images.pexels.com/photos/1134382/pexels-photo-1134382.jpeg?auto=compress&cs=tinysrgb&w=600",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Tennis Coach",
      rating: 4,
      photo:
        "https://images.pexels.com/photos/3769711/pexels-photo-3769711.jpeg?auto=compress&cs=tinysrgb&w=600",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Swimming Coach",
      rating: 5,
      photo:
        "https://images.pexels.com/photos/3985314/pexels-photo-3985314.jpeg?auto=compress&cs=tinysrgb&w=600",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
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
            Our Coaches & Trainers
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet our professional coaches dedicated to help you reach your peak
            performance.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{coach.name}</h3>
              <p className="text-gray-500 mb-3">{coach.role}</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < coach.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={coach.socials.facebook}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={coach.socials.twitter}
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href={coach.socials.instagram}
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
