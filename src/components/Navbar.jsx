/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import Nav_logo from "../assets/images/Nav_logo.png";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";

function Navbar() {
  return (
    <>
<div className="w-full bg-gray-50 fixed top-0 z-30 ">
<nav className="  h-auto flex justify-between max-w-[1240px] mx-auto items-center py-5 lg:px-0 px-3 border-b-[1px]">
        <div className="flex items-center  ">
          <IoMdMenu className="hidden" />
          <Link to={"/"}><img src={Nav_logo} alt="#" className="w-32 lg:w-40" /></Link>
        </div>
        <div className=" list-none gap-5  hidden sm:hidden md:flex lg:gap-5 items-center ">
          <Dropdown />

          <Link to={"/Products"}>On Sale</Link>
          <Link to={"/Categary"}>New Arrivals</Link>
          <Link to={"/Cart_"}>Brands</Link>
        </div>

        <div className="   py-2 bg-gray-200 rounded-3xl px-3 items-center lg:w-3/12 md:w-2/12 xl:w-5/12 hidden md:block lg:flex">
          <FaSearch className="mr-2" />
          <input
            className="w-full outline-none bg-transparent "
            type="search"
            placeholder="Search For Products"
          />
        </div>
        <div className="flex gap-5">
          <FaSearch className="md:hidden text-2xl" />
        <Link to={"/Form"}>  <FaCartShopping className="text-2xl" /></Link>
       <Link to={"/Login_form"}><CgProfile className="text-2xl" /></Link>
        </div>
      </nav>
</div>
    </>
  );
}

export default Navbar;
