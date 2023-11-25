import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/../public/images/banner.jpg";

function Hero() {
  return (
    <div className="mt-[30px] items-center px-[12px] md:px-[36px] lg:flex xl:px-0">
      <div className="mb-[80px] lg:w-[70%]">
        <span className="font-chivo mb-[29px] inline-block rounded-[50px] bg-green-900 px-[28px] py-[14px] text-[14px] leading-[14px] text-white">
          Digital Marketing Agency
        </span>
        <h1 className="font-chivo lg:text-display-2 mb-[14px] text-[40px] font-bold leading-[48px] sm:text-[50px] sm:leading-[58px] md:text-[64px] md:leading-[70px]">
          The Fastest way to achieve success
        </h1>
        <p className="text-quote md:text-lead-lg mb-[44px] pr-[40px] text-gray-500 lg:pr-[150px]">
          It was popularised in the 1960s with the release sheets. We bring the
          right people together
        </p>
        <div className="mb-[50px] flex items-center justify-start">
          <button type="button">
            {" "}
            <Link
              className="text-heading-6 group relative z-10 mr-[22px] flex items-center rounded-md bg-[#4e5150] px-[22px] py-[15px] tracking-wide text-white transition-all duration-200 hover:bg-gray-100  hover:text-gray-900 lg:px-[32px] lg:py-[22px]"
              href="#"
            >
              <span className="font-chivo block h-full w-full rounded-md text-lg font-semibold text-inherit">
                Get Started
              </span>
            </Link>
          </button>
          <div className="flex items-center gap-3">
            <a
              className="font-chivo flex items-center gap-[5px] text-[18px] text-base font-medium leading-[18px]"
              href="/"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src={banner}
          alt="bgmain"
          className="h-[400px] w-[100%] rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
