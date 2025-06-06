"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const ClientsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.reference.clients.title")}
      subtitle={t("pages.reference.clients.subtitle")}
      breadcrumb={[
        { name: t("nav.reference"), href: "/reference" },
        {
          name: t("pages.reference.clients.title"),
          href: "/reference/clients",
        },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("clientsPage.subtitle")}
            </h2>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClientsPage;
