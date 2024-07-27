/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TbMathGreater } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";
import Cart_img from "../assets/images/image22.png";
import Cart_img1 from "../assets/images/image23.png";
import Cart_img2 from "../assets/images/image24.png";
import { BsTag } from "react-icons/bs";
import Layout from "../components/Layout";

function Cart_() {
  const [Counter, setCounter] = useState(1);
  return (
    <>
  

  
<Layout>


<div className="w-full lg:max-w-[1240px] m-auto mt-24 ">
     
     <div className="flex gap-3 items-center ">
           <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
             Hello{" "}
             <span>
               <TbMathGreater />
             </span>{" "}
           </h2>
           <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
             Cart{" "}
         
           </h2>
          
         </div>
       <h2 className="mt-2 lg:mt-5 uppercase text-[30px] lg:text-[40px] font-extrabold	 text-[#000000]">
         Your cart
       </h2>

       <div className=" lg:flex gap-5 mt-5">
         <div className="lg:w-[60%] bg-white rounded-[20px] border border-[#0000001A] shadow-lg h-auto p-2 lg:p-5">
     
        <div className="flex justify-between">
        <div className="flex gap-2 lg:gap-4">
             <div className=" w-[80px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-lg bg-[#F0EEED] flex justify-center">
               <img src={Cart_img1} alt="" />
             </div>
             <div>
               <h2 className="text-[14px] lg:text-[18px] text-[#000000] font-bold lg:tracking-wide		">
                 Gradient Graphic T-shirt
               </h2>

               <p className="text-[14px] font-normal">
                 Size:{" "}
                 <span className="text-[#00000099] font-normal">Large</span>{" "}
               </p>
               <p className="text-[14px] font-normal">
                 Color:{" "}
                 <span className="text-[#00000099] font-normal">White</span>{" "}
               </p>
               <p className="text-[21px] font-bold mt-2">$145</p>
             </div>
           </div>
         <div className="flex flex-col items-end justify-between mt-2">
         <div> 
         <RiDeleteBin5Fill className="text-[#FF3333] text-lg lg:text-xl"/></div>
           <div className="bg-[#F0F0F0] px-3 py-4  lg:py-3 gap-7 w-[100px] h-[30px] lg:w-[126px] lg:h-[44px] flex justify-center items-center   rounded-3xl">
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
         </div>
        </div>
        <hr className="mt-4 mb-4"/>

        <div className="flex justify-between">
        <div className="flex gap-4">
             <div className=" w-[80px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-lg bg-[#F0EEED] flex justify-center">
               <img src={Cart_img} alt="" />
             </div>
             <div>
               <h2 className="text-[14px] lg:text-[18px] text-[#000000] font-bold lg:tracking-wide		">
               CHECKERED SHIRT
               </h2>

               <p className="text-[14px] font-normal">
                 Size:{" "}
                 <span className="text-[#00000099] font-normal">Medium</span>{" "}
               </p>
               <p className="text-[14px] font-normal">
                 Color:{" "}
                 <span className="text-[#00000099] font-normal">Red</span>{" "}
               </p>
               <p className="text-[21px] font-bold mt-2">$180</p>
             </div>
           </div>
         <div className="flex flex-col items-end justify-between mt-2">
   <div><RiDeleteBin5Fill className="text-[#FF3333] text-lg lg:text-xl"/></div>
           <div className="bg-[#F0F0F0] px-3 py-4  lg:py-3 gap-7 w-[100px] h-[30px] lg:w-[126px] lg:h-[44px] flex justify-center items-center   rounded-3xl">
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
         </div>
        </div>
        <hr className="mt-4 mb-4"/>
        <div className="flex justify-between">
        <div className="flex gap-4">
             <div className="w-[80px] h-[100px] lg:w-[124px] lg:h-[124px] rounded-lg bg-[#F0EEED] flex justify-center">
               <img src={Cart_img2} alt="" />
             </div>
             <div>
               <h2 className="text-[14px] lg:text-[18px] text-[#000000] font-bold lg:tracking-wide	">
               SKINNY FIT JEANS
               </h2>

               <p className="text-[14px] font-normal">
                 Size:{" "}
                 <span className="text-[#00000099] font-normal">Large</span>{" "}
               </p>
               <p className="text-[14px] font-normal">
                 Color:{" "}
                 <span className="text-[#00000099] font-normal">Blue</span>{" "}
               </p>
               <p className="text-[21px] font-bold mt-2">$240</p>
             </div>
           </div>
         <div className="flex flex-col items-end justify-between mt-2">
         <div><RiDeleteBin5Fill className="text-[#FF3333] text-xl"/></div>
           <div className="bg-[#F0F0F0] px-3 py-4  lg:py-3 gap-7 w-[100px] h-[30px] lg:w-[126px] lg:h-[44px] flex justify-center items-center   rounded-3xl">
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
         </div>
        </div>

         </div>
         <div className="lg:w-[40%]  bg-white rounded-[20px] border border-[#0000001A] shadow-lg h-[400px] p-5 mt-5 lg:mt-0">
           <h2 className="text-[24px] font-bold">Order Summary</h2>
   <div className="flex justify-between mt-3">
   <div className="flex flex-col  gap-2">
             <p className="text-[17px] font-normal text-[#00000099]">Subtotal</p>
             <p className="text-[17px] font-normal text-[#00000099]">Discount (-20%)</p>
             <p className="text-[17px] font-normal text-[#00000099]">Delivery Fee</p>
          
           </div>
           <div className="flex flex-col items-center gap-2">
             <p className="text-[17px] text-[#000000]">$565</p>
             <p className="text-[17px] text-[#ff5858]">-$113</p>
             <p className="text-[17px] text-[#000000]">$15</p>
          
           </div>
   </div>
   <hr className="mt-4" />
   <div className="flex justify-between mt-4">
   <p className="text-[17px] font-normal text-[#000000]">Total</p>
     <p className="text-[20px] text-[#000000]">$467</p>
   </div>

   <div className="flex justify-between mt-5">
     <div className="bg-[#F0F0F0] w-[220px] md:w-[520px] lg:w-[300px] py-2 px-3 rounded-full flex items-center gap-2 ">
     <BsTag />
       <input type="text" placeholder="Add promo code" className="bg-[#F0F0F0] outline-none w-full" />
     </div>
     <button className="bg-black py-2 px-7 lg:px-10 rounded-full text-white">Apply</button>
   </div>
         </div>
       </div>
     </div>

</Layout>





         
    </>
  );
}

export default Cart_;
