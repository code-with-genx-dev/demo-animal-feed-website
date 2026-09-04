import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { Home } from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Accessible skip link */}
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-emerald-800 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Header & Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <Home />

      {/* Complete Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
