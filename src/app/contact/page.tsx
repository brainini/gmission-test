"use client";

import PageLayout from "@/components/PageLayout";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("nav.contact")}
      subtitle={t("contact.subtitle")}
      breadcrumb={[{ name: t("nav.contact"), href: "/contact" }]}
    >
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
