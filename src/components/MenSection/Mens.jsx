import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BsLightning } from "react-icons/bs";
import { useGlobalContext } from "../../store/auth";
import HeaderSection from "../HeaderSection/HeaderSection";
import { MensWear,sectionData } from "./MensData";
import Img6 from "../../assets/men/img6.webp"

const Mens = () => {
  const { handleOrderPopup } = useGlobalContext();
  return (
    <div name="mens" className="pb-14 ">
      <div className="container mx-auto">
        {/* Header section */}  
        <HeaderSection sectionData={sectionData}/>
        {/* Body Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left section */}
          <div className="h-full flex justify-center items-center my-2 ">
            <div
              data-aos="zoom-out"
             className="w-[300px] md:w-[400px] ">
              <div>
                <img
                  src={Img6}
                  alt=""
                  className="object-contain h-[300px] md:h-[500px] rounded-lg mx-auto"
                />
              </div>
              <div className="w-fit mx-auto mt-4">
                <h3 className="font-semibold">Black Jacket</h3>
                <p className=" my-2 font-bold">Price: ₹3499</p>
              </div>

              <div className="flex justify-evenly my-6">
                <button className="flex items-center bg-primary hover:scale-105 duration-300 text-white p-3  rounded-full  group-hover:bg-white group-hover:text-primary text-sm">
                  <span className="mx-2">
                    <FaCartShopping />
                  </span>
                  ADD TO CART
                </button>
                <button className="flex items-center bg-primary hover:scale-105 duration-300 text-white p-4 rounded-full  group-hover:bg-white group-hover:text-primary">
                  
                  <span className="mx-2">
                    <BsLightning />
                  </span>
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {/* card section */}
            {MensWear.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-4 max-w-[300px] flex flex-col justify-center items-center p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 "
              >
                <div
                 className="relative">
                  <img
                    src={data.img}
                    alt=""
                    className="h-60 object-contain rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className=" my-2 font-bold">Price: {data.price}</p>
                </div>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 p-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mens;
