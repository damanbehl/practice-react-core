import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    props.showModal && (
      <div className={styles.modal}>
        <div>{props.text}</div>
        <button onClick={props.onClose}>close</button>
      </div>
    )
  );
};
export default Modal;
