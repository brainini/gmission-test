"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const VisibleArsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.services.visibleArs.title")}
      subtitle={t("pages.services.visibleArs.subtitle")}
      breadcrumb={[
        { name: t("nav.service"), href: "/services" },
        {
          name: t("pages.services.visibleArs.title"),
          href: "/services/visible-ars",
        },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("visibleArs.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("visibleArs.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.visualMenu")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.visualMenu.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.touchInput")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.touchInput.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.realTimeInfo")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.realTimeInfo.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.multilingual")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.multilingual.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.accessibility")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.accessibility.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("visibleArs.features.customization")}
              </h3>
              <p className="text-gray-600">
                {t("visibleArs.features.customization.desc")}
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
                <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                  {t("visibleArs.benefits.customerSatisfaction")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • {t("visibleArs.benefits.customerSatisfaction.item1")}
                  </li>
                  <li>
                    • {t("visibleArs.benefits.customerSatisfaction.item2")}
                  </li>
                  <li>
                    • {t("visibleArs.benefits.customerSatisfaction.item3")}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t("visibleArs.benefits.operational")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("visibleArs.benefits.operational.item1")}</li>
                  <li>• {t("visibleArs.benefits.operational.item2")}</li>
                  <li>• {t("visibleArs.benefits.operational.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("visibleArs.useCases.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("visibleArs.useCases.callCenter")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("visibleArs.useCases.callCenter.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("visibleArs.useCases.hospital")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("visibleArs.useCases.hospital.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("visibleArs.useCases.financial")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("visibleArs.useCases.financial.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("visibleArs.cta.title")}
            </h2>
            <p className="text-lg mb-6">{t("visibleArs.cta.description")}</p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("visibleArs.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisibleArsPage;
