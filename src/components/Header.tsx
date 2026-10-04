
import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import HeadlineMarquee from "./HeadlineMarquee";

const Header = () => {
  const date = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="border-b bg-base-100">
      <div className="flex justify-between items-center navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo + Website Name */}
        <div className="flex items-center gap-3">
          <Image
            className="object-contain"
            src="/logo.webp"
            height={60}
            width={60}
            alt="Bangla Bulletin Logo"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold sm:text-2xl">Bangla News 24</h1>

            <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
              {date}
            </p>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="ml-auto">
          <div className="flex items-center gap-2">
            <button className="cursor-pointer hover:text-red-500 m-2 p-2 btn btn-ghost btn-sm sm:btn-md">
              সাইন ইন
            </button>

            <button
              className="
                                btn btn-sm sm:btn-md
                                border-0
                                bg-amber-800
                                text-white
                                transition-all duration-300
                                hover:scale-105
                                hover:from-orange-500
                                hover:to-black
                                m-2
                                p-2
                                cursor-pointer
                            "
            >
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
       <NavLinks/>
       <HeadlineMarquee/>
    </header>

   
  );
};

export default Header;
