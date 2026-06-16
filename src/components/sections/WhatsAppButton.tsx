"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showCard, setShowCard] = useState(true);

  const phoneNumber = "917052946251";

  const message = encodeURIComponent(
    "Hi SH Tech Lab 👋\n\nI'm interested in your services and would like to discuss my project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(false);
    }, 18000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Business Card */}
      {showCard && (
        <div className="fixed bottom-24 right-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative w-[220px] md:w-[280px] rounded-2xl border border-gray-200 bg-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowCard(false)}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              aria-label="Close WhatsApp popup"
            >
              ×
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <FaWhatsapp
                  size={24}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  SH Tech Lab
                </h3>

                <p className="mt-1 text-xs font-medium text-green-600">
                  ● Online Now
                </p>

                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  Let's turn your ideas into a digital product.
                </p>

                <div className="mt-3 inline-flex rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white">
                  Start Chat
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp
          size={32}
          className="text-white md:text-[38px]"
        />
      </a>

      {/* Pulse Ring */}
      <div className="pointer-events-none fixed bottom-5 right-5 z-40 h-14 w-14 md:h-16 md:w-16 animate-ping rounded-full bg-[#25D366]/20" />
    </>
  );
}