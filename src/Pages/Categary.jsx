/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image21 from '../assets/images/image21.png'
import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import crl01 from '../assets/images/crl01.png'
import crl02 from '../assets/images/crl02.png'
import crl03 from '../assets/images/crl03.png'
import crl04 from '../assets/images/crl04.png'
import crl05 from '../assets/images/crl05.png'
import crl06 from '../assets/images/crl06.png'
import crl07 from '../assets/images/crl07.png'
import crl08 from '../assets/images/crl08.png'
import crl09 from '../assets/images/crl09.png'
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineArrowForward } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";



function Categary() {
  return (
    <>
     <Navbar />
<div className=' w-full lg:w-[1240px] m-auto lg:flex  gap-5 px-4 xl:px-0 mt-24'>

 <div className='w-[20%] hidden lg:block border border-gray-300 rounded-xl h-full p-4'>
  <div className='flex justify-between items-center '>
    <h2 className='text-xl font-semiboldbold'>Filter</h2>
    <img src={image21} alt="" />
  </div>
  <hr className='my-5' />

  <div className=" w-full">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            T-shirts
            </span>
            <FaChevronRight className="size-4  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Shorts
            </span>
            <FaChevronRight className="size-4  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Shirts
            </span>
            <FaChevronRight className="size-4  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Hoodie
            </span>
            <FaChevronRight className="size-4  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Jeans
            </span>
            <FaChevronRight className="size-4  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>

    <hr className='my-5' />
{/* Price_section */}
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[20px] font-bold text-[#000000] ">
            Price
            </span>
            <IoIosArrowDown className="size-4  group-data-[open]:rotate-180 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">
           
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
  <div class="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
</div>

          </DisclosurePanel>
   
        </Disclosure>
      </div>
    </div>

    <hr className='my-5' />
{/* colors_section */}

    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[20px] font-semibold text-[#000000] ">
            Colors
            </span>
            <IoIosArrowDown className="size-4  group-data-[open]:rotate-180 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5  ">
           
<div className='flex items-center justify-between'>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#318243] bg-[#00C12B]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#662323] bg-[#F50606]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#877d29] bg-[#F5DD06]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#ba7c42] bg-[#F57906]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#347f90] bg-[#06CAF5]'></div>
</div>
<div className='flex items-center justify-between mt-3'>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-blue-800 bg-[#063AF5]'><MdOutlineDone  className='text-white'/></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#301a46] bg-[#7D06F5]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#722b5b] bg-[#F506A4]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#999898] bg-[#FFFFFF]'></div>
  <div className='w-8 h-8 flex items-center justify-center rounded-full border border-[#000000] bg-[#000000]'></div>
</div>

          </DisclosurePanel>
   
        </Disclosure>
      </div>
    </div>

    <hr className='my-5' />

    {/* size_section */}

    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[20px] font-semibold text-[#000000] ">
            Size
            </span>
            <IoIosArrowDown className="size-4  group-data-[open]:rotate-180 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5  ">
           
<div className='flex  justify-between'>
<div className='flex flex-col gap-3'>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black text-[14px] font-normal hover:text-white text-[#00000099] duration-500'>XX-Small</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black text-[14px] font-normal hover:text-white text-[#00000099]duration-500'>Small</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-black hover:bg-[#F0F0F0] text-[14px] font-normal text-white hover:text-[#00000099] duration-500'>Large</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black text-[14px] font-normal hover:text-white text-[#00000099] duration-500'>XX-Large</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black text-[14px] font-normal hover:text-white text-[#00000099] duration-500'>4X-Large</div>
</div>
<div className='flex flex-col gap-3'>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black hover:text-white text-[14px] font-normal text-[#00000099] duration-500'>X-Small</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black hover:text-white text-[14px] font-normal text-[#00000099] duration-500'>Medium</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black hover:text-white text-[14px] font-normal text-[#00000099] duration-500'>X-Large</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black hover:text-white text-[14px] font-normal text-[#00000099] duration-500'>3X-Large</div>
  <div className='w-24 py-2  flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-black hover:text-white text-[14px] font-normal text-[#00000099] duration-500'>Janwar-Size</div>
</div>
</div>

          </DisclosurePanel>
   
        </Disclosure>
      </div>
    </div>
    <hr className='my-5' />

    
    {/* Dress_style_section */}
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[20px] font-semibold text-[#000000] ">
            Dress Style
            </span>
            <IoIosArrowDown className="size-4  group-data-[open]:rotate-180 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5  ">
          <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Casual
            </span>
            <FaChevronRight className="size-3  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Formal
            </span>
            <FaChevronRight className="size-3  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Party
            </span>
            <FaChevronRight className="size-3  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    <div className=" w-full my-3">
      <div className="mx-auto w-full max-w-lg  rounded-xl ">
     
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[16px] font-normal text-[#00000099] ">
            Gym
            </span>
            <FaChevronRight className="size-3  group-data-[open]:rotate-90 text-[#00000099]"/>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 bg-gray-200 ">No.</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
          </DisclosurePanel>
   
        </Disclosure>
      </div>
    </div>

    <button className='w-full bg-black text-white py-3 rounded-full hover:bg-[#F0F0F0] hover:text-[#00000099] duration-500 mt-4'>Apply Filter</button>




 </div>
 <div className='w-full lg:w-[80%] border border-gray-300 rounded-xl h-auto p-2 xl:p-4'>

{/* Casul_heading */}  
  <div className=' flex justify-start md:flex md:justify-between items-center gap-1'>
   <h2 className='text-[20px] lg:text-[32px] text-[#000000] font-bold'>Casual</h2>
<div className='flex  items-center gap-5'>
  <p className='text[5px] lg:text-[16px] text-[#00000099] font-light lg:font-normal'>Showing 1-10 of 100 Products</p> 
  <GiSettingsKnobs  className='bg-[#F0F0F0] w-8 h-8  rounded-full p-2 flex justify-end sm:hidden'/>
   <p className='text[14px] lg:text-[16px] text-[#00000099] font-normal hidden sm:block'>Sort by: <span className='text-black'><select > 
    <option value="">Most Popular</option>
    <option value="">Most1 Popular</option>
    <option value="">Most2 Popular</option>
    </select> </span></p>
</div>
  </div>


<div className='grid sm:grid sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-3'>
  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl01} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                Gradient Graphic T-shirt
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                  3.5/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$145</h2> 

                </div>
              </div>
  </div>

 <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl02} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                Polo with Tipping Details
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                  4.5/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$180</h2> 

                </div>
              </div>
  </div>

  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl03} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                Black Striped T-shirt
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <p className="text-black text-sm">
                  5.0/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold items-center">$120 <s className="text-gray-500 text-md  sm:text-lg">$150</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-30%</span></h2> 

                </div>
              </div>
  </div>

</div>


<div className='grid sm:grid sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-10'>
  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl04} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                SKINNY FIT JEANS
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                  3.5/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold items-center">$240<s className="text-gray-500 text-md  sm:text-lg">$260</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-20%</span></h2> 

                </div>
              </div>
  </div>

 <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl05} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                CHECKERED SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalf className="text-yellow-500" />
                  <p className="text-black text-sm">
                  4.5/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$180</h2> 

                </div>
              </div>
  </div>

  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl06} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                SLEEVE STRIPED T-SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <p className="text-black text-sm">
                  5.0/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold items-center">$130 <s className="text-gray-500 text-md  sm:text-lg">$160</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-30%</span></h2> 

                </div>
              </div>
  </div>

</div>

<div className='grid sm:grid sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-10'>
  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl07} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                VERTICAL STRIPED SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <p className="text-black text-sm">
                  5.0/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold items-center">$212<s className="text-gray-500 text-md  sm:text-lg">$232</s> <span className="bg-red-100 rounded-3xl text-sm px-2 py-1">-20%</span></h2> 

                </div>
              </div>
  </div>

 <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl08} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                COURAGE GRAPHIC T-SHIRT
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <p className="text-black text-sm">
                  4.0/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$145</h2> 

                </div>
              </div>
  </div>

  <div className='col-span-4'>
  <div className="bg-gray-200 rounded-2xl items-center flex justify-center">
                <img src={crl09} alt="" className="w-[295px] h-[298px]" />
              </div>
              <div>
                <h2 className=" text-md sm:text-lg xl:text-xl font-bold mt-4">
                Black Striped T-shirt
                </h2>
                <div className="flex items-center gap-1 py-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <p className="text-black text-sm">
                  3.0/<span className="text-gray-600">5</span>{" "}
                  </p>
                </div>
                <div>
                  <h2 className=" text-md sm:text-lg xl:text-2xl flex gap-2 font-bold">$80 </h2> 

                </div>
              </div>
  </div>

</div>
<hr className='mt-20'/>



<div className='flex justify-between mt-5 items-center'>
<div className='flex items-center justify-center gap-2 w-20 lg:w-28  py-2 text-[14px] font-[500] rounded-lg border border-gray-200'>
<IoMdArrowBack  className='text-sm lg:text-lg'/>
  <button>Previous</button>
</div>
<div className='flex gap-3'>
  <p className='bg-gray-200 cursor-pointer w-[40px] sm:w-[40px] text-center py-2 rounded-lg h-[40px]'>1</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[36px] text-center py-2 rounded-lg h-[40px]'>2</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[32px] text-center py-2 rounded-lg h-[40px] hidden sm:block'>3</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[32px] text-center py-2 rounded-lg h-[40px]'>...</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[32px] text-center py-2 rounded-lg h-[40px] hidden sm:block'>8</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[32px] text-center py-2 rounded-lg h-[40px]'>9</p>
  <p className='hover:bg-gray-200 cursor-pointer w-[20px] sm:w-[32px] text-center py-2 rounded-lg h-[40px]'>10</p>
</div>

<div className='flex items-center justify-center gap-2 w-20 lg:w-28   py-2 text-[14px] font-[500] rounded-lg border border-gray-200'>
  <button>Next</button>
  <MdOutlineArrowForward className='text-lg'/>
</div>
</div>

 </div>
</div>

     <Footer/>
    </>
  )
}

export default Categary