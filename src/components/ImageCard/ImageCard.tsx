import css from "./ImageCard.module.css";

interface Props {
  image: {
    alt_description: string;
    urls: { small: string };
  };
  onImageClick: (image: any) => void;
}

const ImageCard = ({ image, onImageClick }: Props) => {
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
