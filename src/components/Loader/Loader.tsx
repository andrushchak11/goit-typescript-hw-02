import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

export default Loader;
