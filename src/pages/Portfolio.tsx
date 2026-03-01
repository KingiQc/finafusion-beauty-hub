import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const portfolioImages = [
  { src: "/images/portfolio-1.jpg", height: "h-[400px]" },
  { src: "/images/portfolio-2.jpg", height: "h-[500px]" },
  { src: "/images/portfolio-3.jpg", height: "h-[350px]" },
  { src: "/images/portfolio-4.jpg", height: "h-[450px]" },
  { src: "/images/portfolio-5.jpg", height: "h-[500px]" },
  { src: "/images/portfolio-6.jpg", height: "h-[380px]" },
];

const videoData = [
  { thumbnail: "/images/portfolio-1.jpg", title: "Bridal Prep" },
  { thumbnail: "/images/portfolio-3.jpg", title: "Glam Session" },
  { thumbnail: "/images/portfolio-5.jpg", title: "Evening Look" },
  { thumbnail: "/images/portfolio-4.jpg", title: "Creative Art" },
  { thumbnail: "/images/portfolio-6.jpg", title: "Natural Beat" },
];

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const anim1Ref = useRef<number>(0);
  const anim2Ref = useRef<number>(0);
  const pos1 = useRef(0);
  const pos2 = useRef(0);
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);

  // Row 1: scroll left
  useEffect(() => {
    const el = row1Ref.current;
    if (!el || paused1) return;
    let last = 0;
    const animate = (t: number) => {
      if (last) { pos1.current += 0.5 * ((t - last) / 16); if (pos1.current >= el.scrollWidth / 2) pos1.current = 0; el.scrollLeft = pos1.current; }
      last = t;
      anim1Ref.current = requestAnimationFrame(animate);
    };
    anim1Ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(anim1Ref.current);
  }, [paused1]);

  // Row 2: scroll right
  useEffect(() => {
    const el = row2Ref.current;
    if (!el || paused2) return;
    if (pos2.current === 0) pos2.current = el.scrollWidth / 2;
    let last = 0;
    const animate = (t: number) => {
      if (last) { pos2.current -= 0.5 * ((t - last) / 16); if (pos2.current <= 0) pos2.current = el.scrollWidth / 2; el.scrollLeft = pos2.current; }
      last = t;
      anim2Ref.current = requestAnimationFrame(animate);
    };
    anim2Ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(anim2Ref.current);
  }, [paused2]);

  const handleVideoPlay = (index: number, row: 1 | 2) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
      row === 1 ? setPaused1(false) : setPaused2(false);
    } else {
      setPlayingVideo(index);
      row === 1 ? setPaused1(true) : setPaused2(true);
    }
  };

  const handleSwipe = (dir: "left" | "right") => {
    setMobileImageIndex((i) => {
      if (dir === "left") return Math.min(portfolioImages.length - 1, i + 1);
      return Math.max(0, i - 1);
    });
  };

  const touchStart = useRef(0);

  return (
    <main className="pt-8">
      {/* Pictures Section */}
      <section className="bg-secondary w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-primary text-xl md:text-2xl font-semibold mb-8">Pictures</h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className={`${img.height} rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
                onClick={() => setLightboxImage(img.src)}
              >
                <img src={img.src} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile Swipeable */}
          <div
            className="md:hidden"
            onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) handleSwipe(diff > 0 ? "left" : "right");
            }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={portfolioImages[mobileImageIndex].src}
                alt={`Portfolio ${mobileImageIndex + 1}`}
                className="w-full h-[400px] object-cover cursor-pointer transition-all duration-300"
                onClick={() => setLightboxImage(portfolioImages[mobileImageIndex].src)}
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {portfolioImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileImageIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === mobileImageIndex ? "bg-primary" : "bg-primary/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Full view" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}

      {/* Videos Section */}
      <section className="bg-card w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-primary text-xl md:text-2xl font-semibold mb-8">Videos</h2>
        </div>

        {/* Row 1: Left scroll */}
        <div
          ref={row1Ref}
          className="flex gap-6 overflow-x-auto scrollbar-hide mb-8"
          onMouseEnter={() => !playingVideo && setPaused1(true)}
          onMouseLeave={() => !playingVideo && setPaused1(false)}
        >
          {[...videoData, ...videoData].map((v, i) => (
            <div key={`r1-${i}`} className={`relative flex-shrink-0 rounded-lg overflow-hidden ${expandedVideo === i ? "w-full h-[70vh]" : "w-[300px] md:w-[400px] h-[350px] md:h-[450px]"}`}>
              <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <button onClick={() => handleVideoPlay(i, 1)} className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
                <Icon icon={playingVideo === i ? "mdi:pause" : "mdi:play"} className="text-[24px]" />
              </button>
              <button onClick={() => setExpandedVideo(expandedVideo === i ? null : i)} className="md:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center">
                <Icon icon={expandedVideo === i ? "mdi:fullscreen-exit" : "mdi:fullscreen"} className="text-[20px]" />
              </button>
              <p className="absolute bottom-4 left-4 text-primary-foreground font-medium text-min">{v.title}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Right scroll */}
        <div
          ref={row2Ref}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          onMouseEnter={() => !playingVideo && setPaused2(true)}
          onMouseLeave={() => !playingVideo && setPaused2(false)}
        >
          {[...videoData, ...videoData].map((v, i) => {
            const idx = i + 100;
            return (
              <div key={`r2-${i}`} className={`relative flex-shrink-0 rounded-lg overflow-hidden ${expandedVideo === idx ? "w-full h-[70vh]" : "w-[300px] md:w-[400px] h-[350px] md:h-[450px]"}`}>
                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <button onClick={() => handleVideoPlay(idx, 2)} className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon icon={playingVideo === idx ? "mdi:pause" : "mdi:play"} className="text-[24px]" />
                </button>
                <button onClick={() => setExpandedVideo(expandedVideo === idx ? null : idx)} className="md:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center">
                  <Icon icon={expandedVideo === idx ? "mdi:fullscreen-exit" : "mdi:fullscreen"} className="text-[20px]" />
                </button>
                <p className="absolute bottom-4 left-4 text-primary-foreground font-medium text-min">{v.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
