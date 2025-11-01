import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';
import { Button } from './Button';
import { WHY_HAMOSA } from '../constants';
import { ScienceIcon } from './icons/ScienceIcon';
import { LeafIcon } from './icons/LeafIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onViewProduct: (productId: number) => void;
  onToggleWishlist: (productId: number) => void;
  wishlist: number[];
}

const iconMap: { [key: string]: React.FC } = {
    Science: ScienceIcon,
    Leaf: LeafIcon,
    ShieldCheck: ShieldCheckIcon,
};

export const HomePage: React.FC<HomePageProps> = ({ products, onAddToCart, onViewProduct, onToggleWishlist, wishlist }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] py-16 lg:py-24">
                <div className="text-center lg:text-left text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        Supporting Your Fertility Journey
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-blue-50 leading-relaxed">
                        Scientifically-formulated supplements designed to support reproductive health for both men and women. Trust Pure Health for evidence-based fertility solutions.
                    </p>
                    <div className="mt-8 sm:mt-10 flex gap-4 justify-center lg:justify-start">
                        <Button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg">
                          Shop Products
                        </Button>
                    </div>
                </div>
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" 
                      alt="Pure Health - Supporting Your Family Journey" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium fertility supplements formulated with scientifically-proven ingredients
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => onAddToCart(product)}
                onViewProduct={() => onViewProduct(product.id)}
                onToggleWishlist={() => onToggleWishlist(product.id)}
                isInWishlist={wishlist.includes(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Pure Health?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We are committed to the highest standards of quality, safety, and scientific excellence.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {WHY_HAMOSA.map(item => {
                    const Icon = iconMap[item.icon];
                    return (
                        <div key={item.title} className="text-center bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center justify-center h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white mx-auto shadow-lg">
                                <Icon />
                            </div>
                            <h3 className="mt-6 text-xl lg:text-2xl font-semibold text-gray-900">{item.title}</h3>
                            <p className="mt-3 lg:mt-4 text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>
    </div>
  );
};
