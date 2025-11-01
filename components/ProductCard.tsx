import React from 'react';
import type { Product } from '../types';
import { Button } from './Button';
import { HeartIcon } from './icons/HeartIcon';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onViewProduct: () => void;
  onToggleWishlist: () => void;
  isInWishlist: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewProduct, onToggleWishlist, isInWishlist }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 relative">
           <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Hide broken image and show placeholder
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
           />
           <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="text-center p-4">
               <p className="text-blue-700 font-semibold text-lg">{product.name}</p>
             </div>
           </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }} 
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-2 transition-colors text-gray-600 hover:text-red-500"
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon filled={isInWishlist} />
        </button>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500">{product.tagline}</p>
        <p className="mt-4 text-lg font-medium text-blue-600">${product.price.toFixed(2)}</p>
        <div className="mt-6 pt-6 border-t border-gray-200 flex-grow flex items-end">
            <div className="flex space-x-3 w-full">
                <Button onClick={onViewProduct} variant="secondary" className="w-1/2">View Details</Button>
                <Button onClick={onAddToCart} variant="primary" className="w-1/2">Add to Cart</Button>
            </div>
        </div>
      </div>
    </div>
  );
};
