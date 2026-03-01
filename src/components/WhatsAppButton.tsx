import { Icon } from "@iconify/react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2349064132585"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <Icon icon="mdi:whatsapp" className="text-[22px]" />
      <span className="text-min font-medium hidden sm:inline">Let's Talk</span>
    </a>
  );
};

export default WhatsAppButton;
