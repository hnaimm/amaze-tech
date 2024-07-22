"use client";

import "../../globals.css";
import "../../page.module.css";
import ProductCard from "../../ui/ProductCard";
import "./ProductItemPage.css";

const ProductItemPage = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-[#1f1f1f] mt-20 mb-12">Product Item Page</h1>
      <ProductCard
        id="1"
        name="Wireless Keyboard"
        price="$300.00"
        image={"/13.jpg"}
        badgeProps={{ text: "Featured", color: "gray" }}
      />
    </div>
  );
};

export default ProductItemPage;
