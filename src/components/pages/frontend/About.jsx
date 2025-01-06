import { imgPath } from "@/helpers/functions-general";
import React from "react";
import Header from "./Header";

import Banner from "../Banner";
import Footer from "./Footer";
import Certificate from "./Certificate";

const About = () => {
  return (
    <>
      <Header />
      <Banner />
      <Certificate />

      <div className="container py-10">
        <p className="text-black font-semibold text-[30px]">
          {" "}
          My Recent Project
        </p>
        <div className=" grid grid-cols-2 pt-10 text-black ">
          <div>
            {" "}
            <p className="text-[30px] font-semibold">TravelMate</p>
            <p>Slider</p>
          </div>
          <div>
            {" "}
            <p className="text-[30px] font-semibold">Classroom Escape Runner</p>
            <p>Slider</p>
          </div>
        </div>
      </div>

      <div className="container py-10 text-center text-[20px]">
        <p className="text-black font-bold text-[30px]">My Hobbies</p>
        <p className="text-black">Slider</p>
      </div>

      <div className="py-[20px]">
        <div className="flex gap-5 flex-col center-all bg-gray-800 text-white  py-[20px] text-[20px]">
          <p>Feel free to talk About your Projects</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quibusdam?
          </p>
          <button className="btn btn-add center-all ">Send Message</button>
        </div>
      </div>

      <div className="grid grid-cols-2 text-[20px] py-10  bg-gray-800 center-all gap-10">
        <div>
          <p className="font-bold text-[30px] pb-10">Web Development</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            impedit.
          </p>
        </div>

        <div>
          <p className="font-bold text-[30px] pb-10">Programming Languange</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            earum.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
