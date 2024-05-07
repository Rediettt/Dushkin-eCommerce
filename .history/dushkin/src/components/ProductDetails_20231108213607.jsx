import React from "react";
import { useState, useEffect } from "react";
// ...

export default function ProductDetails() {
  // State to hold the product data
  const [productData, setProductData] = useState(null);
  // ...

  // Function to fetch product data based on the selected product ID
  const fetchProductData = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (response.ok) {
        const data = await response.json();
        setProductData(data);
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Effect to fetch data when the selected product changes
  useEffect(() => {
    // Replace 'productId' with the actual product ID you want to fetch
    fetchProductData(productId);
  }, [productId]);

  return (
    <div>
      {productData && (
        <div>
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          {/* Add more product details */}
        </div>
      )}
    </div>
  );
}
