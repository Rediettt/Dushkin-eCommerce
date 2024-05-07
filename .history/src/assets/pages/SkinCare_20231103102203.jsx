import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import About from "../components/About";

function SkinCare() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-tr from-[#A4D8C2] to-[#B0B8BF]">
      <About />
      <Form />
    </div>
  );
}

export default SkinCare;
