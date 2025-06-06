"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const AiOcrPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.solutions.aiOcr.title")}
      subtitle={t("pages.solutions.aiOcr.subtitle")}
      breadcrumb={[
        { name: t("nav.solution"), href: "/solutions" },
        { name: t("pages.solutions.aiOcr.title"), href: "/solutions/ai-ocr" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("aiOcr.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("aiOcr.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.docRecognition")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.docRecognition.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.textExtraction")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.textExtraction.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.dataConversion")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.dataConversion.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.autoClassification")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.autoClassification.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.qualityVerification")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.qualityVerification.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiOcr.features.apiIntegration")}
              </h3>
              <p className="text-gray-600">
                {t("aiOcr.features.apiIntegration.desc")}
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {t("common.benefits")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {t("aiOcr.benefits.automation")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiOcr.benefits.automation.item1")}</li>
                  <li>• {t("aiOcr.benefits.automation.item2")}</li>
                  <li>• {t("aiOcr.benefits.automation.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t("aiOcr.benefits.accuracy")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiOcr.benefits.accuracy.item1")}</li>
                  <li>• {t("aiOcr.benefits.accuracy.item2")}</li>
                  <li>• {t("aiOcr.benefits.accuracy.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("aiOcr.useCases.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.financial")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.financial.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.contracts")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.contracts.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.receipts")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.receipts.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.medical")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.medical.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.education")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.education.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("aiOcr.useCases.public")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("aiOcr.useCases.public.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-purple-600 rounded-2xl p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">AI OCR 성능</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">99.5%</div>
                <div className="text-lg opacity-90">
                  {t("aiOcr.stats.accuracy")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0.5초</div>
                <div className="text-lg opacity-90">
                  {t("aiOcr.stats.processingTime")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">
                  {t("aiOcr.stats.languages")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">
                  {t("aiOcr.stats.formats")}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("aiOcr.cta.title")}</h2>
            <p className="text-lg mb-6">{t("aiOcr.cta.description")}</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("aiOcr.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AiOcrPage;
