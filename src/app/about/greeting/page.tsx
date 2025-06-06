"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const GreetingPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.about.greeting.title")}
      subtitle={t("pages.about.greeting.subtitle")}
      breadcrumb={[
        { name: "GMISSION", href: "/about" },
        { name: t("pages.about.greeting.title"), href: "/about/greeting" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CEO Message Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <span className="text-gray-600 text-lg font-medium">CEO</span>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("greeting.ceoName")}
                  </h3>
                  <p className="text-gray-600">{t("greeting.ceoTitle")}</p>
                </div>
              </div>
              <div>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                  {t("greeting.ceoMessage")}
                </blockquote>
                <footer className="mt-6">
                  <p className="text-sm text-gray-500">
                    {t("greeting.ceoQuote")}
                  </p>
                </footer>
              </div>
            </div>
          </div>

          {/* Company Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("greeting.vision.innovation")}
              </h3>
              <p className="text-gray-600">
                {t("greeting.vision.innovationDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("greeting.vision.trust")}
              </h3>
              <p className="text-gray-600">{t("greeting.vision.trustDesc")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("greeting.vision.growth")}
              </h3>
              <p className="text-gray-600">{t("greeting.vision.growthDesc")}</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("greeting.mission.title")}
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                {t("greeting.mission.description")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    300+
                  </div>
                  <div className="text-gray-300">
                    {t("greeting.stats.clients")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    20+
                  </div>
                  <div className="text-gray-300">
                    {t("greeting.stats.patents")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    24년
                  </div>
                  <div className="text-gray-300">
                    {t("greeting.stats.experience")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GreetingPage;
