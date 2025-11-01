import React, { useState } from 'react';
import type { Product, Page } from '../types';
import { Button } from './Button';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { HeartIcon } from './icons/HeartIcon';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigate: (page: Page) => void;
  onToggleWishlist: (productId: number) => void;
  wishlist: number[];
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart, onNavigate, onToggleWishlist, wishlist }) => {
    const [quantity, setQuantity] = useState(1);
    const isInWishlist = wishlist.includes(product.id);

    const handleQuantityChange = (amount: number) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };
    
    const handleAddToCartClick = () => {
        onAddToCart(product, quantity);
    };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-8">
        <button onClick={() => onNavigate('home')} className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <ChevronLeftIcon />
            Back to Products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden shadow-lg relative">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 hidden has-[:not([style*='display: none'])]:hidden">
            <div className="text-center p-8">
              <p className="text-blue-700 font-semibold text-2xl mb-2">{product.name}</p>
              <p className="text-blue-500 text-sm">Please add product image</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-lg text-gray-500">{product.tagline}</p>
          <p className="mt-4 text-3xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">{product.details}</p>
          
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900">Key Ingredients</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                {product.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-4">
             <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
             </div>
            <Button onClick={handleAddToCartClick} variant="primary" className="flex-grow">
              Add to Cart
            </Button>
            <button onClick={() => onToggleWishlist(product.id)} className={`p-3 border rounded-md transition-colors ${isInWishlist ? 'bg-red-100 border-red-200 text-red-500' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
                <HeartIcon filled={isInWishlist} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
