import React from "react";
import image from "../assets/ContactImage.png";

const TextComponent = () => {
  return (
    <div>
      <h1
        className="text-3xl font-bold tracking-tight text-[#36454F] sm:text-6xl lg:text-start sm:text-center text-justify
            "
      >
        Want to Contact Us?
      </h1>
      <p className="mt-6 text-lg leading-8 text-black lg:text-start sm:text-center">
        {" "}
        Feel free to reach out to us for any inquiries, feedback, or assistance
        you may need – we're here to help!
      </p>

      <div className="py-10">
        <a
          href="/about"
          className="rounded-md bg-[#36454F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A4D8C2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 s"
        >
          Contact Us{" "}
        </a>
      </div>
    </div>
  );
};

const Mentor = () => {
  return (
    <div className="flex flex-col-4 lg:flex-col-4 items-center justify-center px-40 py-10 ">
      <img
        src={image}
        alt=""
        className="lg:w-80 sm:w-64 mb-8 lg:mb-0 lg:mr-8"
      />

      <div>
        <TextComponent />
      </div>
    </div>
  );
};

export default Mentor;
