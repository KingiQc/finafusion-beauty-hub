import { Icon } from "@iconify/react";

const Footer = () => {
  const socials = [
    { icon: "ic:baseline-tiktok", href: "https://www.tiktok.com/@finafusion", label: "TikTok" },
    { icon: "mdi:instagram", href: "https://www.instagram.com/finafusion", label: "Instagram" },
    { icon: "mdi:whatsapp", href: "https://wa.me/2349064132585", label: "WhatsApp" },
    { icon: "mdi:gmail", href: "mailto:finafusion1@gmail.com", label: "Gmail" },
  ];

  return (
    <footer className="bg-secondary py-10">
      <div className="flex justify-center items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label={s.label}
          >
            <Icon icon={s.icon} className="text-[28px]" />
          </a>
        ))}
      </div>
      <p className="text-center text-primary mt-4 text-min">
        © {new Date().getFullYear()} FinaFusion. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
