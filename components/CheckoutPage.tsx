import React from 'react';
import type { CartItem, Page } from '../types';
import { Button } from './Button';
import { CreditCardIcon } from './icons/CreditCardIcon';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onNavigate: (page: Page) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onNavigate }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + shippingFee;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Checkout</h1>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Payment Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Payment Information</h2>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCardIcon />
                  </div>
                  <input type="text" id="card-number" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="0000 0000 0000 0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                  <input type="text" id="expiration-date" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="MM / YY" />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                  <input type="text" id="cvc" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="123" />
                </div>
              </div>
              <div>
                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input type="text" id="name-on-card" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="John Doe" />
              </div>
              <Button onClick={(e) => {e.preventDefault(); alert("Thank you for your order!"); onNavigate('home')}} variant="primary" className="w-full">
                Pay ${total.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900">Order Summary</h2>
              <ul className="mt-6 divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                        <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="text-sm font-medium text-gray-900">${shippingFee.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between text-lg font-semibold">
                      <p className="text-gray-900">Total</p>
                      <p className="text-blue-600">${total.toFixed(2)}</p>
                  </div>
              </div>
            </div>
            <button onClick={() => onNavigate('cart')} className="mt-6 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              &larr; Return to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
