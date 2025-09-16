import { useTranslation } from "react-i18next";

export const Services: React.FC = () => {
  // const services = [
  //   {
  //     icon: "⚖️",
  //     title: "Legal Consulting",
  //     image:
  //       "https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Comprehensive corporate law services including contract negotiation, regulatory compliance, and legal risk assessment.",
  //   },
  //   {
  //     icon: "⛽",
  //     title: "Oil & Gas Consulting",
  //     image:
  //       "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Strategic consulting for the energy sector covering market strategy, logistics optimization, trading operations, and ESG compliance.",
  //   },
  //   {
  //     icon: "📊",
  //     title: "Business Strategy",
  //     image:
  //       "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Tailored strategies for sustainable growth, market expansion, and organizational transformation.",
  //   },
  //   {
  //     icon: "🌍",
  //     title: "Compliance & ESG",
  //     image:
  //       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Helping companies meet international compliance standards and integrate sustainability into operations.",
  //   },
  //   {
  //     icon: "💻",
  //     title: "Digital Transformation",
  //     image:
  //       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Guidance on implementing innovative digital solutions, automation, and IT infrastructure modernization.",
  //   },
  //   {
  //     icon: "📈",
  //     title: "Risk Management",
  //     image:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  //     description:
  //       "Identifying and mitigating business risks through strategic planning and proactive monitoring.",
  //   },
  // ];

  const { t } = useTranslation("index");

  const services = t("services.content", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl lg:text-5xl font-serif text-center text-gray-900 dark:text-gray-100 mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                       border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div
                className="absolute inset-x-5 bottom-5 w-4 h-4 bg-blue-400 rounded-full 
                           blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">
                  <img src="/logo.svg" alt="" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>

              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  // src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
