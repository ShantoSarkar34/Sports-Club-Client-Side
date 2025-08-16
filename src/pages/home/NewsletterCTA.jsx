import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function NewsletterCTA() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0a7ec5] to-[#0069a1] py-20 overflow-hidden">
      {/* Background decorative shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          Stay Updated!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-gray-300"
        >
          Subscribe to our newsletter for the latest news, offers, and sports programs.
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <div className="relative w-full md:w-auto flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full placeholder:text-gray-200 px-6 py-3 rounded-full border text-gray-800 focus:outline-none focus:border-white pl-10 transition"
            />
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
          </div>
          <button
            type="submit"
            className="px-8 cursor-pointer py-3 bg-white  text-[#0da1ff] font-bold rounded-full shadow-lg hover:bg-[#0da1ff] hover:text-white transition-all duration-200"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Optional CTA note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-gray-200 text-sm"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}
