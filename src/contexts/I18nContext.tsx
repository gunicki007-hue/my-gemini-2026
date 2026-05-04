import { createContext, useState, ReactNode } from 'react';
import { Locale } from '../config/siteConfig';

export interface I18nContextType {
  language: Locale;
  toggleLanguage: () => void;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  initialBaseLang?: Locale;
}

export const I18nProvider = ({ children, initialBaseLang = 'en' }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Locale>(initialBaseLang);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'zh' : 'en';
    
    // Construct the new URL maintaining the current path after the base language
    let path = window.location.pathname;
    let newPath = path.replace(/^\/(en|zh)(\/|$)/, `/${nextLang}$2`);
    
    // If somehow missing the prefix entirely
    if (newPath === path && !path.startsWith('/en') && !path.startsWith('/zh')) {
      newPath = `/${nextLang}${path}`;
    }
    
    window.location.href = newPath + window.location.hash;
  };

  return (
    <I18nContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
