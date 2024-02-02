import React from "react";
import { FaStar } from "react-icons/fa6";
import HeaderSection from "../HeaderSection/HeaderSection";
import { productsSectionData, ProductsData } from "./ProductsData";

const Products = () => {
  return (
    <div name="products" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <HeaderSection sectionData={productsSectionData} />
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 cursor-pointer group"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md group-hover:scale-105"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
