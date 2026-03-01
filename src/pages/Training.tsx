import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Beginner Masterclass",
    subtitle: "4-week intensive for beginners",
    location: "Studio",
    price: "₦200,000",
    popular: false,
    features: [
      "Skin prep & base application",
      "Eye makeup techniques",
      "Brow shaping",
      "Lip techniques",
      "Eye shadow techniques",
      "Light set-up",
      "Video Editing",
      "Practice sessions",
      "Certificate included",
    ],
  },
  {
    title: "Advanced Glam Course",
    subtitle: "1-week professional development",
    location: "Studio",
    price: "₦150,000",
    popular: true,
    features: [
      "3 Days of intensive training",
      "Advanced techniques",
      "Editorial & creative looks",
      "Perfect Skin Prep for all skin types",
      "Video Editing",
      "Light set-up",
      "Product recommendations",
      "Certificate included",
    ],
  },
  {
    title: "One-on-One Session",
    subtitle: "Personal makeup lesson",
    location: "",
    price: "Contact for pricing",
    popular: false,
    features: [
      "Customized to your needs",
      "Learn self-application",
      "Product recommendations",
      "2-3 hour session",
    ],
  },
];

const agreementItems = [
  "All course fees are non-refundable once confirmed.",
  "Students must arrive on time for each session.",
  "Materials and tools are provided during training.",
  "Certificate is awarded upon successful completion.",
];

const Training = () => {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", program: "", experience: "", info: "", agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration submitted! We'll contact you shortly.");
  };

  return (
    <main className="pt-8 pb-20">
      {/* Header */}
      <div className="text-center px-6 mb-4">
        <h1 className="text-primary text-2xl md:text-3xl font-bold mb-3">Training Classes</h1>
        <p className="text-primary text-min">Master the art of makeup with professional training</p>
      </div>

      <div className="text-center px-6 mb-12">
        <h2 className="text-primary text-xl font-semibold mb-2">Our Courses</h2>
        <p className="text-primary text-min">Choose the perfect course for your skill level and goals</p>
      </div>

      {/* Course Cards */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative bg-card border border-gray-300 rounded-xl p-10 md:p-12"
            >
              {course.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              )}
              <h3 className="text-primary font-bold text-lg mb-1">{course.title}</h3>
              {course.location && (
                <span className="text-primary text-sm">({course.location})</span>
              )}
              <p className="text-primary text-min mt-1 mb-4">{course.subtitle}</p>
              <p className="text-primary text-2xl font-bold mb-6">{course.price}</p>
              <ul className="space-y-3">
                {course.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-primary text-min">
                    <Icon icon="mdi:check-circle" className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Agreement Cards */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-card border border-gray-300 rounded-lg p-8">
          <h3 className="text-primary font-semibold text-lg mb-4">Training Agreement</h3>
          <ul className="space-y-3">
            {agreementItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-primary text-min">
                <Icon icon="mdi:information-outline" className="text-primary mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-primary text-xl font-semibold mb-6 text-center">Register for Training</h2>
        <form onSubmit={handleSubmit} className="bg-card border border-gray-300 rounded-lg p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary text-min font-medium mb-2">Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Phone</label>
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-primary text-min font-medium mb-2">Select a Program</label>
              <select name="program" value={formData.program} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select program</option>
                <option value="beginner">Beginner Masterclass</option>
                <option value="advanced">Advanced Glam Course</option>
                <option value="one-on-one">One-on-One Session</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-primary text-min font-medium mb-2">Experience Level</label>
            <select name="experience" value={formData.experience} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select level</option>
              <option value="none">No experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-primary text-min font-medium mb-2">Additional Information (Optional)</label>
            <textarea name="info" value={formData.info} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-min text-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" checked={formData.agreed} onChange={(e) => setFormData((p) => ({ ...p, agreed: e.target.checked }))} required className="mt-1 w-4 h-4 accent-primary" />
            <label className="text-primary text-min">I have read and agree to the training agreement and terms.</label>
          </div>

          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-full text-min font-medium hover:opacity-90 transition-opacity">
            Register Now
          </button>
        </form>
      </div>
    </main>
  );
};

export default Training;
