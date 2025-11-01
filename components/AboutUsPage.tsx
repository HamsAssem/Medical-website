
import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-600 to-indigo-600">
        <img 
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80" 
          alt="Pure Health - Scientific research" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center px-4">
              About Pure Health
            </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {COMPANY_DETAILS.mission}
            </p>

            <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-gray-700">
                  <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-blue-600 mb-2">Address</h4>
                      <p className="text-sm sm:text-base">{COMPANY_DETAILS.address}</p>
                  </div>
                   <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-blue-600 mb-2">Email</h4>
                      <p className="text-sm sm:text-base break-words">
                        <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-blue-600 transition-colors">
                          {COMPANY_DETAILS.email}
                        </a>
                      </p>
                      <h4 className="font-semibold text-blue-600 mt-4 mb-2">Phone</h4>
                      <p className="text-sm sm:text-base">
                        <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-blue-600 transition-colors">
                          {COMPANY_DETAILS.phone}
                        </a>
                      </p>
                  </div>
              </div>
            </div>

            <div className="mt-12 p-6 sm:p-8 bg-white rounded-xl border border-gray-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                At Pure Health, we understand that reproductive health is a deeply personal journey. That's why we are committed to providing products that meet the highest standards of quality and safety.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                <li>All products manufactured in FDA-compliant facilities in the USA</li>
                <li>Rigorous quality testing and third-party verification</li>
                <li>Evidence-based formulations backed by scientific research</li>
                <li>Premium natural ingredients ethically sourced</li>
                <li>Comprehensive ingredient transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
   