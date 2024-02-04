import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="http://108.181.190.64:3012/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/complycoreLogo.png"
                height={150}
                width={150}
                alt="Complycore logo missing"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Comply Core</p>
                <p className="text-gray-500 text-[10px]">
                Web App that meets all the necessary regulations for natural gas operators in the state of Georgia
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="http://108.181.190.64:3016/bill"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image                
                src="/bilbioLogo.png"
                height={150}
                width={150}
                alt="BilBio logo missing"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BilBio</p>
                <p className="text-gray-500 text-[10px]">
                Web App designed for creating personalized user biolink page
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.fashionavia.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/fashionaviaLogo.png"
                height={150}
                width={150}
                alt="Fashionavia logo missing"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Fashionavia
                </p>
                <p className="text-gray-500 text-[10px]">
                Multi Store Web App for online shopping.
                </p>
              </div>
            </div>
          </Link>
          {/* <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/fashonaviaLogo.PNG"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Practice Project</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
