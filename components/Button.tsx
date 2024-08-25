"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { CreditCard } from "lucide-react";
import { signIn } from "next-auth/react";
export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
      onClick={()=> signIn()}
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <CreditCard/>
        <span>Create Account</span>
      </HoverBorderGradient>
    </div>
  );
}
