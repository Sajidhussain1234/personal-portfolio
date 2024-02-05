"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[92px] bg-['#111'] fixed backdrop-blur-sm z-50 px-12">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.png"
            alt="logo"
            width={37}
            height={37}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex flex-row gap-1">
          <div          
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Home
          </div>
          <div
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            About
          </div>
          <div
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Experience
          </div>
          <div
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Projects
          </div>
          <div
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Education
          </div>
        
          <a
          href="https://drive.google.com/file/d/1eZw4fFgWLQ8-yWdEjynJc_OO3iqMWGAM/view?usp=drive_link"
          type= "link"
          target="_blank"
          className="h-auto w-auto flex flex-row items-center"
        >
         <div
            // onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
             Resume     
          </div>
        </a>
          <div
            onClick={() => window.open("mailto:dev.sajidhussain7@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
