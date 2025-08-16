import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="w-full py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-[#0da1ff] tracking-wide leading-tight drop-shadow-lg"
        >
          About Our Club
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-semibold text-[#0da1ff] mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-200">
                Our mission is to inspire passion for sports and create an environment where athletes at every level can thrive. Through cutting-edge facilities and a supportive community, we empower our members to achieve their goals and make lifelong memories.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#0da1ff] mb-4">Our History</h3>
              <p className="text-lg leading-relaxed text-gray-200">
                Established over 15 years ago, our club has grown from humble beginnings into a hub for sporting excellence. We’ve hosted countless tournaments, nurtured talent that has competed internationally, and built a legacy of camaraderie and success.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#0da1ff] mb-4">What We Offer</h3>
              <ul className="list-disc ml-6 space-y-3 text-gray-200 text-lg">
                <li>State-of-the-art courts and training grounds</li>
                <li>Professional coaching programs</li>
                <li>Regular events, leagues, and tournaments</li>
                <li>Fitness, wellness, and recreational facilities</li>
                <li>A dynamic community of athletes and mentors</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="About our club"
              className="rounded-3xl shadow-2xl object-cover w-full max-w-md border-4 border-[#0da1ff]"
            />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-t-4 border-[#0da1ff]">
            <h4 className="text-2xl font-bold text-[#0da1ff] mb-3">500+ Members</h4>
            <p className="text-gray-200 text-base leading-relaxed">A vibrant community united by passion for sports and growth.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-t-4 border-[#0da1ff]">
            <h4 className="text-2xl font-bold text-[#0da1ff] mb-3">15+ Years Legacy</h4>
            <p className="text-gray-200 text-base leading-relaxed">Celebrating a decade and a half of excellence and dedication.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-t-4 border-[#0da1ff]">
            <h4 className="text-2xl font-bold text-[#0da1ff] mb-3">World-Class Facilities</h4>
            <p className="text-gray-200 text-base leading-relaxed">Premium grounds and modern amenities designed for champions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
