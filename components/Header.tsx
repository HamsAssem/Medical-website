import React from 'react';
import { CartIcon } from './icons/CartIcon';
import { HeartIcon } from './icons/HeartIcon';
import type { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  cartItemCount: number;
  wishlistItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, cartItemCount, wishlistItemCount }) => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
              Pure Health
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Home</button>
            <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">About Us</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('wishlist')} className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2">
              <HeartIcon />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {wishlistItemCount}
                </span>
              )}
            </button>
            <button onClick={() => onNavigate('cart')} className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2">
              <CartIcon />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
