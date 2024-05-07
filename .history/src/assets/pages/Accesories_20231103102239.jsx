import React from "react";
import Image from "../assets/SkinCare2.jpg";
import Image1 from "../assets/SkinCare1.jpg";
import Image2 from "../assets/SkinCare3.jpg";
import Image3 from "../assets/Beauty1.jpg";
import Image4 from "../assets/Beauty2.jpg";
import Image5 from "../assets/Beauty3.jpg";
import Image6 from "../assets/Beauty4.jpg";
import Image7 from "../assets/Jewlery1.jpg";
import Image8 from "../assets/Jewlery2.jpg";
import Image9 from "../assets/Jewlery3.jpg";
import Image10 from "../assets/Jewlery4.jpg";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";

function Accesories() {
  const navigate = useNavigate();
  const Breadcrumbs = [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "Accessories", href: "/accessories" },
    // { id: 3, name: "Product", href: "/product" },
  ];

  const productHref = "/product";
  const productName = "Product";
  // Define an array of image sources
  const imageSources = [
    "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",

    Image,
    Image2,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ];
  return <div>Accesories</div>;
}

export default Accesories;
