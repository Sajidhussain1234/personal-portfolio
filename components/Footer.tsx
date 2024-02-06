"use client";

import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section
      id="contact"
      className=" container mx-auto 2xl pt-[50px] pb-8 mt-[78px] "
    >
      <div className="pb-10 flex justify-center ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Created with ❤️ using Next.js
      </p>
    </section>
  );
};

export default Footer;
