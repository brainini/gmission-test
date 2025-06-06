"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const RetrieverPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.agenticAi.retriever.title")}
      subtitle={t("pages.agenticAi.retriever.subtitle")}
      breadcrumb={[
        { name: t("nav.agenticAi"), href: "/agentic-ai" },
        {
          name: t("pages.agenticAi.retriever.title"),
          href: "/agentic-ai/retriever",
        },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("retriever.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("retriever.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("retriever.features.documentSearch")}
              </h3>
              <p className="text-gray-600">
                {t("retriever.features.documentSearch.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("retriever.features.knowledgeFusion")}
              </h3>
              <p className="text-gray-600">
                {t("retriever.features.knowledgeFusion.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("retriever.features.realTimeUpdate")}
              </h3>
              <p className="text-gray-600">
                {t("retriever.features.realTimeUpdate.desc")}
              </p>
            </div>
          </div>

          <div className="bg-amber-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("retriever.cta.title")}
            </h2>
            <p className="text-lg mb-6">{t("retriever.cta.description")}</p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("retriever.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RetrieverPage;
