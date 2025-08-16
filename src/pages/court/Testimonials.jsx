import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Football Player",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      message:
        "Joining this club transformed my skills! Coaches are amazing and facilities top-notch.",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Tennis Enthusiast",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      message:
        "A fantastic place for training. Friendly community and excellent programs for all ages.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Basketball Player",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      message:
        "The events and tournaments here are highly organized. I love being part of this sports family!",
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
            Testimonials & Success Stories
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our members and athletes who achieved their goals with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-x-auto scrollbar-hide flex gap-6 py-10">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-w-[280px] md:min-w-[300px] bg-white rounded-3xl  p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#0da1ff]"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1 text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
