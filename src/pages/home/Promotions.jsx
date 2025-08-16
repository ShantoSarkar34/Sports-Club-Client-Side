import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export default function Promotions() {
  const promotions = [
    { code: "ABC", discount: "5%", description: "Save on your first booking!" },
    { code: "SPORT10", discount: "10%", description: "Get 10% off on club merchandise." },
    { code: "ELITE20", discount: "20%", description: "Exclusive tournaments entry discount." },
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-to-b from-gray-200 to-gray-300"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0da1ff] mb-12"
        >
          Exclusive Promotions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.code}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border-t-4 border-[#0da1ff]"
            >
              <div className="flex justify-center mb-6">
                <Tag className="w-12 h-12 text-[#0da1ff]" />
              </div>
              <h3 className="text-3xl font-bold text-[#0da1ff] mb-2">
                {promo.discount} OFF
              </h3>
              <p className="text-gray-700 mb-4 text-lg">{promo.description}</p>
              <div className="text-xl font-mono font-bold text-gray-800 bg-[#0da1ff]/20 border-2 border-[#0da1ff] rounded-xl py-3 px-6 inline-block select-all">
                {promo.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}