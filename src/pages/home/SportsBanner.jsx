import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SportsBannerSlider() {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/fzqHnQK8/peakpx.jpg",
      title: "Welcome to Our Sports Club",
      subtitle: [
        "Join us for the ultimate sports experience!",
        2000,
        "Train with champions, become a legend!",
        2000,
        "Your journey to greatness starts here!",
        2000,
      ],
      description:
        "At our club, we believe in nurturing talent and building a strong sports community. From world-class coaching to state-of-the-art facilities, we provide everything you need to push your limits and achieve your goals.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/RpVYnh4n/stadium0.jpg",
      title: "Train Like a Champion",
      subtitle: [
        "Basketball, Football, Swimming & More",
        2000,
        "Unleash your inner athlete!",
        2000,
        "Experience world-class coaching!",
        2000,
      ],
      description:
        "Our expert coaches guide you step by step. Whether beginner or pro, we have tailored training sessions that elevate your performance.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/bg1Gf3bh/athletes.jpg",
      title: "Be Part of Our Community",
      subtitle: [
        "Compete, Learn, Grow!",
        2000,
        "Team spirit is our strength!",
        2000,
        "Create memories, win together!",
        2000,
      ],
      description:
        "From competitions to fun community events, we focus on building teamwork, sportsmanship, and unforgettable experiences.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-screen"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <img
              src={slide.image}
              alt="sports background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

            {/* Rotating foreground images */}
            <motion.div
              className="absolute top-10 left-10 w-[120px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden origin-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <img
                src="https://i.ibb.co/XZdgd7Tm/all.png"
                alt="club"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-10 w-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden origin-center shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <img
                src="https://i.ibb.co/DgCZyWkn/fb-club.png"
                alt="courts"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute hidden lg:block bottom-12 left-20 w-[100px] h-[100px] rounded-full overflow-hidden origin-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              <img
                src="https://i.ibb.co/9kn5PdNR/club.png"
                alt="activities"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center p-6 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-6 flex justify-center"
              >
                <Star className="w-12 h-12 text-[#0da1ff] animate-pulse" />
              </motion.div>

              <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-[#0da1ff]">
                {slide.title}
              </h1>

              <TypeAnimation
                sequence={slide.subtitle}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-2xl md:text-3xl font-semibold text-[#0da1ff] mt-4"
              />

              <p className="mt-6 text-lg leading-relaxed text-white">
                {slide.description}
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#0da1ff] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0b8de0] transition"
                >
                  Join Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#0da1ff] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0b8de0] transition"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
