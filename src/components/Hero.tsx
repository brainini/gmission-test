"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white">{t("hero.title")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              {t("hero.cta")}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
              {t("nav.contact")}
            </button>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="relative">
        <svg
          className="absolute bottom-0 w-full h-6 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V120H1200V0C1200,0 1100,20 600,20C100,20 0,0 0,0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
