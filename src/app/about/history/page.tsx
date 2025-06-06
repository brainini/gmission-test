"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const HistoryPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.about.history.title")}
      subtitle={t("pages.about.history.subtitle")}
      breadcrumb={[
        { name: "GMISSION", href: "/about" },
        { name: t("pages.about.history.title"), href: "/about/history" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("history.title")}
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {t("history.2024.title")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {t("history.2024.item1")}</li>
                    <li>• {t("history.2024.item2")}</li>
                    <li>• {t("history.2024.item3")}</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    {t("history.2020-2023.title")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {t("history.2020-2023.item1")}</li>
                    <li>• {t("history.2020-2023.item2")}</li>
                    <li>• {t("history.2020-2023.item3")}</li>
                    <li>• {t("history.2020-2023.item4")}</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    {t("history.2015-2019.title")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {t("history.2015-2019.item1")}</li>
                    <li>• {t("history.2015-2019.item2")}</li>
                    <li>• {t("history.2015-2019.item3")}</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {t("history.2000-2014.title")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• {t("history.2000-2014.item1")}</li>
                    <li>• {t("history.2000-2014.item2")}</li>
                    <li>• {t("history.2000-2014.item3")}</li>
                    <li>• {t("history.2000-2014.item4")}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("history.achievements.title")}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">300+</div>
                    <div className="text-sm text-gray-600">
                      {t("history.achievements.clients")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">
                      {t("history.achievements.solutions")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      20+
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("history.achievements.patents")}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      24년
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("history.achievements.experience")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HistoryPage;
