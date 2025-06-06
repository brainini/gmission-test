"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BuildingOfficeIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const Clients = () => {
  const { t } = useLanguage();

  const publicClients = [
    "공무원연금공단",
    "해양환경관리공단",
    "TS한국교통안전공단",
    "한국도로공사",
    "한국부동산원",
    "한국생산성본부",
    "사학연금",
    "광주정부통합전산센터",
    "한국소방안전원",
    "해양경찰청",
    "안양시청",
    "포천시청",
    "파주시청",
    "광양시청",
    "나주시청",
    "부천시청",
    "익산시청",
    "동대문구청",
  ];

  const financialClients = [
    "신한금융지주회사",
    "신한은행",
    "신한신용정보",
    "신한EZ손해보험",
    "우리금융그룹",
    "우리은행",
    "우리금융저축은행",
    "경남은행",
    "NH 농협은행",
    "NH 투자증권",
    "농협중앙회",
    "BNK 저축은행",
    "MG 새마을금고",
    "MG 손해보험",
    "하나은행",
    "IBK 기업은행",
  ];

  const generalClients = [
    "삼성전자",
    "삼성SDS",
    "삼성웰스토리",
    "삼성물산",
    "삼성디스플레이",
    "롯데하이마트",
    "STX엔진",
    "범한판토스",
    "고려해운항공",
    "고려해운",
    "LG이노텍",
    "SK하이닉스",
    "인터지스",
    "동국시스템즈",
    "케이드라이브",
    "현대자동차",
    "건설근로자공제회",
  ];

  const clientCategories = [
    {
      title: t("clients.publicOrganizations"),
      icon: BuildingOfficeIcon,
      clients: publicClients,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: t("clients.financialSector"),
      icon: BanknotesIcon,
      clients: financialClients,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: t("clients.generalCompanies"),
      icon: BuildingOffice2Icon,
      clients: generalClients,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("clients.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className={`${category.bgColor} rounded-xl p-8`}>
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.clients.map((client, clientIndex) => (
                    <div
                      key={clientIndex}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {client}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    className={`bg-gradient-to-r ${category.color} text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                  >
                    {t("clients.moreBtn")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("clients.statsTitle")}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                300+
              </div>
              <div className="text-gray-300">{t("clients.totalClients")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                50+
              </div>
              <div className="text-gray-300">{t("clients.publicOrgs")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div className="text-gray-300">{t("clients.financialOrgs")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                150+
              </div>
              <div className="text-gray-300">{t("clients.generalOrgs")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
