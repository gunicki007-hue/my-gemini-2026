import { createContext, useState, ReactNode } from 'react';
import { Locale } from '../config/siteConfig';

export interface I18nContextType {
  language: Locale;
  toggleLanguage: () => void;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Locale>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'cn' : 'en'));
  };

  return (
    <I18nContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
