import { useState } from "react";

export const Contacts: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    });
  };

  const contacts = [
    {
      icon: "✉️",
      title: "Email",
      info: "info@comforttiar.ae",
      actions: [
        {
          label: "Copy",
          action: () => copyToClipboard("info@comforttiar.ae", "Email"),
        },
        {
          label: "Message",
          action: () => (window.location.href = "mailto:info@comforttiar.ae"),
        },
      ],
    },
    {
      icon: "📞",
      title: "Phone",
      info: "+971 4 123 4567",
      actions: [
        {
          label: "Copy",
          action: () => copyToClipboard("+97141234567", "Phone"),
        },
        {
          label: "Call",
          action: () => (window.location.href = "tel:+97141234567"),
        },
      ],
    },
    {
      icon: "📍",
      title: "Office",
      info: "Business Bay Tower\nDubai, UAE",
      actions: [
        {
          label: "Copy",
          action: () =>
            copyToClipboard("Business Bay Tower, Dubai, UAE", "Address"),
        },
      ],
    },
    {
      icon: "💬",
      title: "Messengers",
      info: "Quick communication",
      actions: [
        {
          label: "Telegram",
          action: () => window.open("https://t.me/comforttiar", "_blank"),
        },
        {
          label: "WhatsApp",
          action: () => window.open("https://wa.me/97141234567", "_blank"),
        },
        {
          label: "LinkedIn",
          action: () =>
            window.open("https://linkedin.com/company/comforttiar", "_blank"),
        },
      ],
    },
  ];

  return (
    <section
      id="contacts"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl lg:text-5xl font-serif text-center text-gray-900 dark:text-gray-100 mb-16">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                       border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full 
                           transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2"
              />

              <div className="text-5xl mb-4 filter hue-rotate-180 saturate-50">
                {contact.icon}
              </div>
              <h3 className="text-xl font-serif mb-2 text-gray-900 dark:text-gray-100">
                {contact.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-line">
                {contact.info}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {contact.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    onClick={action.action}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300
                              hover:-translate-y-1 hover:shadow-lg
                              ${
                                copiedText === contact.title &&
                                action.label === "Copy"
                                  ? "bg-green-500 text-white"
                                  : "bg-blue-500 hover:bg-blue-600 text-white"
                              }`}
                  >
                    {copiedText === contact.title && action.label === "Copy"
                      ? "Copied!"
                      : action.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
