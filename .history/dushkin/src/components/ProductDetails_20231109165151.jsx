import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import "../App.css";
import Breadcrumb from "./Breadcrumb";

const product = {
  name: "Basic Desk",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "Cosmetics", href: "/cosmetics" },
    // { id: 3, name: "Product", href: "/product" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div>
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
      </div>{" "}
      <div className="pt-6">
        <Breadcrumb
          breadcrumbs={product.breadcrumbs}
          productHref={product.href}
          productName={product.name}
        />
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="w-full rounded-lg"
          />
          <img
            src={product.images[1].src}
            alt={product.images[1].alt}
            className="w-full rounded-lg"
          />
          <img
            src={product.images[2].src}
            alt={product.images[2].alt}
            className="w-full rounded-lg"
          />
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="w-full rounded-lg"
          />

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Options */}
            <div className="mt-4">
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-[#A4D8C2] hover:text-[#36454F]"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <div className="flex items-center space-x-3 mt-4">
                  {product.colors.map((color) => (
                    <label
                      key={color.name}
                      className={classNames(
                        color.selectedClass,
                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      )}
                    >
                      <input
                        type="radio"
                        name="color"
                        value={color.name}
                        className="sr-only"
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                      />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          color.class,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#A4D8C2] hover:text-[#36454F]"
                  >
                    Size guide
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-4">
                  {product.sizes.map((size) => (
                    <label
                      key={size.name}
                      className={classNames(
                        size.inStock
                          ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                          : "cursor-not-allowed bg-gray-50 text-gray-200",
                        "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                      )}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size.name}
                        className="sr-only"
                        disabled={!size.inStock}
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(size)}
                      />
                      <span>{size.name}</span>
                      {size.inStock && selectedSize === size && (
                        <span
                          className={classNames(
                            "border",
                            "border-indigo-500",
                            "pointer-events-none absolute -inset-px rounded-md"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#36454F] px-8 py-3 text-base font-medium text-white hover:bg-[#A4D8C2] focus:outline-none focus:ring-2 focus:ring-[#A4D8C2] focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10">
            {/* Description */}
            <div>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <p className="mt-4 text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react"
// import { useState, useEffect } from "react";
// // ...

// export default function ProductDetails() {
//   // State to hold the product data
//   const [productData, setProductData] = useState(null);
//   // ...

//   // Function to fetch product data based on the selected product ID
//   const fetchProductData = async (productId) => {
//     try {
//       const response = await fetch(`/api/products/${productId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setProductData(data);
//       } else {
//         console.error('Failed to fetch product data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Effect to fetch data when the selected product changes
//   useEffect(() => {
//     // Replace 'productId' with the actual product ID you want to fetch
//     fetchProductData(productId);
//   }, [productId]);

//   return (
//     <div>
//         {productData && (
//         <div>
//           <h1>{productData.name}</h1>
//           <p>{productData.description}</p>
//           {/* Add more product details */}
//         </div>
//       )}
//       </div>
//   )
// }
