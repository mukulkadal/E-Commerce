/* eslint-disable no-unused-vars */
import React from "react";
import Hero_img from "../assets/images/Hero_img.png";
import Vector_img from "../assets/images/Vector.png";
import Vector_img01 from "../assets/images/Vector1.png";
import Vector_img02 from "../assets/images/Vector2.png";
import Vector_img03 from "../assets/images/Vector3.png";
import Vector_img04 from "../assets/images/gucci.png";

function Hero_section() {
  return (
    <>
      <div className="w-full bg-[#f2f0f1] h-auto mt-20">
        <div className="grid max-w-[1240px] items-center mx-auto sm:grid grid-cols-1 md:grid-cols-2">
          <div className=" items-center">
            <div className="px-2 xl:px-0">
              <h2 className=" font-bold pb-4 mt-12 md:mt-0  text-4xl w-80 sm:w-[610px] lg:pb-7 xl:text-[64px] xl:leading-[70px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>
              <p className=" text-sm sm:lg: xl:text-lg  pb-4 lg:pb-7">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="w-full md:w-36 lg:w-52 bg-black text-white py-2 mb-8 rounded-full">
                Shop Now
              </button>
            </div>
            <div className=" flex flex-wrap justify-center gap-1  lg:gap-6 lg:flex-nowrap md:justify-start">
              <div className="border-r-2 border-gray-500 px-2 xl:px-">
                <h3 className=" md:text-lg lg:text-4xl font-bold">200+</h3>
                <p className=" text-[10px] lg:text-sm text-gray-500">International Brands</p>
              </div>
              <div className="border-r-2 border-gray-500 px-2  xl:px-5">
                <h3 className="md:text-xl lg:text-4xl font-bold">2,000+</h3>
                <p className="text-[10px]  lg:text-sm text-gray-500">High-Quality Products</p>
              </div>
              <div className="px-2 lg:px-0">
                <h3 className="md:text-xl lg:text-4xl font-bold">30,000+</h3>
                <p className="text-[10px]  lg:text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className=" w-full  flex justify-end pt-6">
            <img src={Hero_img} alt="Hero Image" className="xl:object-contain lg:object-contain  max-w-full md:h-[400px] lg:h-[400px] xl:h-[560px]" />
          </div>
        </div>
      </div>

<div className="bg-black w-full">
<div className="max-w-[1240px] mx-auto">
  <div className=" flex flex-wrap justify-center gap-8  py-10  md:py-8 md:px-1 md:gap-24 lg:flex-nowrap lg:gap-8 lg:justify-between ">
        <img src={Vector_img} alt="" className=" object-contain  w-20 lg:w-40" />
        <img src={Vector_img01} alt="" className="object-contain w-10 lg:w-20 " />
        <img src={Vector_img02} alt="" className="object-contain w-20 lg:w-40" />
        <img src={Vector_img03} alt="" className="object-contain w-20 lg:w-40" />
        <img src={Vector_img04} alt="" className="object-contain w-20 lg:w-40" />
      </div>
  </div>
</div>
 
    </>
  );
}

export default Hero_section;
