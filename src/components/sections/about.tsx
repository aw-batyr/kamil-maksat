import { useTranslation } from "react-i18next";

export const About: React.FC = () => {
  const { t } = useTranslation("index");

  const title = t("about.title");
  const subtitle = t("about.subtitle");

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-3xl font-serif text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></p>
          </div>

          {/* About Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
            <img
              src="/main.png"
              alt="Teamwork in a bright modern office"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
