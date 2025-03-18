import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Автор: {image.user.name}</p>
        <button className={css.closeButton} onClick={onRequestClose}>
          Закрити
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
