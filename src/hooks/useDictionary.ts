import { useContext, useMemo } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import { siteConfig } from '../config/siteConfig';

/**
 * A highly optimized hook to retrieve UI dictionaries based on the current locale.
 * Automatically slices the siteConfig payload so components only consume the active language branch.
 */
export const useDictionary = () => {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useDictionary must be used within an I18nProvider');
  }

  const { language, toggleLanguage } = context;

  // Memoize the dictionary tree to prevent unnecessary reference allocations on re-renders.
  const dict = useMemo(() => ({
    language,
    toggleLanguage,
    global: siteConfig.global,
    nav: siteConfig.nav[language],
    hero: siteConfig.hero[language],
    about: siteConfig.about[language],
    projects: siteConfig.projects[language],
    caseStudy: siteConfig.caseStudy[language],
    awards: siteConfig.awards[language],
  }), [language, toggleLanguage]);

  return dict;
};
