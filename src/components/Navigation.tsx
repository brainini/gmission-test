"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
  }, [closeTimeoutId]);

  // 마우스가 메뉴 또는 서브메뉴에 진입했을 때
  const handleMouseEnter = (id: string) => {
    clearCloseTimeout();
    setActiveDropdown(id);
  };

  // 마우스가 메뉴 또는 서브메뉴를 벗어났을 때 약간의 지연 후 닫기
  const handleMouseLeave = () => {
    clearCloseTimeout();
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms 지연
    setCloseTimeoutId(timeout);
  };

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 타이머 정리
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  const navigationItems = [
    {
      name: t("nav.gmission"),
      id: "gmission",
      items: [
        { name: t("submenu.greeting"), href: "/about/greeting" },
        { name: t("submenu.history"), href: "/about/history" },
        { name: t("submenu.patents"), href: "/about/patents" },
      ],
    },
    {
      name: t("nav.solution"),
      id: "solution",
      items: [
        { name: t("submenu.aiFax"), href: "/solutions/ai-fax" },
        { name: t("submenu.aiOcr"), href: "/solutions/ai-ocr" },
        { name: t("submenu.aiCc"), href: "/solutions/ai-cc" },
        { name: t("submenu.dexma"), href: "/solutions/dexma" },
      ],
    },
    {
      name: t("nav.service"),
      id: "service",
      items: [
        { name: t("submenu.fillOne"), href: "/services/fill-one" },
        { name: t("submenu.visibleArs"), href: "/services/visible-ars" },
        { name: t("submenu.ivr"), href: "/services/ivr" },
      ],
    },
    {
      name: t("nav.agenticAi"),
      id: "agentic-ai",
      items: [
        { name: t("submenu.dxhund"), href: "/agentic-ai/dxhund" },
        { name: t("submenu.retriever"), href: "/agentic-ai/retriever" },
      ],
    },
    {
      name: t("nav.reference"),
      id: "reference",
      items: [
        { name: t("submenu.caseStudies"), href: "/reference/case-studies" },
        { name: t("submenu.clients"), href: "/reference/clients" },
        { name: t("submenu.partners"), href: "/reference/partners" },
      ],
    },
    {
      name: t("nav.news"),
      id: "news",
      items: [
        { name: t("submenu.notice"), href: "/news/notice" },
        { name: t("submenu.media"), href: "/news/media" },
        { name: t("submenu.gallery"), href: "/news/gallery" },
      ],
    },
    {
      name: t("nav.contact"),
      id: "contact",
      items: [],
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              GMISSION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {item.items.length > 0 ? (
                  <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )}

                {item.items.length > 0 && activeDropdown === item.id && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center">
                <GlobeAltIcon className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => changeLanguage("ko")}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    language === "ko"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  🇰🇷 한국어
                </button>
                <button
                  onClick={() => changeLanguage("ja")}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    language === "ja"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  🇯🇵 日本語
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    language === "en"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.items.length > 0 ? (
                  <>
                    <button className="w-full text-left text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                      {item.name}
                    </button>
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="w-full text-left text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Language Selector */}
            <div className="border-t pt-4">
              <div className="px-3 py-2 text-base font-medium text-gray-700">
                언어 / Language
              </div>
              <button
                onClick={() => changeLanguage("ko")}
                className={`w-full text-left block px-6 py-2 text-sm transition-colors duration-200 ${
                  language === "ko"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                🇰🇷 한국어
              </button>
              <button
                onClick={() => changeLanguage("ja")}
                className={`w-full text-left block px-6 py-2 text-sm transition-colors duration-200 ${
                  language === "ja"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                🇯🇵 日本語
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`w-full text-left block px-6 py-2 text-sm transition-colors duration-200 ${
                  language === "en"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                🇺🇸 English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
