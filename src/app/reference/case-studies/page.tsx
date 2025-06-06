"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudiesPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.reference.caseStudies.title")}
      subtitle={t("pages.reference.caseStudies.subtitle")}
      breadcrumb={[
        { name: t("nav.reference"), href: "/reference" },
        {
          name: t("pages.reference.caseStudies.title"),
          href: "/reference/case-studies",
        },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("caseStudies.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("caseStudies.description")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("caseStudies.cases.financial")}
              </h3>
              <p className="text-gray-600">
                {t("caseStudies.cases.financial.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("caseStudies.cases.hospital")}
              </h3>
              <p className="text-gray-600">
                {t("caseStudies.cases.hospital.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("caseStudies.cases.public")}
              </h3>
              <p className="text-gray-600">
                {t("caseStudies.cases.public.desc")}
              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("caseStudies.cta.title")}
            </h2>
            <p className="text-lg mb-6">{t("caseStudies.cta.description")}</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("caseStudies.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudiesPage;
