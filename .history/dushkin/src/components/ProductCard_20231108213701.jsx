import React, { useState } from "react";

function ProductCard({ imageSrc, title, rating, price, onAddToCart }) {
  const imageWidth = "367.4px";
  const imageHeight = "329.25px";

  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const newItem = {
      title: title,
      price: price,
    };

    setCart([...cart, newItem]);
    setAddedToCart(true);

    // Remove the "Added to Cart" message after a few seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);

    // Step 3: Update session storage to store the cart
    sessionStorage.setItem("cart", JSON.stringify([...cart, newItem]));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-full mx-auto">
        <div className="bg-white shadow-md rounded-lg dark:bg-[#d3d3d3] dark:border-gray-700">
          <a href="/details">
            <img
              style={{ width: imageWidth, height: imageHeight }}
              src={imageSrc}
              alt="product image"
            />
          </a>
          <div className="p-4 md:p-6 lg:p-8">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl md:text-2xl dark:text-[#36454F]">
                {title}
              </h3>
            </a>
            <div className="flex items-center mt-2.5 mb-4 md:mb-6">
              {Array.from({ length: rating }, (v, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded ml-3 md:ml-4">
                {rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-[#36454F]">
                ${price}
              </span>
              <button
                onClick={handleAddToCart}
                className="text-white bg-[#FAF9F6] hover:bg-[#A4D8C2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 text-center dark:bg-[#36454F] dark:hover-bg-[#A4D8C2] dark:focus:ring-[#A4D8C2]"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {addedToCart && (
          <div className="bg-green-100 p-2 text-green-700 mt-2">
            Item added to cart!
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
