"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                GMISSION
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  <strong>{t("footer.tel")}:</strong> 1544-5381
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 text-blue-400 mr-3 flex items-center justify-center text-sm font-bold">
                  F
                </span>
                <span className="text-gray-300">
                  <strong>{t("footer.fax")}:</strong> 02-6948-9451
                </span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  <strong>{t("footer.mail")}:</strong> info@gmission.com
                </span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  <strong>{t("footer.address")}:</strong>
                  <br />
                  서울특별시 성동구 뚝섬로 1길 25
                  <br />
                  서울숲 한라에코밸리 1203호, 1301호
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t("footer.solutionsTitle")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  AI FAX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  AI OCR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  AI CC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  DEXMA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Agentic AI
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t("footer.companyTitle")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t("footer.history")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t("footer.patents")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t("footer.cases")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t("footer.notice")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Information */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>
                <strong>{t("footer.bizLic")}:</strong> 238-88-01373
              </span>
              <span>
                <strong>{t("footer.representative")}:</strong> 한준섭
              </span>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <p>{t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="bg-blue-600 text-center py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white hover:text-blue-200 transition-colors"
        >
          ↑ {t("footer.topBtn")}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
