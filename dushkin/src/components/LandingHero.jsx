import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import image from "../assets/eCommerceImage.png";

export default function Example() {
  return (
    <div className="">
      <div className="flex flex-col-4 lg:flex-col-4 items-center justify-center px-40 py-1 ">
        <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div>
              <img
                src={image}
                alt=""
                className="lg:w-80 sm:w-64 mb-8 lg:mb-0 lg:mr-8"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              See our latest Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Shop our latest collection of trendy clothing, shoes, and
              accessories.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/shop"
                className="rounded-md bg-[#36454F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A4D8C2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#A4D8C2] to-[#8CADA2] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
