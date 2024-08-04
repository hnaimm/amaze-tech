"use client";

import Image from "next/image";
import Navbar from "../../components/Common/Navbar";
import { IconButton } from "@radix-ui/themes";
import ProductCard from "../../ui/ProductCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import CategoryCard from "../../ui/CategoryCard";
import RoundedRectangleButton from "../../ui/RoundedRectangleButton";
import SubsrcribeSection from "../../components/HomePage/SubsrcribeSection";
import InstagramSection from "../../components/HomePage/InstagramSection";
import Footer from "../../components/Common/Footer";
import "./HomePage.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="pt-4 home-page">
      <div className="px-0 md:px-[5%] lg:px-[10%]">
        <Navbar />
      </div>

      <section
        id="home"
        className="px-0 md:px-[5%] lg:px-[10%] pb-6 flex flex-col justify-center items-center"
      >
        <div className="pt-28">
          <h1 className="text-7xl text-[#1f1f1f] mb-12">
            Redefining Your
            <br />
            Tech Experience
          </h1>
          <div className="relative">
            <Image
              src="/banner-1.jpg"
              width={1300}
              height={300}
              alt="Banner Image"
              className="rounded-3xl"
            />
            <div className="info-box rounded-3xl bg-white px-8  py-6 w-[350px] absolute bottom-0 right-0 text-lg">
              <p className="mb-6">
                At ShiftSmart, we're redefining your tech experience by offering
                the latest & most innovative products.
              </p>
              <Link
                className="bg-[#1f1f1f] rounded-full text-white px-6 py-3"
                href="/products"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="px-0 md:px-[5%] lg:px-[10%] pt-6 pb-6">
        <h1 className="text-6xl text-[#1f1f1f] mt-20 mb-12">
          Featured Products
        </h1>

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
      </section>

      <section
        id="categories"
        className="px-0 md:px-[5%] lg:px-[10%] pt-6 pb-6 bg-[#edf2f4]"
      >
        <div className="mt-20 mb-12 flex flex-row justify-between items-center">
          <h1 className="text-6xl text-[#1f1f1f] ">Shop By Category</h1>
          <div className="flex flex-row gap-4">
            <IconButton className="bg-white" color="ruby">
              <ArrowLeftIcon
                width="18"
                height="18"
                className="cursor-pointer"
              />
            </IconButton>
            <IconButton className="bg-white" color="ruby">
              <ArrowRightIcon
                width="18"
                height="18"
                className="cursor-pointer"
              />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-around">
          <CategoryCard id="1" name="Watches" image={"/13.jpg"} />
          <CategoryCard id="2" name="Screens" image={"/7.jpg"} />
          <CategoryCard id="3" name="Keyboards" image={"/2.jpg"} />
        </div>
      </section>

      <section
        id="collections"
        className="px-0 md:px-[5%] lg:px-[10%] pt-6 pb-6"
      >
        <div className="mt-20 mb-12 flex flex-row justify-between items-center">
          <h1 className="text-6xl text-[#1f1f1f]">Explore Collections</h1>
          <RoundedRectangleButton>Browse All Products</RoundedRectangleButton>
        </div>
        <div className="flex flex-row gap-3 justify-around">
          <ProductCard
            id="1"
            image={"/13.jpg"}
            badgeProps={{ text: "Watch", color: "gold" }}
          />
          <ProductCard
            id="2"
            image={"/7.jpg"}
            badgeProps={{ text: "Headset", color: "gold" }}
          />
          <ProductCard
            id="3"
            image={"/2.jpg"}
            badgeProps={{ text: "Camera", color: "gold" }}
          />
        </div>
        <div className="flex flex-row gap-3 justify-around mt-6">
          <ProductCard
            id="1"
            image={"/13.jpg"}
            badgeProps={{ text: "Audio", color: "gold" }}
          />
          <ProductCard
            id="2"
            image={"/7.jpg"}
            badgeProps={{ text: "Accessory", color: "gold" }}
          />
          <ProductCard
            id="3"
            image={"/2.jpg"}
            badgeProps={{ text: "Keyboard", color: "gold" }}
          />
        </div>
      </section>

      <section id="subscribe" className="px-0 md:px-[5%] lg:px-[10%] pt-6 pb-6">
        <SubsrcribeSection />
      </section>

      <section id="instagram" className="px-0 md:px-[5%] lg:px-[10%] pt-6 pb-6">
        <InstagramSection />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
