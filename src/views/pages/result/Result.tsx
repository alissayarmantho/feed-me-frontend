import React, { useState } from "react";
import FoodPlaceCard from "../../components/FoodPlaceCard/FoodPlaceCard";
import MapContainer from "../../components/MapContainer/MapContainer";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Search, ChevronLeft } from "react-feather";
import "./Result.scss";

var date = new Date();
const fillerValues = [
  {
    imageArray: [
      "https://i.ibb.co/Jct7bBZ/kfc.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
    ],
    title: "KFC",
    location: "Buona Vista",
    rating: 5,
    foodTypes: ["Fast Food", "Fried Chicken"],
    servingTime: [date, date],
  },
  {
    imageArray: [
      "https://i.ibb.co/Jct7bBZ/kfc.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
    ],
    title: "KFC",
    location: "Buona Vista",
    rating: 5,
    foodTypes: ["Fast Food", "Fried Chicken"],
    servingTime: [date, date],
  },
  {
    imageArray: [
      "https://i.ibb.co/Jct7bBZ/kfc.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
    ],
    title: "KFC",
    location: "Buona Vista",
    rating: 5,
    foodTypes: ["Fast Food", "Fried Chicken"],
    servingTime: [date, date],
  },
  {
    imageArray: [
      "https://i.ibb.co/Jct7bBZ/kfc.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
    ],
    title: "KFC",
    location: "Buona Vista",
    rating: 5,
    foodTypes: ["Fast Food", "Fried Chicken"],
    servingTime: [date, date],
  },
  {
    imageArray: [
      "https://i.ibb.co/Jct7bBZ/kfc.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
      "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
    ],
    title: "KFC",
    location: "Buona Vista",
    rating: 5,
    foodTypes: ["Fast Food", "Fried Chicken"],
    servingTime: [date, date],
  },
];

const Result: React.FC = () => {
  const [searchPlace, setSearchPlace] = useState<string>("");
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="mainContainer">
      <div className="mapWrapper">
        <MapContainer />
      </div>
      <div className="resultListWrapper">
        {isOpen ? (
          <div className="searchPlaceBox">
            <div className="return" onClick={handleClick}>
              <ChevronLeft />
            </div>
            <SearchBox
              value={searchPlace}
              placeholder="Type your location here"
              onChange={(e) => setSearchPlace(e.target.value)}
            />
          </div>
        ) : (
          <div className="search" onClick={handleClick}>
            <Search />
          </div>
        )}
        {fillerValues.map((value, index) => (
          <div key={index}>
            <FoodPlaceCard
              imageArray={value.imageArray}
              title={value.title}
              location={value.location}
              rating={value.rating}
              foodTypes={value.foodTypes}
              servingTime={value.servingTime}
            ></FoodPlaceCard>
            {index !== fillerValues.length - 1 && <hr className="lineBreak" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
