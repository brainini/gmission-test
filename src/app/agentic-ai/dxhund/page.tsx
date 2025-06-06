"use client";

import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const DxhundPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("pages.agenticAi.dxhund.title")}
      subtitle={t("pages.agenticAi.dxhund.subtitle")}
      breadcrumb={[
        { name: t("nav.agenticAi"), href: "/agentic-ai" },
        { name: t("pages.agenticAi.dxhund.title"), href: "/agentic-ai/dxhund" },
      ]}
    >
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("dxhund.subtitle")}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t("dxhund.description")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.autonomous")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.autonomous.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.multiSystem")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.multiSystem.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.intelligentDecision")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.intelligentDecision.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.realTimeLearning")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.realTimeLearning.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.exceptionHandling")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.exceptionHandling.desc")}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("dxhund.features.workflowManagement")}
              </h3>
              <p className="text-gray-600">
                {t("dxhund.features.workflowManagement.desc")}
              </p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("dxhund.useCases.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.customerService")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.customerService.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.dataAnalysis")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.dataAnalysis.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.salesManagement")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.salesManagement.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.financialManagement")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.financialManagement.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.hrManagement")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.hrManagement.desc")}
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.useCases.supplyChain")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.useCases.supplyChain.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {t("common.benefits")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {t("dxhund.benefits.productivity")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("dxhund.benefits.productivity.item1")}</li>
                  <li>• {t("dxhund.benefits.productivity.item2")}</li>
                  <li>• {t("dxhund.benefits.productivity.item3")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4">
                  {t("dxhund.benefits.costReduction")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("dxhund.benefits.costReduction.item1")}</li>
                  <li>• {t("dxhund.benefits.costReduction.item2")}</li>
                  <li>• {t("dxhund.benefits.costReduction.item3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("dxhund.architecture.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.architecture.reasoning")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.architecture.reasoning.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.architecture.execution")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.architecture.execution.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.architecture.knowledge")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.architecture.knowledge.desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("dxhund.architecture.feedback")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("dxhund.architecture.feedback.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t("dxhund.cta.title")}</h2>
            <p className="text-lg mb-6">{t("dxhund.cta.description")}</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {t("dxhund.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DxhundPage;
