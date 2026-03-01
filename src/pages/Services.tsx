import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const categories = ["Bridal", "Events", "Editorial"];

const serviceData: Record<string, Array<{ icon: string; title: string; description: string }>> = {
  Bridal: [
    { icon: "mdi:ring", title: "Traditional Wedding", description: "Complete bridal makeup for your traditional ceremony with cultural elegance and modern beauty techniques." },
    { icon: "mdi:church", title: "White Wedding", description: "Timeless, elegant bridal look for your white wedding ceremony. Flawless and long-lasting." },
    { icon: "mdi:camera", title: "Pre-Wedding Shoot", description: "Camera-ready makeup for your pre-wedding photoshoot. Perfect for indoor and outdoor sessions." },
    { icon: "mdi:account-group", title: "Bridal Party", description: "Coordinated makeup for your bridesmaids and bridal train. Everyone looks cohesive and beautiful." },
  ],
  Events: [
    { icon: "mdi:party-popper", title: "Birthday Glam", description: "Stand out at your birthday celebration with a glamorous, show-stopping makeup look." },
    { icon: "mdi:glass-cocktail", title: "Dinner & Gala", description: "Sophisticated evening makeup for galas, dinner parties, and formal events." },
    { icon: "mdi:music", title: "Concert & Festival", description: "Bold, creative looks for concerts, festivals, and music events. Express yourself!" },
    { icon: "mdi:school", title: "Graduation", description: "Polished and elegant look for your graduation day photos and celebrations." },
  ],
  Editorial: [
    { icon: "mdi:palette", title: "Creative Editorial", description: "Avant-garde and artistic makeup for editorial photoshoots and creative projects." },
    { icon: "mdi:television", title: "TV & Film", description: "Camera-optimized makeup for television appearances, film sets, and media productions." },
    { icon: "mdi:shopping", title: "Commercial", description: "Clean, polished looks for brand campaigns, product shoots, and commercial advertisements." },
    { icon: "mdi:image", title: "Fashion Shoot", description: "High-fashion makeup for runway-inspired photoshoots and fashion editorials." },
  ],
};

const Services = () => {
  const [active, setActive] = useState("Bridal");

  return (
    <main className="pt-8">
      {/* Header */}
      <div className="text-center px-6 mb-12">
        <h1 className="text-primary text-2xl md:text-3xl font-bold mb-3">Our Services</h1>
        <p className="text-primary text-min">Professional makeup services tailored to your needs</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12 px-6">
        <div className="inline-flex bg-navbar border border-primary rounded-full p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-min font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-primary hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {serviceData[active].map((s) => (
            <div
              key={s.title}
              className="bg-card border border-primary rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <Icon icon={s.icon} className="text-[40px] text-primary mb-4" />
              <h3 className="text-primary font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-primary text-min leading-relaxed">{s.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Stats Bar */}
      <div className="bg-accent w-full py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-16 px-8">
              <span className="flex items-center gap-2 text-accent-foreground text-min font-medium">
                <Icon icon="mdi:star" className="text-[20px]" /> Over 50+ Satisfied Clients
              </span>
              <span className="flex items-center gap-2 text-accent-foreground text-min font-medium">
                <Icon icon="mdi:star" className="text-[20px]" /> &gt;95% Client Retention Rate
              </span>
              <span className="flex items-center gap-2 text-accent-foreground text-min font-medium">
                <Icon icon="mdi:star" className="text-[20px]" /> Years of Professional Experience
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
