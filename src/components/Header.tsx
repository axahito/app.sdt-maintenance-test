"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const isRequestPage = router.pathname.endsWith("/request");

  return (
    <header className="w-full h-[6.75rem] lg:h-[8.16rem] flex items-end justify-center pb-[14px]">
      <span className="flex items-center w-full lg:w-[46dvw] relative">
        {!isRequestPage && (
          <Link
            href="/request"
            className="text-sdt-text-black mr-auto ml-5 lg:left-[25%] cursor-pointer absolute"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 7H1M1 7L7 1M1 7L7 13"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        )}
        <h1
          className={`font-bold font-inter text-xl text-sdt-text-black mx-auto`}
        >
          Maintenance Request
        </h1>
      </span>
    </header>
  );
};

export default Header;
