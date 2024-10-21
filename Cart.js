import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

export default function Cart({ recommendations, isLoading }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Reset cart items when new recommendations are received
    setCartItems([]);
  }, [recommendations]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { name: item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((i) =>
          i.name === item ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.name !== item);
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
        <ShoppingCart className="mr-2" />
        Recommended Treatments
      </h2>
      {isLoading ? (
        <p className="text-gray-600">Loading recommendations...</p>
      ) : recommendations.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {recommendations.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-800">{item}</span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => removeFromCart(item)} className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-semibold">
                    {cartItems.find((i) => i.name === item)?.quantity || 0}
                  </span>
                  <button onClick={() => addToCart(item)} className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Your Cart</h3>
            {cartItems.length > 0 ? (
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Your cart is empty</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No recommendations available. Please upload a document for analysis.</p>
      )}
    </div>
  );
}
