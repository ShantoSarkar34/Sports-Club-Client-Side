import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function EventsTournaments() {
  const events = [
    {
      id: 1,
      title: "Summer Football Championship",
      date: "Aug 25, 2025",
      location: "Stadium A",
      image: "https://images.pexels.com/photos/1142966/pexels-photo-1142966.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Tennis Open Cup",
      date: "Oct 5, 2025",
      location: "Court C",
      image: "https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Swimming Gala 2025",
      date: "Nov 12, 2025",
      location: "Aquatic Center",
      image: "https://images.pexels.com/photos/4502145/pexels-photo-4502145.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-300 w-full">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0da1ff]">
            Events & Tournaments
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our upcoming sports events and tournaments. Join us and be a part of the excitement!
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <div className="">
          <div className="flex gap-6 justify-center">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-w-[280px] md:min-w-[300px] bg-gray-100 rounded-3xl shadow-xl overflow-hidden cursor-pointer flex-shrink-0"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-1 gap-2">
                    <FaCalendarAlt /> <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <FaMapMarkerAlt /> <span>{event.location}</span>
                  </div>
                  <button className="mt-4 w-full bg-[#0da1ff] text-white font-bold py-2 rounded-2xl shadow-lg hover:bg-[#0b8de0] transition">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
