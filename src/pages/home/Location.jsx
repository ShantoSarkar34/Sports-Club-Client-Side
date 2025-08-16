import React from 'react'
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const googleMapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=40.730610,-73.935242";

  return (
    <section
      className="w-full py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-900 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/1750395/pexels-photo-1750395.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#0da1ff]"
        >
          Find Us Here
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Address and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-700"
          >
            <h3 className="text-3xl font-semibold text-[#0da1ff] flex items-center gap-2">
              <MapPin className="w-8 h-8 text-[#0da1ff]" /> Our Address
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              Elite Sports Club,
              <br />
              1234 Victory Avenue,
              <br />
              Brooklyn, New York 11206, USA
            </p>

            <p className="text-gray-300">
              <strong>Phone:</strong> +1 (555) 123‑4567 <br />
              <strong>Email:</strong> contact@elitesportsclub.com
            </p>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full text-lg font-semibold bg-[#0da1ff] hover:bg-[#0a81cc] transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0da1ff]"
          >
            <iframe
              title="Club Location"
              className="w-full h-[400px] md:h-[500px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.970983371428!2d-73.9395051240427!3d40.73061007932911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a5e06d%3A0x1e6bde87f0d6f3da!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1690038291923!5m2!1sen!2sus"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
