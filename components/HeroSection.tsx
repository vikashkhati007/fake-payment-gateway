"use client";
import React from "react";
import Card from "./Card";
import { HoverBorderGradientDemo } from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full max-h-screen flex flex-col-reverse lg:flex-row justify-around items-center bg-gradient-to-l from-[#1E201E] to-black p-4 py-20">
      <div className="title space-y-5 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Welcome to <br />
          Fake Payment Gateway
        </h1>
        <div className="flex justify-center lg:justify-start">
          <HoverBorderGradientDemo />
        </div>
      </div>
      <div className="titleimage mb-8 lg:mb-0">
        <Card />
      </div>
    </div>
  );
};

export default HeroSection;
