import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "mdi:home-city",
    title: "100% Studio",
    description: "Experience our fully equipped professional studio with perfect lighting, premium tools, and a comfortable atmosphere for your session.",
  },
  {
    icon: "mdi:tree",
    title: "Your Place",
    description: "We bring the full studio experience to your doorstep. Enjoy professional makeup services in the comfort of your own space.",
  },
  {
    icon: "mdi:airplane",
    title: "Trip & Travel",
    description: "Destination bookings available. Whether it's a destination wedding or special event abroad, we travel with you.",
  },
];

const ServiceTypes = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-primary text-xl md:text-2xl font-semibold mb-12">
          What kind of service are you looking for?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background border border-gray-300 rounded-lg p-10 md:p-12 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Icon icon={s.icon} className="text-[48px] text-primary mx-auto mb-4" />
              <h3 className="text-primary font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-primary text-min leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/book-appointment"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-min hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
