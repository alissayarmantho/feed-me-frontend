import Button from "react-bootstrap/Button";
import FoodPlaceCard from "../../components/FoodPlaceCard/FoodPlaceCard";
import MapContainer from "../../components/MapContainer/MapContainer";
import classnames from "classnames";
import { X } from "react-feather";
import "./Result.scss";

const Result: React.FC = () => {
  const handleClick = () => console.log("Hello World");
  var date = new Date();
  return (
    <div>
      <MapContainer />
      <FoodPlaceCard
        imageArray={[
          "https://i.ibb.co/Jct7bBZ/kfc.jpg",
          "https://i.ibb.co/0Y3BNm9/kfc2.jpg",
        ]}
        title="KFC"
        location="Buona Vista"
        rating={5}
        foodTypes={["Fast Food", "Fried Chicken"]}
        servingTime={[date, date]}
      ></FoodPlaceCard>
      <Button
        type="button"
        className={classnames("btn btn-outline-secondary btn-svg", "delete")}
        aria-label="button"
        onClick={handleClick}
      >
        <X className="X" />
      </Button>
    </div>
  );
};

export default Result;
