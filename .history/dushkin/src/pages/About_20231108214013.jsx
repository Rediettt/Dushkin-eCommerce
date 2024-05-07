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
      
    </div>
  );
}

export default About;
