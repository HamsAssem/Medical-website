import React from 'react';
import type { CartItem, Page } from '../types';
import { Button } from './Button';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { TrashIcon } from './icons/TrashIcon';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onNavigate: (page: Page) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onRemoveFromCart, onNavigate }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
        <p className="mt-4 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
        <Button onClick={() => onNavigate('home')} variant="primary" className="mt-8">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
                <section className="lg:col-span-7">
                    <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                        {cartItems.map((item) => (
                        <li key={item.id} className="flex py-6">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="ml-4 flex-1 flex flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-l"><MinusIcon /></button>
                                    <span className="px-3 text-gray-700">{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-r"><PlusIcon /></button>
                                </div>
                                <div className="flex">
                                <button onClick={() => onRemoveFromCart(item.id)} type="button" className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1">
                                    <TrashIcon /> Remove
                                </button>
                                </div>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </section>

                <section className="lg:col-span-5 mt-16 lg:mt-0 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">Subtotal</p>
                            <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <p className="text-sm text-gray-600">Shipping estimate</p>
                            <p className="text-sm font-medium text-gray-900">${shippingFee.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <p className="text-base font-medium text-gray-900">Order total</p>
                            <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button onClick={() => onNavigate('checkout')} variant="primary" className="w-full">
                            Proceed to Checkout
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
};
