import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const policies = [
  { icon: "mdi:clock-outline", title: "Punctuality", text: "Please arrive on time for your scheduled session. Late arrivals may result in reduced service time." },
  { icon: "mdi:cash", title: "Payment", text: "A 50% deposit is required to confirm your booking. Balance is due on the day of the session." },
  { icon: "mdi:cancel", title: "Cancellation", text: "Cancellations must be made at least 48 hours in advance. Late cancellations may forfeit the deposit." },
];

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", sessionType: "", time: "", location: "", notes: "", agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking submitted! We'll get back to you soon.");
  };

  return (
    <main className="pt-8 pb-20">
      {/* Header */}
      <div className="text-center px-6 mb-12">
        <h1 className="text-primary text-2xl md:text-3xl font-bold mb-3">Book Appointment</h1>
        <p className="text-primary text-min">Reserve your session with FinaFusion</p>
      </div>

      {/* Policy Cards */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-primary rounded-lg p-6"
            >
              <Icon icon={p.icon} className="text-[36px] text-primary mb-3" />
              <h3 className="text-primary font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-primary text-min leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="bg-card border border-primary rounded-lg p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary text-min font-medium mb-2">Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Phone</label>
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Type of Makeup Session</label>
              <select name="sessionType" value={formData.sessionType} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select session type</option>
                <option value="bridal">Bridal Makeup</option>
                <option value="event">Event Makeup</option>
                <option value="editorial">Editorial Makeup</option>
                <option value="photoshoot">Photoshoot</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary text-min font-medium mb-2">Booking Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button type="button" className={cn("w-full border border-primary rounded-lg px-4 py-3 text-min text-left bg-background flex items-center gap-2", !date && "text-primary/50")}>
                    <Icon icon="mdi:calendar" className="text-primary text-[20px]" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Booking Time</label>
              <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div>
            <label className="block text-primary text-min font-medium mb-2">Location</label>
            <select name="location" value={formData.location} onChange={handleChange} required className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select location</option>
              <option value="studio">Studio</option>
              <option value="outdoor">Outdoor</option>
              <option value="travel">Travel</option>
            </select>
          </div>

          <div>
            <label className="block text-primary text-min font-medium mb-2">Additional Notes (Optional)</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full border border-primary rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" checked={formData.agreed} onChange={(e) => setFormData((p) => ({ ...p, agreed: e.target.checked }))} required className="mt-1 w-4 h-4 accent-primary" />
            <label className="text-primary text-min">I have read and agree to the booking policy and terms of service.</label>
          </div>

          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-full text-min font-medium hover:opacity-90 transition-opacity">
            Book Appointment
          </button>
        </form>
      </div>
    </main>
  );
};

export default BookAppointment;
