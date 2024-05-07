import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Test from "./pages/test";
// import ProductCollection from "./components/ProductCollection";
// import ProductsForCategory3 from "./components/ProductsForCategory3";
// import ProductsForCategory2 from "./components/ProductsForCategory2";
// import ProductsForCategory1 from "./components/ProductsForCategory1";
import ProductDetails from "./components/ProductDetails"
import Accessories from "./pages/Accessories"
import SkinCarePage from "./pages/SkinCarePage";
import CosmeticsPage from "./pages/CosmeticsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />}>
          {/* <Route index element={<ProductCollection />} /> */}
          {/* <Route path="category1" element={<ProductsForCategory1 />} />
          <Route path="category2" element={<ProductsForCategory2 />} />
          <Route path="category3" element={<ProductsForCategory3 />} /> */}
        </Route>
   
        <Route path="/details" element={<ProductDetails/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/cosmetics" element={<Cosmetics />} />


        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/test" element={<Test/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
