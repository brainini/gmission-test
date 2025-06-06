"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    position: "",
    phone: "",
    email: "",
    content: "",
    source: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("contact.formTitle")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.company")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.position")}
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.source")}
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{t("contact.selectPlaceholder")}</option>
                  <option value="search">{t("contact.sourceSearch")}</option>
                  <option value="referral">
                    {t("contact.sourceReferral")}
                  </option>
                  <option value="website">{t("contact.sourceWebsite")}</option>
                  <option value="social">{t("contact.sourceSocial")}</option>
                  <option value="other">{t("contact.sourceOther")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.content")}
                </label>
                <textarea
                  name="content"
                  rows={5}
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder={t("contact.placeholder")}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
              >
                <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                {t("contact.submit")}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.infoTitle")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.phoneLabel")}
                    </h4>
                    <p className="text-gray-600">1544-5381</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.emailLabel")}
                    </h4>
                    <p className="text-gray-600">info@gmission.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.addressLabel")}
                    </h4>
                    <p className="text-gray-600">
                      서울특별시 성동구 뚝섬로 1길 25
                      <br />
                      서울숲 한라에코밸리 1203호, 1301호
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {t("contact.hoursTitle")}
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{t("contact.weekdays")}</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.saturday")}</span>
                  <span>{t("contact.closed")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.sunday")}</span>
                  <span>{t("contact.closed")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.holidays")}</span>
                  <span>{t("contact.closed")}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.quickTitle")}
              </h3>

              <div className="space-y-4">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  {t("contact.kakaoBtn")}
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  {t("contact.callBtn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
