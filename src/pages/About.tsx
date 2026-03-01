import { useState } from "react";
import { Icon } from "@iconify/react";

const socials = [
  { icon: "ic:baseline-tiktok", href: "https://www.tiktok.com/@finafusion", label: "TikTok" },
  { icon: "mdi:instagram", href: "https://www.instagram.com/finafusion", label: "Instagram" },
  { icon: "mdi:whatsapp", href: "https://wa.me/2349064132585", label: "WhatsApp" },
  { icon: "mdi:gmail", href: "mailto:finafusion1@gmail.com", label: "Gmail" },
];

const About = () => {
  const [mapRevealed, setMapRevealed] = useState(false);

  return (
    <main className="pt-8 pb-20">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-primary text-2xl md:text-3xl font-bold mb-6">About FinaFusion</h1>
            <p className="text-primary text-min leading-relaxed mb-4">
              FinaFusion is a premium makeup artistry brand based in Lagos, Nigeria, dedicated to enhancing natural beauty with professional expertise and luxury products.
            </p>
            <p className="text-primary text-min leading-relaxed mb-4">
              With years of experience in bridal, editorial, and event makeup, we've helped hundreds of clients look and feel their absolute best on their most important days.
            </p>
            <p className="text-primary text-min leading-relaxed mb-4">
              Our commitment to excellence, attention to detail, and passion for beauty artistry sets us apart. We use only premium products and stay updated with the latest trends and techniques in the beauty industry.
            </p>
            <p className="text-primary text-min leading-relaxed">
              Whether it's your wedding day, a special event, or a professional photoshoot, FinaFusion delivers flawless, long-lasting looks that make you feel confident and beautiful.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/about-artist.jpg"
              alt="FinaFusion makeup artist"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Social Media Scrolling */}
      <section className="mb-20 overflow-hidden">
        <div className="border-y border-gray-300 py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-12 px-8">
                {socials.map((s) => (
                  <a
                    key={`${rep}-${s.label}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <Icon icon={s.icon} className="text-[24px]" />
                    <span className="text-min font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-primary text-xl font-semibold mb-6 text-center">Our Studio Location</h2>
        <div className="relative rounded-lg overflow-hidden border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5!3d6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDAuMCJOIDPCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className={`transition-all duration-500 ${mapRevealed ? "" : "blur-md"}`}
            title="FinaFusion Studio Location"
          />
          {!mapRevealed && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setMapRevealed(true)}
                className="bg-transparent border border-gray-300 text-primary px-6 py-3 rounded-lg text-min font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Map
              </button>
            </div>
          )}
          <p className="text-center text-primary text-min py-3">
            Ikota Villa Estate, Road 25, Lagos State
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
