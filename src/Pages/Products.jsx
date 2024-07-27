/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TbMathGreater } from "react-icons/tb";
import image15 from "../assets/images/image15.png";
import image16 from "../assets/images/image16.png";
import image17 from "../assets/images/image17.png";
import image18 from "../assets/images/image18.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";
import image20 from "../assets/images/image20.png";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Card_component from "../components/Card_component";
import Footer from "../components/Footer";
function Products() {
  const [Counter, setCounter] = useState(1);
  return (
    <>
      <Navbar />

      <div className=" w-full h-auto p-5 lg:p-10 mt-14">
        <div className="w-full lg:w-[1240px]  m-auto  md:px-2">
          {/* top_heading_icon_section */}

          <div className="flex gap-3 items-center ">
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Hello{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Shop{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Men{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center ">T-shirts</h2>
          </div>

          {/* main_section */}

          <div className=" w-full lg:flex gap-10 lg:justify-start  mt-7 ">
            <div className="flex flex-col-reverse md:flex md:flex-row gap-3">
              {/* side_image_section */}

              <div className="  flex justify-center items-center gap-3  md:flex-col lg:justify-start md:gap-5">
                <div className="w-full md::w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={image15} alt="" />
                </div>

                <div className="w-full md:w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={image16} alt="" />
                </div>

                <div className="w-full md:w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={image17} alt="" />
                </div>
              </div>

              {/* center_image_section */}

              <div className=" w-full lg:w-[550px lg:h-[500px] bg-[#F0EEED] rounded-2xl">
                <img
                  src={image18}
                  alt=""
                  className=" w-full h-[500px] object-contain"
                />
              </div>
            </div>
            {/* right_text_area */}

            <div className="">
              {/* heading */}
              <h2 className="text-3xl  xl:text-4xl font-extrabold uppercase mt-5 lg:mt-2  ">
                One Life Graphic T-shirt
              </h2>
              {/* stars_section */}
              <div className="flex items-cente gap-1 py-1 my-1">
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStarHalf className="text-yellow-500" />
                <p className="text-black text-sm">
                  4.5/ <span className="text-gray-500">5</span>{" "}
                </p>
              </div>
              {/* price_section */}
              <div className="my-1">
                <h2 className="text-md sm:text-lg xl:text-2xl  flex gap-2  font-bold">
                  $260
                  <s className="text-gray-400  text-md  sm:text-2xl">
                    $300
                  </s>{" "}
                  <span className="bg-[#FF33331A] text-[#FF3333] font-light rounded-3xl text-sm px-2 flex items-center">
                    -40%
                  </span>
                </h2>
              </div>
              {/* paragraph_area */}
              <div className="my-3">
                <p className="text-[16px] w-full lg:w-[450px] text-[#00000099] mb-5 lg:mb-2">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
                <p className="border-b border-[#0000001A] my-3"></p>
              </div>
              {/* select_color */}
              <div>
                <p className="my-4">Select Colors</p>
                <div className="flex  gap-3 my-2">
                  <div className=" w-10 h-10 bg-[#4F4631] rounded-full flex justify-center items-center">
                    <MdDone className="text-white" />
                  </div>
                  <div className=" w-10 h-10 bg-[#314F4A] rounded-full flex justify-center items-center"></div>
                  <div className=" w-10 h-10 bg-[#31344F] rounded-full flex justify-center items-center"></div>
                </div>
                <p className="border-b border-[#0000001A] mt-6 lg:mt-3"></p>

                {/* size_section */}

                <h2 className="text-[#00000099] mt-5 text-[16px] mb-4 lg:mb-2">
                  Choose Size
                </h2>
                <div className="flex gap-4 text-center ">
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    Small
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white  py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    Medium
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#fff] hover:text-[#00000099] py-2 text-md bg-[#000] hover:bg-[#F0F0F0] font-light duration-500 ">
                    Large
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    X-Large
                  </div>
                </div>

                <p className="border-t border-[#0000001A] my-5"></p>

                {/* Minas_Plus_section */}

                <div className="flex gap-10 ">
                  <div className="bg-[#F0F0F0] px-3 py-3 gap-7  lg:w-[170px] flex justify-center lg:flex lg:justify-between items-center  rounded-3xl lg:py-3 lg:px-4">
                    <LuMinus
                      className="text-xl"
                      onClick={() => setCounter((Counter) => Counter - 1)}
                    />
                    <p className="text-md">{Counter}</p>
                    <HiPlus
                      className="text-xl"
                      onClick={() => setCounter((Counter) => Counter + 1)}
                    />
                  </div>
                  <button className=" w-96 lg:w-72 xl:w-[400px] hover:bg-[#F0F0F0] bg-black hover:text-black text-white rounded-3xl text-center shadow-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-10 ">
            <div className="grid grid-cols-12  gap-2 md:gap-5 items-center">
              <div className="green-400 col-span-4">
                <h2 className="text-[14px] md:text-lg font-light text-[#00000099] hover:text-black text-center">
                  Product Details
                </h2>
                <p className="border-b border-[#0000001A] hover:border-black"></p>
              </div>
              <div className="green-400 col-span-4 hover:text-[#00000099] text-black">
                <h2 className="text-[14px] md:text-lg font-light  text-center">
                  Rating & Reviews
                </h2>
                <p className="border-b hover:border-[#0000001A] border-black"></p>
              </div>
              <div className="green-400 col-span-4">
                <h2 className="text-[14px] md:text-lg font-light text-[#00000099] hover:text-black text-center">
                  FAQs
                </h2>
                <p className="border-b border-[#0000001A] hover:border-black"></p>
              </div>
            </div>
          </div>

          <div className=" flex justify-between items-center mt-6 px-5 xl:px-0">
            <h2 className="text-xl md:text-2xl">
              All Reviews{" "}
              <span className="text-[14px] md:text-[16px] text-[#00000099]">
                (451)
              </span>{" "}
            </h2>
            <div className="flex gap-2">
              <img
                src={image20}
                alt=""
                className="bg-[#F0F0F0] w-10 p-2 md:w-12 md:h-12 md:p-3 rounded-full object-contain "
              />
              <div className=" hidden md:flex  items-center bg-[#F0F0F0] w-32 justify-center gap-7 py-2  rounded-full  ">
                <h2>Latest</h2>
                <FaAngleDown />
              </div>
              <button className="w-32 md:w-40 px-2 py-2 rounded-full bg-black text-white text-[14px]">
                Write a Review
              </button>
            </div>
          </div>
          {/* 
      <div className="bg-green-400 ">
      <div className="flex items-center w-[50%] justify-between">
  
            
              
          </div>
      

      
          
      </div> */}
          <div className="w-full md:flex items-center gap-4 mt-6 px-5">
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Samantha D.</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 14, 2023
                </p>
              </div>
            </div>
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Alex M.</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "The t-shirt exceeded my expectations! The colors are vibrant
                  and the print quality is top-notch. Being a UI/UX designer
                  myself, I'm quite picky about aesthetics, and this t-shirt
                  definitely gets a thumbs up from me."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 15, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:flex items-center gap-4 mt-6 px-5">
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Ethan R.</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "This t-shirt is a must-have for anyone who appreciates good
                  design. The minimalistic yet stylish pattern caught my eye,
                  and the fit is perfect. I can see the designer's touch in
                  every aspect of this shirt."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Olivia P..</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "As a UI/UX enthusiast, I value simplicity and functionality.
                  This t-shirt not only represents those principles but also
                  feels great to wear. It's evident that the designer poured
                  their creativity into making this t-shirt stand out."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 17, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:flex items-center gap-4 mt-6 px-5">
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStarHalf className="text-yellow-500" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Liam K.</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "This t-shirt is a fusion of comfort and creativity. The
                  fabric is soft, and the design speaks volumes about the
                  designer's skill. It's like wearing a piece of art that
                  reflects my passion for both design and fashion."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 18, 2023
                </p>
              </div>
            </div>
            <div className="w-full md:w-[50%] border border-gray-200  shadow-sm p-4 rounded-2xl">
              <div className="flex items-center justify-between my-1">
                <div className="flex items-cente gap-1 ">
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                  <FaStar className="text-yellow-500 text-xl" />
                </div>
                <HiOutlineDotsHorizontal />
              </div>

              <div className="flex gap-2 items-center my-2">
                <h2>Ava H.</h2>
                <MdDone className="w-5 h-5 rounded-full bg-green-500 p-1 text-white" />
              </div>

              <div>
                <p className="mb-3 text-md font-normal text-[#00000099]">
                  "I'm not just wearing a t-shirt; I'm wearing a piece of design
                  philosophy. The intricate details and thoughtful layout of the
                  design make this shirt a conversation starter."
                </p>
                <p className="text-[#00000099] font-medium	">
                  Posted on August 19, 2023
                </p>
              </div>
            </div>
          </div>
      <div className="w-full flex justify-center mt-10">
      <button className="text-center border border-gray-200 shadow-sm py-2 px-10 rounded-full text-sm font-light">Load More Reviews</button>
      </div>

        </div>

      </div>

      <Card_component/>
      <Footer/>
    </>
  );
}

export default Products;
