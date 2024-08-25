import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = DM_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="w-full p-4">
      <div className="mainitem flex w-full justify-center items-center">
        <div
          className={cn(
            inter,
            " w-full max-w-[90%] md:max-w-[60%] lg:max-w-[40%] h-12 border rounded-full flex justify-center items-center text-center px-4"
          )}
        >
          Integrate This Fake Payment Gateway to Your Demo Projects ⭐
        </div>
      </div>
    </footer>
  );
};

export default Footer;
