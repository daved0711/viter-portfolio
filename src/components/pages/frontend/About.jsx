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
      <div className="School ">
        <div className="container">
          <p className="text-black py-10 font-bold text-[30px]">School That I commited</p>
          <div className="text-black justify-between py-10 text-center  grid grid-cols-4 gap-10 center-all ">
            
            <div>
              {" "}
              <p>Elementary</p>
              <img src={`${imgPath}/bses.jpg`} alt="" />
            </div>
            <div>
              <p>HighSchool</p>
              <img src={`${imgPath}/twa.jpg`} alt="" />
            </div>
            <div>
              {" "}
              <p>SeniorHighSchool</p>
              <img src={`${imgPath}/twa.jpg`} alt=""/>
            </div>
            <div>
              <p>College</p>
              <img src={`${imgPath}/lspu.png`} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>

      <div className="bg-gray-800">
        <div className="container">
          <p className="py-10 text-[30px] font-semibold">Skills</p>
          <div className="grid grid-cols-2 text-[20px] py-10 ">
          
            <div className="">
              <p className="font-bold text-[30px] pb-10">Web Development</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus, impedit.
              </p>
            </div>

            <div>
              <p className="font-bold text-[30px] pb-10">
                Programming Languange
              </p>
              <p>Basic HTML, TailWind CSS, WordPress, React JS, PHP.</p>
            </div>
          </div>
        </div>
      </div>

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

      {/* <div className="container py-10 text-center text-[20px]">
        <p className="text-black font-bold text-[30px]">My Hobbies</p>
        <p className="text-black">Slider</p>
      </div> */}

      <div className="py-[20px]">
        <div className="flex gap-5 flex-col center-all bg-gray-800 text-white  py-[20px] text-[20px]">
          <p className="text-[30px] font-bold">Feel free to talk About your Projects?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quibusdam?
          </p>
          <button className="btn btn-add center-all ">Send Message</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
