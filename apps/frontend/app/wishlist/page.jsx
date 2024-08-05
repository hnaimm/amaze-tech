"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import Navbar from "../components/Common/Navbar";
import "../../app/page.module.css";
import "../../app/globals.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Wireless Keyboard", price: 10, image: "/13.jpg" },
    { id: 2, name: "Airpods", price: 20, image: "/7.jpg" },
    { id: 3, name: "Speakers", price: 30, image: "/2.jpg" },
  ]);

  const removeFromWishlist = (id) => {
    toast.success("Item removed from wishlist");
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const total = wishlist.reduce((acc, item) => acc + item.price, 0);

  return (
    <ProtectedRoute>
      <div className="min-h-screen px-0 md:px-[5%] lg:px-[10%]">
        <div className="">
          <Navbar />
        </div>

        <h1 className="mt-32 text-3xl font-bold mb-4">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-end items-center p-4 border-t">
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Wishlist;
