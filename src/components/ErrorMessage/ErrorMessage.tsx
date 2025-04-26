import css from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorMessage}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
