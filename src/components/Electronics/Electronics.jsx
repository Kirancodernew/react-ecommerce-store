import React from "react";
import Stars from "./Stars";
import { useGlobalContext } from "../../store/auth";
import {electronicSectionData,ProductsData} from './ElectronicsData';
import HeaderSection from "../HeaderSection/HeaderSection";


const Electronics = () => {
  const { handleOrderPopup } = useGlobalContext();
  return (
    <div
      name="electronics"
      className="py-14  bg-gray-100 dark:bg-gray-950 dark:text-white duration-200"
    >
      <div className="container">
        {/* Header section */}
        <HeaderSection sectionData={electronicSectionData}/>
        {/* Body section */}
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-4 max-w-[300px] flex flex-col justify-center items-center p-6 "
              >
                <div className="relative">
                  <img
                    src={data.img}
                    alt=""
                    className="h-60 object-contain rounded-md"
                  />
                  <Stars starts={data.rating} />
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className=" my-2 font-bold">Price: {data.price}</p>
                </div>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
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

export default Electronics;
