import "./ImageCaroussel.scss";

type Props = {
  imageArray: Array<string>;
};
const ImageCaroussel: React.FC<Props> = ({ imageArray }) => {
  return (
    <div className="container">
      <div className="imageContainer">
        {imageArray.map((source, index) => (
          <img className="imageStyles" src={source} key={index} alt="..." />
        ))}
      </div>
    </div>
  );
};

export default ImageCaroussel;
