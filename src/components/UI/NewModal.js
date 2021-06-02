import styles from "./NewModal.module.css";
import Button from "./Button";
import Card from "./Card";
const NewModal = (props) => {
  return (
    props.showModal && (
      <div>
        <div className={styles.backdrop} onClick={props.onClose}></div>
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
      </div>
    )
  );
};

export default NewModal;
