"use client";
import "../../app/globals.css";
import "../../app/page.module.css";

const Wishlist = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      Wishlist (this is protected route, only logged in users can access it)
    </div>
  );
};

export default Wishlist;
