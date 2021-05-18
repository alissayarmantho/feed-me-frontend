import Button from "react-bootstrap/Button";
import classnames from "classnames";
import { X } from "react-feather";
import "./Booking.scss";

const Booking: React.FC = () => {
  const handleClick = () => console.log("Hello World");
  return (
    <Button
      type="button"
      className={classnames("btn btn-outline-secondary btn-svg", "delete")}
      aria-label="button"
      onClick={handleClick}
    >
      <X className="X" />
    </Button>
  );
};

export default Booking;
