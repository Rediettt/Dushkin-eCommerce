import React from "react";
import CartCard from "../components/CartCard";
import CheckOut from "../components/CheckOut";
function Cart() {
  const cardData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      productName: "Nike Air Max 2019",
      productDetails: "36EU - 4US",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3",
      productName: "Adidas Superstar",
      productDetails: "38EU - 6US",
    },
  ];

  const totalData = {
    subtotal: "$129.99",
    shipping: "$4.99",
    totalAmount: "$134.98",
  };
  return (
    <div className=" ">
      <h1 className="text-4xl font-bold text-gray-700 flex justify-center p-4">
        My Shopping Cart
      </h1>
      {/* <Cart /> */}
      <div className="">
        <CartCard
          imageUrl="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3"
          productName="Adidas Superstar"
          productDetails="38EU - 6US"
          imageSize="60"
        />
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cardData.map((data, index) => (
              <CheckOut key={index} data={data} />
            ))}
          </div>
          <CheckOut totalData={totalData} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
