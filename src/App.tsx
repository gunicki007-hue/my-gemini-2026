/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { I18nProvider } from './contexts/I18nContext';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Web3Financial } from './pages/Web3Financial';
import { Insurtech } from './pages/Insurtech';
import { AIGC } from './pages/AIGC';
import { Spatial } from './pages/Spatial';

// Utility component to handle soft scroll resets & trigger Lenis
const RouteChangeHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = (window as any).lenis;

    // Only handle hash links globally if they are clicked via standard anchors
    if (hash && hash !== '#projects') {
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(hash, { immediate: true });
        } else {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView();
        }
      }, 100);
    } else if (!hash && pathname !== '/') {
      // General path change reset (unless Home where it will self-manage)
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0,0);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default function App({ initialLang = 'en' }: { initialLang?: 'en' | 'zh' }) {
  console.log("App booting with 01-1.webp Static Image Particle Engine...");
  return (
    <I18nProvider initialBaseLang={initialLang}>
      <SmoothScroll>
        <RouteChangeHandler />
        <div className="min-h-screen bg-base selection:bg-accent/40 selection:text-white flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/web3-financial" element={<Web3Financial />} />
            <Route path="/case-study/insurtech" element={<Insurtech />} />
            <Route path="/case-study/ai-strategy" element={<AIGC />} />
            <Route path="/case-study/spatial-experience" element={<Spatial />} />
            {/* Fallback to Home for unhandled routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </SmoothScroll>
    </I18nProvider>
  );
}


