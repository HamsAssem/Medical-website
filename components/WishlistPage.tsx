import React from 'react';
import type { Product, Page } from '../types';
import { Button } from './Button';
import { ProductCard } from './ProductCard';

interface WishlistPageProps {
  allProducts: Product[];
  wishlistProductIds: number[];
  onToggleWishlist: (productId: number) => void;
  onAddToCart: (product: Product) => void;
  onViewProduct: (productId: number) => void;
  onNavigate: (page: Page) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  allProducts,
  wishlistProductIds,
  onToggleWishlist,
  onAddToCart,
  onViewProduct,
  onNavigate
}) => {
  const wishlistItems = allProducts.filter(p => wishlistProductIds.includes(p.id));

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Your Wishlist is Empty</h1>
        <p className="mt-4 text-gray-600">Explore our products and save your favorites.</p>
        <Button onClick={() => onNavigate('home')} variant="primary" className="mt-8">
          Discover Products
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">Your Wishlist</h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => onAddToCart(product)}
              onViewProduct={() => onViewProduct(product.id)}
              onToggleWishlist={() => onToggleWishlist(product.id)}
              isInWishlist={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
