import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductPage } from './components/ProductPage';
import { AboutUsPage } from './components/AboutUsPage';
import { CartPage } from './components/CartPage';
import { WishlistPage } from './components/WishlistPage';
import { CheckoutPage } from './components/CheckoutPage';
import { PRODUCTS } from './constants';
import type { Page, Product, CartItem } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]); // Store product IDs
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  useEffect(() => {
    try {
        const storedWishlist = localStorage.getItem('hamosaWishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    } catch (error) {
        console.error("Failed to parse wishlist from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hamosaWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleNavigate = useCallback((newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  }, []);

  const handleViewProduct = useCallback((productId: number) => {
    setSelectedProductId(productId);
    handleNavigate('product');
  }, [handleNavigate]);

  const handleAddToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  }, []);

  const handleUpdateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
        handleRemoveFromCart(productId);
    } else {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    }
  }, []);

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const handleToggleWishlist = useCallback((productId: number) => {
    setWishlist(prevWishlist => 
        prevWishlist.includes(productId) 
        ? prevWishlist.filter(id => id !== productId) 
        : [...prevWishlist, productId]
    );
  }, []);

  const selectedProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId),
    [selectedProductId]
  );
  
  const cartItemCount = useMemo(() => 
    cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage products={PRODUCTS} onAddToCart={handleAddToCart} onViewProduct={handleViewProduct} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} />;
      case 'product':
        return selectedProduct ? <ProductPage product={selectedProduct} onAddToCart={handleAddToCart} onNavigate={handleNavigate} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} /> : <HomePage products={PRODUCTS} onAddToCart={handleAddToCart} onViewProduct={handleViewProduct} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} />;
      case 'about':
        return <AboutUsPage />;
      case 'cart':
        return <CartPage cartItems={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveFromCart={handleRemoveFromCart} onNavigate={handleNavigate} />;
      case 'wishlist':
        return <WishlistPage allProducts={PRODUCTS} wishlistProductIds={wishlist} onToggleWishlist={handleToggleWishlist} onAddToCart={handleAddToCart} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage cartItems={cart} onNavigate={handleNavigate} />;
      default:
        return <HomePage products={PRODUCTS} onAddToCart={handleAddToCart} onViewProduct={handleViewProduct} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col text-gray-800">
      <Header onNavigate={handleNavigate} cartItemCount={cartItemCount} wishlistItemCount={wishlist.length} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
