import React from "react";
import RoundedRectangleButton from "../../../ui/RoundedRectangleButton";

const SubsrcribeSection = () => {
  return (
    <div className="rounded-3xl flex flex-row justify-between bg-[#1f1f1f] py-8 px-12">
      <div className="flex flex-col justify-center w-full sm:w-2/3 md:w-1/2">
        <h3 className="text-white font-normal text-5xl">
          Stay Updated on Latest Products
        </h3>
        <p className="mt-6 text-white font-thin">
          Never miss a beat and stay up to date with new product arrivals and
          promotions
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-2">
          <RoundedRectangleButton
            color="white"
            backgroundColor="#292929"
            className="cursor-text w-full sm:w-72 text-left"
          >
            Enter you email
          </RoundedRectangleButton>
          <RoundedRectangleButton color="white" backgroundColor="#ef233c">
            Subscribe
          </RoundedRectangleButton>
        </div>
      </div>

      <img
        alt={"subscribe-image"}
        src={"/5.jpg"}
        className="hidden md:inline-block rounded-3xl w-[320px] h-[450px]"
      />
    </div>
  );
};

export default SubsrcribeSection;
