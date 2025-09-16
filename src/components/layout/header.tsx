import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "../../store/theme";
import { LangMenu } from "../shared";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const lastScrollY = useRef(0);
  const { isDark, toggleTheme } = useThemeStore();

  const { t } = useTranslation("index");

  const navData = t("header.nav", { returnObjects: true }) as string[];
  const links = ["about", "services", "contacts"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / Math.max(1, maxScroll)) * 100;

      setScrollProgress(progress);
      setIsHeaderShrunk(scrollY > 10);

      const goingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;
      setIsHeaderVisible(!(goingDown && scrollY > 220));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 z-[1100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header
        className={`
        fixed top-0 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 z-[1000]
        transition-all duration-300 shadow-lg
        ${isHeaderShrunk ? "py-2" : "py-4"}
        ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src="/logo-text.svg" alt="" />
            <h1 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-gray-100">
              {t("header.title")}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center font-sans">
            {navData.map((section, i) => (
              <button
                key={section}
                onClick={() => scrollToSection(links[i])}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 
                         font-semibold capitalize rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                         transition-all duration-300 group"
              >
                {section}
                <span
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <LangMenu />
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                       rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300
                       flex items-center gap-2"
            >
              <span className="transform transition-transform duration-500 hover:rotate-25 hover:scale-110">
                {isDark ? "☀️" : "🌙"}
              </span>
              <span className="hidden sm:inline text-gray-800 dark:text-gray-100 font-sans">
                {isDark ? "Light" : "Dark"}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl p-2"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full right-4 w-80 bg-white dark:bg-gray-900 
                        border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-xl
                        animate-in slide-in-from-top-2 duration-200"
          >
            {["about", "services", "contacts"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-3 text-gray-600 dark:text-gray-300 
                         hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800
                         rounded-lg transition-all duration-200 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
