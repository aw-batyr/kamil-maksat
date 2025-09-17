import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import z from "zod";

const icons = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 text-indigo-600 dark:text-indigo-400"
  >
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>,
  <svg
    className="w-7 h-7 text-indigo-600 dark:text-indigo-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 2a9 9 0 0 1 9 9M13 6a5 5 0 0 1 5 5m-4.832 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    />
  </svg>,
  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
    <svg
      className="w-7 h-7 text-indigo-600 dark:text-indigo-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
      />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  </div>,
];

const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  company: z.string().min(3, "Company name is required"),
  telephone: z.string().min(3, "Phone number is required"),
  message: z.string().min(3, "Message is required"),
});

type FormFields = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const { t } = useTranslation("index");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const title = t("contacts.title");
  const subtitle = t("contacts.subtitle");
  const info = t("contacts.info", { returnObjects: true }) as {
    title: string;
    subtitle: string;
  }[];
  const fields = t("contacts.fields", { returnObjects: true }) as {
    name: string;
  }[];

  const onSubmit = async (data: FormFields) => {
    try {
      const res = await axios.post(
        "https://kamilmaksat.com/api/send_email",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.status === "success") toast.success(res.data.message);
      else toast.error("Something went wrong!");
      reset();
    } catch (error) {
      console.error("POST", error);
    }
  };

  return (
    <section
      id="contacts"
      className="py-24 bg-gradient-to-br from-blue-50/30 to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-5xl font-serif text-gray-900 dark:text-gray-100 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Contact Info List */}
            <div className="space-y-6">
              {info.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-gray-100 font-medium mb-1">
                      {item.title}
                    </h4>
                    <address className="text-gray-600 dark:text-gray-400 not-italic">
                      {item.subtitle}
                    </address>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 relative">
            {/* Decorative Elements */}
            <div
              className="absolute -left-7 -bottom-7 w-32 h-32 opacity-95 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 6px 6px, #06b6a4 2px, transparent 3px)",
                backgroundSize: "12px 12px",
              }}
            />
            <div
              className="absolute hidden lg:block -top-9 -right-9 w-22 h-22 bg-blue-500 rounded-full pointer-events-none
                          shadow-lg shadow-blue-500/20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}
            />

            <div className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 relative z-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-7 font-sans"
              >
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    placeholder={fields[0].name}
                    className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-600
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all"
                  />
                  {errors.name && (
                    <span className="error-text left-0 -bottom-5">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="relative bottom">
                  <input
                    {...register("company")}
                    type="text"
                    name="company"
                    placeholder={fields[1].name}
                    className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-600
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all"
                  />
                  {errors.company && (
                    <span className="error-text -bottom-5">
                      {errors.company.message}
                    </span>
                  )}
                </div>
                <div className="relative bottom">
                  <input
                    {...register("telephone")}
                    type="text"
                    name="telephone"
                    placeholder={fields[2].name}
                    className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-600
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all"
                  />
                  {errors.telephone && (
                    <span className="error-text -bottom-5">
                      {errors.telephone.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    {...register("message")}
                    name="message"
                    placeholder={fields[3].name}
                    rows={4}
                    className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-600
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all"
                  />
                  {errors.message && (
                    <span className="error-text -bottom-4">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full disabled:opacity-50 disabled:cursor-default cursor-pointer focus:scale-95 font-sans cup py-4 bg-blue-500 text-white rounded-lg font-bold text-lg
                                          hover:bg-blue-600 transition-all duration-300 mt-2"
                >
                  {t("contacts.btn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
