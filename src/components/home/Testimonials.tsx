import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    message: "FinaFusion made me feel like a queen on my wedding day. The attention to detail was absolutely incredible and the makeup lasted all day!",
    name: "Adaeze Okonkwo",
    image: "/images/testimonial-1.jpg",
  },
  {
    message: "I've never felt more beautiful! The team really understood my vision and brought it to life perfectly. Highly recommend for bridal makeup.",
    name: "Chioma Nwosu",
    image: "/images/testimonial-2.jpg",
  },
  {
    message: "Professional, punctual, and incredibly talented. My makeup for the event was flawless and everyone kept complimenting my look!",
    name: "Blessing Eze",
    image: "/images/testimonial-3.jpg",
  },
  {
    message: "The best makeup experience I've ever had. The products used were top quality and the final look exceeded my expectations completely.",
    name: "Funke Adeyemi",
    image: "/images/testimonial-1.jpg",
  },
  {
    message: "FinaFusion transformed my look for my engagement photoshoot. The photos came out stunning! Can't wait for my wedding day look.",
    name: "Ngozi Ibe",
    image: "/images/testimonial-2.jpg",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - visibleCount;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="bg-card w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-primary text-xl md:text-2xl font-semibold mb-12">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.slice(startIndex, startIndex + visibleCount).map((t, i) => (
                <div
                  key={i}
                  className="relative bg-background border border-primary rounded-lg p-8"
                >
                  {/* Quotation mark */}
                  <Icon
                    icon="mdi:format-quote-close"
                    className="absolute top-4 right-4 text-[48px] text-primary/20"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Icon key={s} icon="mdi:star" className="text-[20px] text-accent" />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-primary text-min leading-relaxed mb-6">{t.message}</p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-primary font-medium text-min">{t.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Icon icon="mdi:chevron-left" className="text-[24px]" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Icon icon="mdi:chevron-right" className="text-[24px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
