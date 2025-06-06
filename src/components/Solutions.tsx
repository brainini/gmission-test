"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Solutions = () => {
  const { t } = useLanguage();

  const solutionItems = [
    {
      icon: DocumentTextIcon,
      title: t("solutions.aiFax.title"),
      description: t("solutions.aiFax.description"),
      features: [
        t("solutions.features.webFax"),
        t("solutions.features.appFax"),
        t("solutions.features.cloudFax"),
        t("solutions.features.voiceFax"),
        t("solutions.features.autoFax"),
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: EyeIcon,
      title: t("solutions.aiOcr.title"),
      description: t("solutions.aiOcr.description"),
      features: [
        t("solutions.features.docRecognition"),
        t("solutions.features.textExtraction"),
        t("solutions.features.dataConversion"),
        t("solutions.features.autoClassification"),
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t("solutions.aiCc.title"),
      description: t("solutions.aiCc.description"),
      features: [
        t("solutions.features.chatBot"),
        t("solutions.features.chatAI"),
        t("solutions.features.stt"),
        t("solutions.features.tts"),
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CpuChipIcon,
      title: t("solutions.dexma.title"),
      description: t("solutions.dexma.description"),
      features: [
        t("solutions.features.faceRecognition"),
        t("solutions.features.plateRecognition"),
        t("solutions.features.dexmaAqua"),
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionItems.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${solution.color} p-6`}>
                  <IconComponent className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 font-medium">
                    {t("solutions.detailBtn")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Solutions Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {t("solutions.agenticTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">DX</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {t("solutions.dxhund")}
              </h4>
              <p className="text-gray-600">{t("solutions.dxhundDesc")}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">RT</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {t("solutions.retriever")}
              </h4>
              <p className="text-gray-600">{t("solutions.retrieverDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
