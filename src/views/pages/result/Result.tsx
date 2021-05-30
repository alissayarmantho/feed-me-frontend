import React, { useState } from "react";
import FoodPlaceCard from "../../components/FoodPlaceCard/FoodPlaceCard";
import MapContainer from "../../components/MapContainer/MapContainer";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Result.scss";

const Result: React.FC = () => {
  const [searchPlace, setSearchPlace] = useState<string>("");
  const handleClick = () => console.log("Hello World");
  var date = new Date();
  return (
    <div className="mainContainer">
      <div className="mapWrapper">
        <MapContainer />
      </div>
      <div className="resultListWrapper">
        <div className="searchPlace">
          <SearchBox
            value={searchPlace}
            placeholder="Type your location here"
            onChange={(e) => setSearchPlace(e.target.value)}
          />
        </div>
        <FoodPlaceCard
          imageArray={[
            "https://i.ibb.co/Jct7bBZ/kfc.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
          ]}
          title="KFC"
          location="Buona Vista"
          rating={5}
          foodTypes={["Fast Food", "Fried Chicken"]}
          servingTime={[date, date]}
        ></FoodPlaceCard>
        <FoodPlaceCard
          imageArray={[
            "https://i.ibb.co/Jct7bBZ/kfc.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
          ]}
          title="KFC"
          location="Buona Vista"
          rating={5}
          foodTypes={["Fast Food", "Fried Chicken"]}
          servingTime={[date, date]}
        ></FoodPlaceCard>
        <FoodPlaceCard
          imageArray={[
            "https://i.ibb.co/Jct7bBZ/kfc.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
            "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
          ]}
          title="KFC"
          location="Buona Vista"
          rating={5}
          foodTypes={["Fast Food", "Fried Chicken"]}
          servingTime={[date, date]}
        ></FoodPlaceCard>
      </div>
    </div>
  );
};

export default Result;
