"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const GalleryPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.news.gallery.title")}
      subtitle={t("pages.news.gallery.subtitle")}
      breadcrumb={[
        { name: t("nav.news"), href: "/news" },
        { name: t("pages.news.gallery.title"), href: "/news/gallery" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("galleryPage.subtitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("galleryPage.description")}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryPage;
