import React from "react";

const HeaderSection = ({sectionData}) => {
  return (
    <div className="text-center mb-20 max-w-[600px] mx-auto">
      <p data-aos="fade-up" className="text-sm text-primary">
        {sectionData.subTitle}
      </p>
      <h1 data-aos="fade-up" className="text-3xl font-bold">
        {sectionData.title}
      </h1>
      <p data-aos="fade-up" className="text-xs text-gray-400">
        {sectionData.description}
      </p>
    </div>
  );
};

export default HeaderSection;
