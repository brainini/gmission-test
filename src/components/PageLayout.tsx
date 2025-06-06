"use client";

import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface BreadcrumbItem {
  name: string;
  href?: string; // href가 없으면 클릭 불가
}

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

const PageLayout = ({
  children,
  title,
  subtitle,
  breadcrumb,
}: PageLayoutProps) => {
  // 실제 페이지가 존재하지 않는 상위 메뉴 경로
  const NON_CLICKABLE_PATHS = [
    "/about",
    "/solutions",
    "/services",
    "/agentic-ai",
    "/reference",
    "/news",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      {(title || breadcrumb) && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {breadcrumb && (
              <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link
                        href="/"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <svg
                          className="flex-shrink-0 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="sr-only">Home</span>
                      </Link>
                    </div>
                  </li>
                  {breadcrumb.map((item, index) => (
                    <li key={`${item.name}-${index}`}>
                      <div className="flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        {item.href &&
                        !NON_CLICKABLE_PATHS.includes(item.href) ? (
                          <Link
                            href={item.href}
                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span className="ml-4 text-sm font-medium text-gray-400 cursor-not-allowed">
                            {item.name}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {title && (
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Page Content */}
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
