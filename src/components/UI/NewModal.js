import styles from "./NewModal.module.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.onClose}></div>
);

const ModalOverlay = (props) => (
  <Card classes={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.text}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onClose}>close</Button>
    </footer>
  </Card>
);

const NewModal = (props) => {
  return (
    props.showModal && (
      <>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            text={props.text}
            onClose={props.onClose}
          />,
          document.getElementById("overlay-root")
        )}
      </>
    )
  );
};

export default NewModal;
