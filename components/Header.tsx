import { Github, House, Info } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className=" w-full h-10">
      <div className="bg-black w-full h-6 border-b">
        <div className="mainitem flex justify-center">
          <nav className="bg-black w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] h-12 font-semibold border-b rounded-full flex justify-center items-center gap-4 sm:gap-6 md:gap-10 px-4">
            <div className="flex justify-center items-center gap-1 hover:scale-105">
              <House width={20} height={20} />
              <a href="/" className="text-white">Home</a>
            </div>
            <div className="flex justify-center items-center gap-1 hover:scale-105">
              <Info width={20} height={20} />
              <a href="/" className="text-white">About</a>
            </div>
            <div className="flex justify-center items-center gap-1 hover:scale-105">
              <Github width={20} height={20} />
              <a href="/" className="text-white">Github</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
