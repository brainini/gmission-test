"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnersPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.reference.partners.title")}
      subtitle={t("pages.reference.partners.subtitle")}
      breadcrumb={[
        { name: t("nav.reference"), href: "/reference" },
        {
          name: t("pages.reference.partners.title"),
          href: "/reference/partners",
        },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("partnersPage.subtitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("partnersPage.description")}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PartnersPage;
