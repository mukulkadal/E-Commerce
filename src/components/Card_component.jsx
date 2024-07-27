/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import image01 from "../assets/images/image01.png";
import image02 from "../assets/images/image02.png";
import image03 from "../assets/images/image03.png";
import image04 from "../assets/images/image04.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import axios from "axios";
import { data } from "autoprefixer";

function Card_component() {


  return (
    <>
      <div className="w-full h-auto">
        <div className="max-w-[1240px] mx-auto h-auto py-10 xl:py-16 px-3 md:px-6">
          <h2 className=" text-center text-3xl lg:text-5xl font-bold">NEW ARRIVALS</h2>

          <div className=" lg:grid lg:grid-cols-4 grid grid-cols-2 gap-3 xl:gap-10 mt-12">
      
            <div className="col-span-1">
              <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={image01} alt="" className="w-[295px] h-[298px]  md:px-0" />
              </div>
              <div>
                <h2 className=" text-md  sm:text-lg  xl:text-xl font-bold mt-4">
                  T-SHIRT WITH TAPE DETAILS
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm ">
                    4.5/ <span className="text-gray-500">5</span>
                  </p>
                </div>
                <div>
                  <h2 className=" text-md  sm:text-lg xl:text-2xl font-bold">$120</h2>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={image02} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                SKINNY FIT JEANS
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                  3.5/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$240 <s className="text-gray-500 text-md  sm:text-lg">$260</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-20%</span></h2> 

                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={image03} alt="" className="w-[295px] h-[298px]"  />
              </div>
              <div>
                <h2 className="text-md  sm:text-lg xl:text-xl font-bold mt-4">
                CHECKERED SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                    4.5/ <span className="text-gray-500">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className="text-md  sm:text-lg xl:text-2xl font-bold">$180</h2>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={image04} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className="text-md  sm:text-lg xl:text-xl font-bold mt-4">
                SLEEVE STRIPED T-SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                    4.5/ <span className="text-gray-500">5</span>{" "}
                  </p>
                </div>
                <div>
                <h2 className="text-md sm:text-lg xl:text-2xl  flex gap-2  font-bold">$130<s className="text-gray-500 text-md  sm:text-xl">$160</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-30%</span></h2> 
                </div>
              </div>
            </div>
          </div>

          <h2 className=" w-48 py-3 rounded-full m-auto text-center text-md   text-gray-800  border mt-10">View All</h2>

        </div>
      </div>
      {/* <div>
        {photos?.map((photo) => (
          <div className="bg-slate-900 flex flex-row-1">
        <div className=" w-[200px]">
          <img key={photo.id} src={photo.image} className="w-[200px] mb-5" alt="" />
        </div>
        </div>
        ))}
      </div> */}
    </>
  );
}

export default Card_component;
