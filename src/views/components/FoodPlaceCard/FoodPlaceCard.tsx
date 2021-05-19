import Button from "react-bootstrap/Button";
import classnames from "classnames";
import { X } from "react-feather";
import Rating from "../Rating/Rating";
import "./FoodPlaceCard.scss";

type Props = {
  imageArray: Array<string>;
  title: string;
  location: string;
  rating: number;
  foodTypes: Array<String>;
  servingTime: Array<Date>;
};

const FoodPlaceCard: React.FC<Props> = ({
  imageArray,
  title,
  location,
  rating,
  foodTypes,
  servingTime,
}) => {
  const handleClick = () => console.log("Hello World");
  return (
    <div className="container">
      <Rating ratingValue={rating}></Rating>
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

export default FoodPlaceCard;
