import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.card} onClick={() => onImageClick(image)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
