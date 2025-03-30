import React from "react";
import quickhelp_logo from "../assets/quickhelp_logo.jpg"; // Ensure correct path & extension
import { NavLink } from "react-router-dom";
import { ArrowRight, Stethoscope, Phone, Brain, ChevronRight } from "lucide-react"

  const Navbar = () => {
    return (
      <div className="fixed top-0 w-full opacity-96 z-50">
        <nav className="bg-white h-20 backdrop-blur border-gray-200 tranparent-100  dark:bg-gray-100">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo and Brand Name */}
            <NavLink to={"/"}>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Stethoscope className="h-8 w-8  text-primary" />
                <span className="self-center text-bold text-4xl font-semibold whitespace-nowrap">
                  QuickHelp
                </span>
              </div>
            </NavLink>
  
             {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
  
            {/* Navbar Links */}
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col text-xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
               bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
               md:dark:bg-gray-100  dark:border-gray-700">
  
                <li className="block py-2 px-3 font-bold bg-blue-700 rounded-sm md:bg-transparent
                 md:p-0 hover:text-blue-900 "
                  aria-current="page">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
  
                <li className="block py-2 px-3 font-bold text-gray-900 rounded-sm hover:bg-gray-100 
                 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                md:dark:hover:text-blue-900 dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                  <NavLink to="/Login">Log in</NavLink>
                </li>
  
                <li className="block py-2 px-3 rounded-sm font-bold hover:bg-gray-100 md:hover:bg-transparent
                 md:border-0 md:hover:text-blue-700 md:p-0 
                md:dark:hover:text-blue-900 dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                  <NavLink to={"/Signup"}>Sign up</NavLink>
                </li>
  
                <li className="block py-2 px-3 text-gray-900  font-bold rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 
                md:dark:hover:text-blue-900 
                 md:dark:hover:bg-transparent">
                  <NavLink to={"/working"}>How It Works</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
 

export default Navbar



