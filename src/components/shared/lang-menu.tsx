import { ChevronDown } from "lucide-react";
import { useLangStore } from "../../store/lang";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const langList = [
  {
    locale: "ru",
  },
  {
    locale: "en",
  },
  {
    locale: "tm",
  },
];

export const LangMenu = () => {
  const ref = useRef(null);
  const locale = useLangStore((state) => state.locale);
  const setLocale = useLangStore((state) => state.setLocale);

  const [active, setActive] = useState(false);

  const onLang = (locale: string) => {
    setActive(false);
    setLocale(locale);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !(ref.current as any).contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active]);

  return (
    <div
      ref={ref}
      className="relative font-sans text-gray-600 dark:text-gray-300"
    >
      <div
        onClick={() => setActive((prev) => !prev)}
        className="p-2.5 flex  items-center cursor-pointer bg-gray-100 dark:bg-gray-800 drop-shadow rounded-md"
      >
        <h4 className="first-letter:uppercase">{locale}</h4>
        <ChevronDown />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
        className="absolute top-full flex flex-col py-1 right-0 mt-2 w-15 bg-gray-100 dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-10"
      >
        {langList
          .filter((item) => locale !== item.locale)
          .map(({ locale }) => (
            <button
              onClick={() => onLang(locale)}
              key={locale}
              className="first-letter:uppercase py-1 text-left pl-3 cursor-pointer"
            >
              {locale}
            </button>
          ))}
      </motion.div>
    </div>
  );
};
