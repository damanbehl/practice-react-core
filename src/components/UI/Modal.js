import styles from "./Modal.module.css";
import Button from "./Button";
const Modal = (props) => {
  return (
    props.showModal && (
      <div className={styles.modal}>
        <div>{props.text}</div>
        <Button onClick={props.onClose}>close</Button>
      </div>
    )
  );
};
export default Modal;
