import CustomButton from "../CustomButton/CustomButton";
import Rating from "../Rating/Rating";
import ImageCaroussel from "../ImageCaroussel/ImageCaroussel";
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
      <ImageCaroussel imageArray={imageArray} />
      <div>{title}</div>
      <div className="locationAndRating">
        <div className="location">{location + " • "}</div>
        <Rating ratingValue={rating}></Rating>
      </div>
      <div>{foodTypes.join(" • ")}</div>
      <div>
        {servingTime[0].toLocaleTimeString() +
          " - " +
          servingTime[1].toLocaleTimeString()}
      </div>
      <CustomButton
        label="reserve-button"
        onClick={handleClick}
        content="Reserve My Spot"
      ></CustomButton>
    </div>
  );
};

export default FoodPlaceCard;
