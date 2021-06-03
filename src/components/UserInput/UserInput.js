// import Card from "../UI/Card";
import { useRef } from "react";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const nameEntered = nameInputRef.current.value;
    const ageEntered = ageInputRef.current.value;
    if (nameEntered.trim().length === 0) {
      props.onInvalidInput("You didn't enter a name");
      return;
    }
    if (+ageEntered.trim() < 1 || ageEntered.trim().length === 0) {
      let errorMessage = !ageEntered.trim().length
        ? "please enter age"
        : "age cannot be  negative";
      props.onInvalidInput(errorMessage);
      return;
    }
    const userData = {
      name: nameEntered,
      age: +ageEntered.trim(),
    };
    console.log("inside submit handler\t" + userData);
    props.onAddUser(userData);
    //resetting the form
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={styles["user-input__form"]}>
      <div className={styles["user-input__controls"]}>
        <div className={styles["user-input__control"]}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="please enter your name"
            ref={nameInputRef}
          />
        </div>
        <div className={styles["user-input__control"]}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            placeholder="please enter your age"
            ref={ageInputRef}
          />
        </div>
      </div>
      <div className={styles["new-user"]}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
export default UserInput;
