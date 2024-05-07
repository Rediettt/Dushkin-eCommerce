import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import TestPage from "./pages/TestPage";
import ProductCollection from "./components/ProductCollection";
// import ProductsForCategory3 from "./components/ProductsForCategory3";
// import ProductsForCategory2 from "./components/ProductsForCategory2";
// import ProductsForCategory1 from "./components/ProductsForCategory1";
import ProductDetails from "./components/ProductDetails"
import AccessoriesPage from "./pages/AccessoriesPage"
import SkinCarePage from "./pages/SkinCarePage";
import CosmeticsPage from "./pages/CosmeticsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopPa />}>
          <Route index element={<ProductCollection />} />
          {/* <Route path="category1" element={<ProductsForCategory1 />} />
          <Route path="category2" element={<ProductsForCategory2 />} />
          <Route path="category3" element={<ProductsForCategory3 />} /> */}
        </Route>
   
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/skincare" element={<SkinCarePage />} />
        <Route path="/cosmetics" element={<CosmeticsPage />} />


        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/test" element={<TestPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
