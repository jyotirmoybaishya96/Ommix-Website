'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es', 'hi', 'de', 'fr', 'ja', 'ru', 'pt', 'zh-CN', 'ar', 'ko', 'it', 'nl', 'tr', 'pl', 'sv', 'vi', 'id', 'th'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false, // this is important to avoid suspense errors during first render
    },
  });

export default i18n;
