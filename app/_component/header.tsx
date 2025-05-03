"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

function Header() {
  const { user } = useUser();
  const [isSignInPage, setIsSignInPage] = useState(false);

  useEffect(() => {
    // This code runs only in the browser
    setIsSignInPage(window.location.pathname.includes("sign-in"));
  }, []);

  if (isSignInPage) return null;

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> About </a></li>
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> Careers </a></li>
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> History </a></li>
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> Services </a></li>
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> Projects </a></li>
              <li><a className="text-gray-500 hover:text-gray-500/75" href="#"> Blog </a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/sign-in"
                >
                  Login
                </a>
                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  href="/"
                >
                  Register
                </a>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <h2 className="flex gap-1 cursor-pointer">
                  <ShoppingCart onClick={() => {}} />
                  (5)
                </h2>
                <UserButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
