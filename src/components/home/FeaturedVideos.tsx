import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const videoData = [
  { thumbnail: "/images/portfolio-1.jpg", title: "Bridal Glam" },
  { thumbnail: "/images/portfolio-3.jpg", title: "Natural Beat" },
  { thumbnail: "/images/portfolio-4.jpg", title: "Editorial Look" },
  { thumbnail: "/images/portfolio-5.jpg", title: "Evening Glam" },
  { thumbnail: "/images/portfolio-6.jpg", title: "Soft Romance" },
  { thumbnail: "/images/portfolio-1.jpg", title: "Wedding Prep" },
];

const FeaturedVideos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const animRef = useRef<number>(0);
  const scrollPos = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let lastTime = 0;
    const speed = 0.5;

    const animate = (time: number) => {
      if (lastTime) {
        const delta = time - lastTime;
        scrollPos.current += speed * (delta / 16);
        const maxScroll = container.scrollWidth / 2;
        if (scrollPos.current >= maxScroll) scrollPos.current = 0;
        container.scrollLeft = scrollPos.current;
      }
      lastTime = time;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
      setIsPaused(false);
    } else {
      setPlayingIndex(index);
      setIsPaused(true);
    }
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[16px] md:text-[20px] font-semibold text-primary mb-8">Videos</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab"
        onMouseEnter={() => !playingIndex && setIsPaused(true)}
        onMouseLeave={() => !playingIndex && setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => !playingIndex && setIsPaused(false)}
      >
        {[...videoData, ...videoData].map((video, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
              expandedIndex === i ? "w-full md:w-[500px] h-[80vh]" : "w-[300px] md:w-[400px] h-[350px] md:h-[450px]"
            }`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Play/Pause Button */}
            <button
              onClick={() => handlePlay(i)}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Icon
                icon={playingIndex === i ? "mdi:pause" : "mdi:play"}
                className="text-[24px]"
              />
            </button>

            {/* Mobile Expand Button */}
            <button
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="md:hidden absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-primary-foreground flex items-center justify-center"
            >
              <Icon
                icon={expandedIndex === i ? "mdi:fullscreen-exit" : "mdi:fullscreen"}
                className="text-[20px]"
              />
            </button>

            {/* Title */}
            <div className="absolute bottom-4 left-4">
              <p className="text-primary-foreground font-medium text-min">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideos;
