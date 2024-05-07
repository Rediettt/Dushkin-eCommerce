import React from "react";
import LandingHero from "../components/LandingHero";
import Contact from "../components/Contact";
import ProductsCard from "../components/ProductsCard";
import PopularProducts from "../components/PopularProducts";

function Home() {
  return (
    <div>
      {" "}
      <LandingHero />
      <PopularProducts />
      <Contact />
    </div>
  );
}

export default Home;
