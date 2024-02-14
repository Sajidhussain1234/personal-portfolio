"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-['#111'] fixed backdrop-blur-sm z-50">
      <div className="max-w-screen-lg px-4 md:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="logo"
              width={37}
              height={37}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
          <div className="hidden md:flex gap-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#project">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <MobileMenuLink href="#home">Home</MobileMenuLink>
            <MobileMenuLink href="#about">About</MobileMenuLink>
            <MobileMenuLink href="#experience">Experience</MobileMenuLink>
            <MobileMenuLink href="#project">Projects</MobileMenuLink>
            <MobileMenuLink href="#education">Education</MobileMenuLink>
            <MobileMenuLink href="#contact">Contact</MobileMenuLink>
          </div>
        )}
      </div>
    </div>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const MobileMenuLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="block px-3 py-2 text-sm font-normal text-white hover:bg-gray-800 rounded-md"
  >
    {children}
  </a>
);

export default Navbar;
