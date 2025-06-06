"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const AiCcPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.solutions.aiCc.title")}
      subtitle={t("pages.solutions.aiCc.subtitle")}
      breadcrumb={[
        { name: t("nav.solution"), href: "/solutions" },
        { name: t("pages.solutions.aiCc.title"), href: "/solutions/ai-cc" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("aiCc.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("aiCc.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiCc.features.consultationBot")}
              </h3>
              <p className="text-gray-600">
                {t("aiCc.features.consultationBot.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiCc.features.chatBot")}
              </h3>
              <p className="text-gray-600">{t("aiCc.features.chatBot.desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiCc.features.stt")}
              </h3>
              <p className="text-gray-600">{t("aiCc.features.stt.desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiCc.features.tts")}
              </h3>
              <p className="text-gray-600">{t("aiCc.features.tts.desc")}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {t("common.benefits")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {t("aiCc.benefits.serviceQuality")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiCc.benefits.serviceQuality.item1")}</li>
                  <li>• {t("aiCc.benefits.serviceQuality.item2")}</li>
                  <li>• {t("aiCc.benefits.serviceQuality.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {t("aiCc.benefits.operational")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiCc.benefits.operational.item1")}</li>
                  <li>• {t("aiCc.benefits.operational.item2")}</li>
                  <li>• {t("aiCc.benefits.operational.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">AI CC 성능</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">
                  {t("aiCc.stats.autoResponse")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">
                  {t("aiCc.stats.service")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-lg opacity-90">
                  {t("aiCc.stats.costReduction")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">
                  {t("aiCc.stats.satisfaction")}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("aiCc.cta.title")}</h2>
            <p className="text-lg mb-6">{t("aiCc.cta.description")}</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("aiCc.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AiCcPage;
