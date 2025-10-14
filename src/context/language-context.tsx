'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import en from '@/lib/locales/en.json';
import kn from '@/lib/locales/kn.json';
import hi from '@/lib/locales/hi.json';

type Language = 'en' | 'kn' | 'hi';

const translations = {
  en,
  kn,
  hi,
};

type TranslationKey = keyof typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: TranslationKey, fallback?: string) => {
    return translations[language][key] || fallback || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
