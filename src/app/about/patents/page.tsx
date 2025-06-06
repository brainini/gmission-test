"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const PatentsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.about.patents.title")}
      subtitle={t("pages.about.patents.subtitle")}
      breadcrumb={[
        { name: "GMISSION", href: "/about" },
        { name: t("pages.about.patents.title"), href: "/about/patents" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Patents Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("patents.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.items.aiFax")}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  특허 제10-2024-0001
                </p>
                <p className="text-sm text-gray-500">2024.03</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  AI/자동화
                </span>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.items.aiOcr")}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  특허 제10-2023-0025
                </p>
                <p className="text-sm text-gray-500">2023.11</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  AI/OCR
                </span>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.items.videoRecognition")}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  특허 제10-2023-0018
                </p>
                <p className="text-sm text-gray-500">2023.08</p>
                <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                  AI/영상인식
                </span>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.items.aiChatbot")}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  특허 제10-2023-0012
                </p>
                <p className="text-sm text-gray-500">2023.05</p>
                <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                  AI/NLP
                </span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("patents.certifications")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.certs.swClub")}
                </h3>
                <p className="text-sm text-gray-600 mb-2">과학기술정보통신부</p>
                <p className="text-sm text-gray-500">2024.04</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.certs.gpass")}
                </h3>
                <p className="text-sm text-gray-600 mb-2">조달청</p>
                <p className="text-sm text-gray-500">2024.02</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("patents.certs.iso")}
                </h3>
                <p className="text-sm text-gray-600 mb-2">국제표준화기구</p>
                <p className="text-sm text-gray-500">2023.12</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {t("patents.techCompetitiveness")}
              </h2>
              <p className="text-xl opacity-90">
                {t("patents.techCompetitivenessDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-lg opacity-90">
                  {t("patents.registeredPatents")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">
                  {t("patents.certifications.count")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">
                  {t("patents.techFields")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24년</div>
                <div className="text-lg opacity-90">
                  {t("patents.rdExperience")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PatentsPage;
