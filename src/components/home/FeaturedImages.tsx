import { useState } from "react";
import { Icon } from "@iconify/react";

const images = [
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
  "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg",
  "/images/portfolio-5.jpg",
  "/images/portfolio-6.jpg",
];

const FeaturedImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxDesktop = Math.max(0, images.length - 3);
  const maxMobile = images.length - 1;

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => {
      const max = window.innerWidth >= 768 ? maxDesktop : maxMobile;
      return Math.min(max, i + 1);
    });
  };

  return (
    <section className="bg-section-soft w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold text-primary mb-8">Images</h2>

        <div className="relative">
          {/* Desktop Nav Buttons */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-gray-300 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Icon icon="mdi:chevron-left" className="text-[24px]" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-gray-300 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Icon icon="mdi:chevron-right" className="text-[24px]" />
          </button>

          {/* Images Grid */}
          <div className="overflow-hidden">
            <div
              className="flex md:grid md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1) + (window.innerWidth >= 768 ? 2 : 0))}%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-0 rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Makeup portfolio ${i + 1}`}
                    className="w-full h-[350px] md:h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Nav Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon icon="mdi:chevron-left" className="text-[24px]" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon icon="mdi:chevron-right" className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
