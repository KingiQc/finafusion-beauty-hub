const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <img
        src="/images/hero-bg.jpg"
        alt="Professional makeup artistry by FinaFusion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex items-center h-full px-6 md:px-24">
        <div>
          <h1 className="text-primary-foreground text-3xl md:text-5xl font-bold leading-tight mb-4">
            Enhance Your<br />Beauty
          </h1>
          <p className="text-primary-foreground/90 text-min md:text-lg max-w-md">
            Professional Makeup Artistry — Elevating your look for every occasion with luxury beauty services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
