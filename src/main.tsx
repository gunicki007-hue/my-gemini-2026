import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Initialize language from URL
let path = window.location.pathname;
let initialLang = 'en';
const langMatch = path.match(/^\/(en|zh)(\/|$)/);

if (langMatch) {
  initialLang = langMatch[1];
} else {
  // If no language prefix is found, redirect to /en/ maintaining the rest of the path
  initialLang = 'en';
  const cleanPath = path === '/' ? '' : path;
  window.history.replaceState(null, '', `/en${cleanPath}${window.location.hash}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={`/${initialLang}`}>
      <App initialLang={initialLang as 'en' | 'zh'} />
    </BrowserRouter>
  </StrictMode>,
);
