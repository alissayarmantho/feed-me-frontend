import React from "react";
import { Star } from "react-feather";
import "./Rating.scss";

type Props = {
  ratingValue: number;
};

const Rating: React.FC<Props> = ({ ratingValue }) => {
  return (
    <div>
      <Star className="starIcon"></Star>
      <span className="ratingVal">{ratingValue}</span>
    </div>
  );
};

export default Rating;
