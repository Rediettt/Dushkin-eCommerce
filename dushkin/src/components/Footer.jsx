import React from "react";
import Logo from "../assets/Logo1.png";
import Twint from "../assets/TwintLogo.png";
import Visa from "../assets/VisaLogo.png";
import Mastercard from "../assets/MasterCardLogo.png";
import eBank from "../assets/eBankingLogo.jpg";

// import { TwitterIcon, FacebookIcon, InstagramIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="w-full text-gray-700 bg-[#36454F] mt-8 body-font rounded-t-3xl overflow-hidden">
      {" "}
      {/* <div className="flex items-end w-full min-h-screen bg-white">
      
      </div> */}
      <div className="container flex flex-col flex-wrap ml-16 px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a
            href="/"
            className="flex items-center justify-center font-medium text-[#A4D8C2] title-font md:justify-start"
          >
            <img className="h-20 w-auto" src={Logo} alt="" />
          </a>
          <p className="mt-2 text-sm text-white ">Choose, Buy and Ship!</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer hover:text-[#A4D8C2]">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer hover:text-[#A4D8C2]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer hover:text-[#A4D8C2]">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <a
              className="mb-3 text-sm font-bold tracking-widest text-[#A4D8C2] uppercase title-font"
              href="/about"
            >
              About
            </a>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  Company
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  Careers
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  Blog
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-bold tracking-widest text-[#A4D8C2] uppercase title-font">
              Payment Methods
            </h2>
            <nav className="mb-10 list-none grid grid-cols-2">
              <div className="grid-cols-1">
                <li className="mt-3">
                  <a
                    href="/cart"
                    className="flex items-center justify-center font-medium text-[#A4D8C2] title-font md:justify-start"
                  >
                    <img className="h-12 w-15" src={Twint} alt="" />
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/cart"
                    className="flex items-center justify-center font-medium text-[#A4D8C2] title-font md:justify-start"
                  >
                    <img className="h-10 w-15" src={Visa} alt="" />
                  </a>
                </li>
              </div>
              <div className="grid-cols-2">
                <li className="mt-3">
                  <a
                    href="/cart"
                    className="flex items-center justify-center font-medium text-[#A4D8C2] title-font md:justify-start"
                  >
                    <img className="h-10 w-15" src={Mastercard} alt="" />
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="/cart"
                    className="flex items-center justify-center font-medium text-[#A4D8C2] title-font md:justify-start"
                  >
                    <img className="h-8 w-15" src={eBank} alt="" />
                  </a>
                </li>
              </div>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <a
              className="mb-3 text-sm font-bold tracking-widest text-[#A4D8C2] uppercase title-font"
              href="/about"
            >
              Contact
            </a>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  Send a Message
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-[#A4D8C2]">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
            </div>
        </div> */}
    </footer>
  );
}

export default Footer;
