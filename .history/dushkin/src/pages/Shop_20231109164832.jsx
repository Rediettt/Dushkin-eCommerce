import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import ProductCollection from "../components/ProductCollection";
import ProductCard from "../components/ProductCard";
import Image from "../assets/Beauty1.jpg";
import Image1 from "../assets/SkinCare1.jpg";
import Image2 from "../assets/Jewlery1.jpg";
import Image3 from "../assets/Beauty1.jpg";
import Image4 from "../assets/Beauty2.jpg";
import Image5 from "../assets/Beauty3.jpg";
import Image6 from "../assets/Beauty4.jpg";
import Image7 from "../assets/Jewlery1.jpg";
import Image8 from "../assets/Jewlery2.jpg";
import Image9 from "../assets/Jewlery3.jpg";
import Image10 from "../assets/Jewlery4.jpg";

function Shop() {
  const navigate = useNavigate();

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

  // Define fixed width and height for the images
  const imageWidth = "200px"; // Adjust to your desired width
  const imageHeight = "200px"; // Adjust to your desired height

  return (
    <div>
      {/* <ProductCollection /> */}

      <div className="flex flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <div key={item} className="w-1/2 md:w-1/2 lg:w-1/4 p-2">
            <ProductCard
              imageSrc={imageSources[index]} // Use the image source based on the index
              title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
              rating={5}
              price={599}
            >
              <img
                src={imageSources[index]} // Use the image source again
                alt="Product Image"
                style={{ width: imageWidth, height: imageHeight }}
              />
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
