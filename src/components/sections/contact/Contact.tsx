"use client";

import { useState } from "react";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a0ec17b8-50dd-4e63-9768-f36c8884ab50");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: isAr ? "تم إرسال رسالتك." : "Message sent.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus({
        type: "error",
        message: isAr ? "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقًا." : "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
              {isAr ? "تواصل" : "Contact"}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              {isAr ? "تواصل معي" : "Contact Me"}
            </h2>

            <p className="mt-3 text-base text-slate-600">
              {isAr
                ? "للفرص الوظيفية أو العمل الحر أو الحديث عن مشروع."
                : "For a role, freelance work, or a project conversation."}
            </p>

            <div className="mt-8 space-y-4 text-sm font-medium text-slate-700">
              <a href="mailto:emanbusiness2002@gmail.com" className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={18} />
                </div>
                <span dir="ltr" className="inline-block">emanbusiness2002@gmail.com</span>
              </a>
              <a href="tel:+201273191052" className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={18} />
                </div>
                <span dir="ltr" className="inline-block">+201273191052</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={18} />
                </div>
                <span>{isAr ? "جدة، السعودية" : "Jeddah, Saudi Arabia"}</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://github.com/EmanMohamed36/" target="_blank" rel="noreferrer" className="text-blue-600">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/eman-mohamed-652978225" target="_blank" rel="noreferrer" className="text-blue-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {isAr ? "الاسم الكامل" : "Your Name"}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={isAr ? "الاسم" : "Name"}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {isAr ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@email.com"
                dir="ltr"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {isAr ? "تفاصيل الرسالة" : "Message"}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder={isAr ? "اكتب رسالتك هنا..." : "Write your message..."}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-medium ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2">
              <span>
                {loading
                  ? isAr ? "جاري الإرسال..." : "Sending..."
                  : isAr ? "إرسال الرسالة" : "Send Message"}
              </span>
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
