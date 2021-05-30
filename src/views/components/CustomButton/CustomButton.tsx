import Button from "react-bootstrap/Button";
import classnames from "classnames";
import "./CustomButton.scss";

type Props = {
  label: string;
  content: string;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = ({ label, onClick, content }) => {
  return (
    <Button
      type="button"
      className={classnames("btn btn-dark btn-lg shadow-none", "searchButton")}
      aria-label={label}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
