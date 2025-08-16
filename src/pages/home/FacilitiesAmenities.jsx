import { FaFutbol, FaDumbbell, FaSwimmer, FaShieldAlt, FaBicycle, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FacilitiesAmenities() {
  const facilities = [
    {
      id: 1,
      title: "Football Ground",
      desc: "State-of-the-art turf ground with night lights and seating capacity.",
      icon: <FaFutbol className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Fitness Gym",
      desc: "Fully equipped gym with modern machines, weights, and personal trainers.",
      icon: <FaDumbbell className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Swimming Pool",
      desc: "Olympic-size indoor pool with professional lifeguards and trainers.",
      icon: <FaSwimmer className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Security & Safety",
      desc: "24/7 CCTV monitoring and professional security staff for your safety.",
      icon: <FaShieldAlt className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Cycling Track",
      desc: "Dedicated cycling track for training, racing, and endurance events.",
      icon: <FaBicycle className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Community Lounge",
      desc: "Relax and connect with fellow members in our modern lounge area.",
      icon: <FaUsers className="w-12 h-12 text-[#0da1ff]" />,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0da1ff] drop-shadow-sm">
            Facilities & Amenities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our world-class facilities designed to give you the ultimate sports and fitness experience.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  {facility.icon}
                  <h3 className="text-xl font-bold text-gray-800">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
