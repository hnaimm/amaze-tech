"use client";

import { useState } from "react";
import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar";
import "../../globals.css";
import "../../page.module.css";
import ProductCard from "../../ui/ProductCard";
import "./ProductsPage.css";

const productsList = [
  {
    id: "1",
    name: "Sony Headphones",
    price: "$10.00",
    priceInt: 10,
    size: 2,
    image: "/13.jpg",
  },
  {
    id: "2",
    name: "Black Mouse",
    price: "$20.00",
    priceInt: 20,
    size: 1,
    image: "/7.jpg",
  },
  {
    id: "3",
    name: "Wireless Mic",
    price: "$30.00",
    priceInt: 30,
    size: 3,
    image: "/2.jpg",
  },
  {
    id: "4",
    name: "Gaming Mouse",
    price: "$40.00",
    priceInt: 40,
    size: 100,
    image: "/8.jpg",
  },
  {
    id: "5",
    name: "Wired Mic",
    price: "$50.00",
    priceInt: 50,
    size: 0,
    image: "/14.jpg",
  },
  {
    id: "6",
    name: "Keyboard",
    price: "$60.00",
    priceInt: 60,
    size: 7,
    image: "/10.jpg",
  },
];

const filters = [
  { title: "Price: Descending", name: "dateDesc" },
  { title: "Price: Ascending", name: "dateAsc" },
  { title: "Size", name: "size" },
  { title: "Newest", name: "new" },
];

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState("dateDesc"); //dateAsc | dateDesc | color | size

  if (sortBy === "dateAsc") {
    productsList.sort((a, b) => a.priceInt - b.priceInt);
  } else if (sortBy === "dateDesc") {
    productsList.sort((a, b) => b.priceInt - a.priceInt);
  } else if (sortBy === "size") {
    productsList.sort((a, b) => a.size - b.size);
  }

  return (
    <div className="pt-4 home-page flex flex-col min-h-[100vh]">
      <div className="px-0 md:px-[5%] lg:px-[10%]">
        <Navbar />
      </div>
      <section
        id="home"
        className="px-0 md:px-[5%] lg:px-[10%] pb-6 flex flex-col justify-center items-center flex-1"
      >
        <h1 className="text-6xl text-[#1f1f1f] mt-12 mb-12">Our Products</h1>
        <div className="flex flex-row justify-center gap-12 mb-12 text-lg items-center">
          <span>Sort By: </span>
          {filters.map((filter) => (
            <button
              className={`px-3 py-2 rounded-xl bg-white`}
              style={{
                border: "solid #cdcdcd",
                borderWidth: filter.name === sortBy ? "3px" : "1px",
              }}
              onClick={() => setSortBy(filter.name)}
            >
              {filter.title}
            </button>
          ))}
        </div>

        <div className="flex flex-row gap-3 justify-around">
          {productsList.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              badgeProps={{ text: "Featured", color: "gray" }}
            />
          ))}
        </div>
        <div className="flex flex-row gap-3 justify-around pt-20 pb-20">
          {productsList.slice(3, 6).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              badgeProps={{ text: "Featured", color: "gray" }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
