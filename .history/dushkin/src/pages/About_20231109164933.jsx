import React from "react";
import image from "../assets/AboutImage.png"; 

function About() {
    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(sessionStorage.getItem("cart"));
        return storedCart ? storedCart : [];
      });
    
      const [addedToCartMessage, setAddedToCartMessage] = useState(false);
    
      useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
      const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        setAddedToCartMessage(true);
    
        // Remove the "Added to Cart" message after a few seconds
        setTimeout(() => {
          setAddedToCartMessage(false);
        }, 3000);
      };
    
      const removeFromCart = (index) => {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          updatedCart.splice(index, 1);
          return updatedCart;
        });
      };
    
  const courses = [];
  return (
    <div className=" w-full p-4 md:p-12">
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
      </div>
      <div className="hidden sm:mb-8 sm:flex justify-center">
        <div>
          <img src={image} alt="" className="w-2/4 mb-8 lg:mb-0 lg:mr-2" />
        </div>
        <div className="px-1">
          <h1 className="text-5xl text-[#36454F] font-semibold py-8">
            About Us
          </h1>
          <p
            className="w-3/4"
            style={{ fontSize: "16px", lineHeight: "1.5", color: "#000000" }}
          >
            At Dushkin Ecommerce, we are passionate about providing you with the
            best shopping experience. Our mission is to offer a wide range of
            high-quality products that cater to your needs and preferences. With
            a focus on customer satisfaction, we are committed to delivering
            top-notch service and ensuring that you have a seamless and
            enjoyable shopping journey.
          </p>
        </div>
      </div>
      <div className="h-screen pt-20 py-10">
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
        </div>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {addedToCartMessage && (
          <div className="bg-green-100 p-2 text-green-700 mb-4 text-center">
            Item added to cart!
          </div>
        )}
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={Image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-[#36454F] py-1 px-3.5 duration-100 hover:bg-[#A4D8C2] hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-[#36454F] py-1 px-3 duration-100 hover:bg-[#A4D8C2] hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="hidden">₹ 5,999</p>
                    <button
                      onClick={() => addToCart("Nike Air Max 2019")}
                      className="bg-[#36454F] hover:bg-[#A4D8C2] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={Image2}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Skin Care Product
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">50ml</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-[#36454F] py-1 px-3.5 duration-100 hover:bg-[#A4D8C2] hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="1"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-[#36454F] py-1 px-3 duration-100 hover:bg-[#A4D8C2] hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="hidden">₹ 999</p>
                    <button
                      onClick={() => addToCart("Skin Care Product")}
                      className="bg-[#36454F] hover:bg-[#A4D8C2] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md w-full md:w-1/3">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Shopping Cart
            </h3>
            {cart.length > 0 ? (
              <div>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <p>{item}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <hr className="my-4" />
                <div className="flex justify-between font-bold">
                  <p>Total:</p>
                  <p>{cart.length}</p>
                </div>
              </div>
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
