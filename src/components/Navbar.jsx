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
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redex/navSlice";
function Navbar() {
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full bg-gray-50 fixed top-0 z-30 ">
        <nav className="  h-auto md:flex justify-between max-w-[1240px] mx-auto items-center py-5 lg:px-0 px-3 border-b-[1px]">
          <Link to={"/"}>
            <img
              src={Nav_logo}
              alt="#"
              className="w-32 lg:w-40 hidden md:flex"
            />
          </Link>
          <div className="md:hidden flex items-center justify-between w-full ">
            <Link to={"/"}>
              <img src={Nav_logo} alt="#" className="w-32 lg:w-40" />
            </Link>
            <div className="flex gap-5 items-center">
              <div className="mt-1 flex items-center gap-5">
                <FaSearch className="md:hidden text-2xl" />
                <Link to={"/Form"}>
                  {" "}
                  <FaCartShopping className="text-2xl" />
                </Link>
                <Link to={"/Login_form"}>
                  <CgProfile className="text-2xl" />
                </Link>
              </div>
              <button
                className="text-2xl"
                onClick={() => dispatch(toggleNavbar())}
              >
                {" "}
                ☰
              </button>
            </div>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } list-none gap-5 md:flex lg:gap-5 items-center mt-1 leading-7 md:mt-0 md:leading-0 `}
          >
               <li className="hidden md:block">
            <Dropdown className=""/>
            </li>
            <li>
              {" "}
              <Link to={"/Products"}>On Sale</Link>
            </li>
            <li>
              {" "}
              <Link to={"/Categary"}>New Arrivals</Link>
            </li>
            <li className="mb-3 md:mb-0">
              {" "}
              <Link to={"/Cart_"}>Brands</Link>
            </li>
            <li className="absolute left-[11px] md:hidden bottom-1">
            <Dropdown className=""/>
            </li>
          </ul>

          <div className="   py-2 bg-gray-200 rounded-3xl px-3 items-center lg:w-3/12 md:w-2/12 xl:w-5/12 hidden md:block lg:flex">
            <FaSearch className="mr-2" />
            <input
              className="w-full outline-none bg-transparent "
              type="search"
              placeholder="Search For Products"
            />
          </div>
          <div className="hidden md:flex gap-5">
            <FaSearch className="md:hidden text-2xl" />
            <Link to={""}>
              {" "}
              <FaCartShopping className="text-2xl" />
            </Link>
            <Link to={"/Login_form"}>
              <CgProfile className="text-2xl" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
