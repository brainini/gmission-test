"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const IvrPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.services.ivr.title")}
      subtitle={t("pages.services.ivr.subtitle")}
      breadcrumb={[
        { name: t("nav.service"), href: "/services" },
        { name: t("pages.services.ivr.title"), href: "/services/ivr" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("ivr.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("ivr.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.voiceRecognition")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.voiceRecognition.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.autoRouting")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.autoRouting.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.multilingual")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.multilingual.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.personalization")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.personalization.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.analytics")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.analytics.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("ivr.features.flexibleSettings")}
              </h3>
              <p className="text-gray-600">
                {t("ivr.features.flexibleSettings.desc")}
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
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                  {t("ivr.benefits.costReduction")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("ivr.benefits.costReduction.item1")}</li>
                  <li>• {t("ivr.benefits.costReduction.item2")}</li>
                  <li>• {t("ivr.benefits.costReduction.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  {t("ivr.benefits.serviceQuality")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("ivr.benefits.serviceQuality.item1")}</li>
                  <li>• {t("ivr.benefits.serviceQuality.item2")}</li>
                  <li>• {t("ivr.benefits.serviceQuality.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("ivr.workflow.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("ivr.workflow.step1")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("ivr.workflow.step1.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("ivr.workflow.step2")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("ivr.workflow.step2.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("ivr.workflow.step3")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("ivr.workflow.step3.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("ivr.workflow.step4")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("ivr.workflow.step4.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("ivr.cta.title")}</h2>
            <p className="text-lg mb-6">{t("ivr.cta.description")}</p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("ivr.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default IvrPage;
