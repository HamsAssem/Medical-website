
import React from 'react';
import { COMPANY_DETAILS } from '../constants';
import type { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white border-t border-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Pure Health
            </h3>
            <p className="mt-3 text-blue-100 text-sm lg:text-base">
              Supporting your fertility journey with science-backed supplements. Empowering couples with evidence-based reproductive health solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><button onClick={() => onNavigate('home')} className="text-sm lg:text-base text-blue-200 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-sm lg:text-base text-blue-200 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('cart')} className="text-sm lg:text-base text-blue-200 hover:text-white transition-colors">Shopping Cart</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-blue-200">
              <li className="break-words">{COMPANY_DETAILS.address}</li>
              <li><a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">{COMPANY_DETAILS.email}</a></li>
              <li><a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">{COMPANY_DETAILS.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Pure Health. All rights reserved. Made in USA.</p>
          <p className="mt-2 text-xs text-blue-400">
            These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};
   