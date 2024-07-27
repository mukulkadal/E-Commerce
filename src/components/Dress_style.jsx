/* eslint-disable no-unused-vars */
import React from "react";
import image09 from "../assets/images/image09.png";
import image13 from "../assets/images/image13.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import party_img from "../assets/images/party_img.png";
import gym from "../assets/images/gym.png";
import casual from "../assets/images/casual.png";
import formal from "../assets/images/formal.png";

function Dress_style() {
  return (
    <>
      <div className="w-full h-auto mx-auto">
        <div className="max-w-[1240px] bg-[#F0F0F0]   mx-auto h-auto py-16 px-5 lg:px-10  rounded-3xl">
          <h2 className="font-bold text-4xl text-center ">
            BROWSE BY DRESS STYLE
          </h2>

          <div className=" w-12/12 sm:flex  sm:justify-center sm:gap-8  mt-12 ">
            <div className="sm:w-5/12 w-full">
              <img src={casual} alt="" className="rounded-xl h-80 w-full mb-5 sm:mb-0 " />
            </div>
            <div className="sm:w-7/12 w-full" >
              <img
                src={formal}
                alt=""
                className="w-full rounded-xl h-80 "
              />
            </div>
          </div>
          <div className=" w-12/12 sm:flex  sm:justify-center sm:gap-8 mt-5 sm:mt-8 ">
            <div className="sm:w-7/12 w-full mb-5 sm:mb-0" >
              <img
                src={party_img}
                alt=""
                className="w-full rounded-xl h-80 "
              />
            </div>
            <div className="sm:w-5/12 w-full">
              <img src={gym} alt="" className="rounded-xl h-80 w-full  " />
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Dress_style;
