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
import Breadcrumbs from "../components/Breadcrumbs";
import ProductsCard from "../components/ProductsCard";

function SkinCare() {
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
  const Breadcrumbs = [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "SkinCare", href: "/skincare" },
    // { id: 3, name: "Product", href: "/product" },
  ];

  const productHref = "/product";
  const productName = "Product";

  // Define fixed width and height for the images
  const imageWidth = "367.4px"; // Adjust to your desired width
  const imageHeight = "329.25px";
  return (
    <div>
      <div className="pt-10 pr-10 ml-8">
        {" "}
        <Breadcrumbs
          Breadcrumbs={Breadcrumbs}
          productHref={productHref}
          productName={productName}
        />{" "}
      </div>
      <div className="text-4xl font-bold text-center pb-5 text-gray-600">
        SkinCare Products
      </div>
      <div className="flex flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <div key={item} className="w-1/2 md:w-1/2 lg:w-1/4 p-2">
            <ProductsCard
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
            </ProductsCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkinCare;
