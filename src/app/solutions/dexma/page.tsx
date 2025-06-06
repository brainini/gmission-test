"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const DexmaPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.solutions.dexma.title")}
      subtitle={t("pages.solutions.dexma.subtitle")}
      breadcrumb={[
        { name: t("nav.solution"), href: "/solutions" },
        { name: t("pages.solutions.dexma.title"), href: "/solutions/dexma" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("dexma.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("dexma.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dexma.features.faceRecognition")}
              </h3>
              <p className="text-gray-600">
                {t("dexma.features.faceRecognition.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dexma.features.plateRecognition")}
              </h3>
              <p className="text-gray-600">
                {t("dexma.features.plateRecognition.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dexma.features.aqua")}
              </h3>
              <p className="text-gray-600">{t("dexma.features.aqua.desc")}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {t("common.benefits")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  {t("dexma.benefits.security")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("dexma.benefits.security.item1")}</li>
                  <li>• {t("dexma.benefits.security.item2")}</li>
                  <li>• {t("dexma.benefits.security.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  {t("dexma.benefits.operational")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("dexma.benefits.operational.item1")}</li>
                  <li>• {t("dexma.benefits.operational.item2")}</li>
                  <li>• {t("dexma.benefits.operational.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("dexma.cta.title")}</h2>
            <p className="text-lg mb-6">{t("dexma.cta.description")}</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("dexma.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DexmaPage;
