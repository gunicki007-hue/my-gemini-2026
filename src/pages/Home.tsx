import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';

export const Home = () => {
  const { state } = useLocation();

  useLayoutEffect(() => {
    const locationState = state as { scrollTo?: string };
    
    if (locationState?.scrollTo === 'projects') {
      const lenis = (window as any).lenis;
      
      const snapTo = () => {
        const el = document.getElementById('projects');
        if (el) {
          if (lenis) {
            // Apply immediately to internal tracker
            lenis.scrollTo(el, { immediate: true, offset: -80 });
          } else {
            const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: absoluteTop - 80, left: 0, behavior: 'instant' });
          }
        }
      };

      // Apply synchronously on paint and reflow iteratively
      snapTo();
      const t1 = setTimeout(snapTo, 50);
      const t2 = setTimeout(snapTo, 150);
      
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else if (!window.location.hash) {
      // Clean start for Home without params
      window.scrollTo(0, 0);
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(0, { immediate: true });
    }
  }, [state]);

  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};
