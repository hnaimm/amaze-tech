"use client";

import "../../globals.css";
import "../../page.module.css";
import ProductCard from "../../ui/ProductCard";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="">
      <h1 className="text-6xl text-[#1f1f1f] mt-20 mb-12">Products Page</h1>

      <div className="flex flex-row gap-3 justify-around">
        <ProductCard
          id="1"
          name="Wireless Keyboard"
          price="$300.00"
          image={"/13.jpg"}
          badgeProps={{ text: "Featured", color: "gray" }}
        />
        <ProductCard
          id="2"
          name="Wireless Keyboard"
          price="$300.00"
          image={"/7.jpg"}
          badgeProps={{ text: "Featured", color: "gray" }}
        />
        <ProductCard
          id="3"
          name="Wireless Keyboard"
          price="$300.00"
          image={"/2.jpg"}
          badgeProps={{ text: "Featured", color: "gray" }}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
