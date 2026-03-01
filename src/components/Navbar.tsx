import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Training", path: "/training" },
  { label: "Book Us", path: "/book-appointment" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full flex justify-center px-4 py-3">
        <div className="w-full max-w-7xl bg-navbar border border-primary rounded-full px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-primary font-semibold text-lg tracking-wide">
            FinaFusion
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-min font-medium transition-colors duration-300 hover:text-accent ${
                    location.pathname === item.path ? "text-accent" : "text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="https://www.tiktok.com/@finafusion" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Icon icon="ic:baseline-tiktok" className="text-[22px]" />
            </a>
            <a href="https://www.instagram.com/finafusion" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Icon icon="mdi:instagram" className="text-[22px]" />
            </a>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-4">
            <a href="https://www.tiktok.com/@finafusion" target="_blank" rel="noopener noreferrer" className="text-primary">
              <Icon icon="ic:baseline-tiktok" className="text-[22px]" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-primary relative w-6 h-6 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-[2px] bg-primary block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-[2px] bg-primary block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-[2px] bg-primary block"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center pl-10"
          >
            <ul className="flex flex-col gap-8">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[22px] font-medium transition-colors duration-300 hover:text-accent ${
                      location.pathname === item.path ? "text-accent" : "text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
