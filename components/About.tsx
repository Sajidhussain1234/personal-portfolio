"use client";

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px] mt-[78px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I am a certified MERN Stack developer with training from Nexusberry
          Training and Solutions, including a 6-month intensive program and a
          3-month internship. I currently work as a ReactJS developer at
          LEADconcept Solutions, accumulating 1.5 years of professional
          experience.
          <br />
          <br />
          My academic background includes MCS degree from Islamia University
          Bahawalpur, Bahawalnagar Campus, and MSCS degree from Riphah
          International University, Islamabad Lahore Campus.
        </p>
      </div>
    </section>
  );
};

export default About;
