"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const FillOnePage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.services.fillOne.title")}
      subtitle={t("pages.services.fillOne.subtitle")}
      breadcrumb={[
        { name: t("nav.service"), href: "/services" },
        { name: t("pages.services.fillOne.title"), href: "/services/fill-one" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("fillOne.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("fillOne.description")}
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("fillOne.howItWorks.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("fillOne.howItWorks.step1.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.howItWorks.step1.desc")}
                </p>
              </div>

              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("fillOne.howItWorks.step2.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.howItWorks.step2.desc")}
                </p>
              </div>

              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("fillOne.howItWorks.step3.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.howItWorks.step3.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("fillOne.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("fillOne.features.companyInfo.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.features.companyInfo.desc")}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("fillOne.features.autoPopup.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.features.autoPopup.desc")}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("fillOne.features.flexibleSettings.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.features.flexibleSettings.desc")}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("fillOne.features.analytics.title")}
                </h3>
                <p className="text-gray-600">
                  {t("fillOne.features.analytics.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("fillOne.benefits.title")}
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {t("fillOne.benefits.response.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("fillOne.benefits.response.desc")}
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">
                    {t("fillOne.benefits.trust.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("fillOne.benefits.trust.desc")}
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">
                    {t("fillOne.benefits.sales.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t("fillOne.benefits.sales.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-green-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("fillOne.cta.title")}
            </h2>
            <p className="text-lg mb-6">{t("fillOne.cta.description")}</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("fillOne.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FillOnePage;
