import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ starts }) => {
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {starts >= index + 1 ? (
          <FaStar />
        ) : starts >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return <div className="flex absolute -top-6 left-0 text-yellow-400">{ratingStars}</div>;
};

export default Stars;