import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap the app with HelmetProvider */}
      <App />
    </HelmetProvider>
  </StrictMode>
);
