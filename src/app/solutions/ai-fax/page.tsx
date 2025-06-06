"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const AiFaxPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.solutions.aiFax.title")}
      subtitle={t("pages.solutions.aiFax.subtitle")}
      breadcrumb={[
        { name: t("nav.solution"), href: "/solutions" },
        { name: t("pages.solutions.aiFax.title"), href: "/solutions/ai-fax" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("aiFax.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("aiFax.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.webFax.title")}
              </h3>
              <p className="text-gray-600">{t("aiFax.features.webFax.desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.appFax.title")}
              </h3>
              <p className="text-gray-600">{t("aiFax.features.appFax.desc")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.cloudFax.title")}
              </h3>
              <p className="text-gray-600">
                {t("aiFax.features.cloudFax.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.voiceFax.title")}
              </h3>
              <p className="text-gray-600">
                {t("aiFax.features.voiceFax.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.autoFax.title")}
              </h3>
              <p className="text-gray-600">
                {t("aiFax.features.autoFax.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("aiFax.features.aiRecognition.title")}
              </h3>
              <p className="text-gray-600">
                {t("aiFax.features.aiRecognition.desc")}
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {t("aiFax.benefits.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t("aiFax.benefits.efficiency.title")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiFax.benefits.efficiency.item1")}</li>
                  <li>• {t("aiFax.benefits.efficiency.item2")}</li>
                  <li>• {t("aiFax.benefits.efficiency.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  {t("aiFax.benefits.cost.title")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("aiFax.benefits.cost.item1")}</li>
                  <li>• {t("aiFax.benefits.cost.item2")}</li>
                  <li>• {t("aiFax.benefits.cost.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("aiFax.cta.title")}</h2>
            <p className="text-lg mb-6">{t("aiFax.cta.description")}</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("aiFax.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AiFaxPage;
