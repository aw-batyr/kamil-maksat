import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation("index");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Text */}
          <div className="space-y-6 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 dark:text-gray-100 leading-tight">
              <div
                className="items-start hero relative text-3xl "
                dangerouslySetInnerHTML={{ __html: t("hero.title") }}
              />
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-400">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col font-sans sm:flex-row gap-5 pt-4">
              <button
                onClick={() => scrollToSection("contacts")}
                className="px-8 py-4 bg-blue-500 text-white rounded-xl  text-lg
                         hover:bg-blue-600 hover:-translate-y-1 transform transition-all duration-300
                         shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
              >
                {t("hero.btn")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl  text-lg
                hover:bg-blue-500 hover:text-white hover:-translate-y-1 transform transition-all duration-300"
              >
                {t("hero.btn2")}
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-in slide-in-from-right duration-1000 delay-300">
            <div className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
              <img
                src="/main.png"
                alt="Modern glass office building"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
