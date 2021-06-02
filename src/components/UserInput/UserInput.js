// import Card from "../UI/Card";
import { useState } from "react";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      props.onInvalidInput("You didn't enter a name");
      return;
    }
    if (+enteredAge.trim() < 1 || enteredAge.trim().length === 0) {
      let errorMessage = !enteredAge.trim().length
        ? "please enter age"
        : "age cannot be  negative";
      props.onInvalidInput(errorMessage);
      return;
    }
    const userData = {
      name: enteredName,
      age: +enteredAge.trim(),
    };
    console.log("inside submit handler\t" + userData);
    props.onAddUser(userData);
    setEnteredAge("");
    setEnteredName("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} className={styles["user-input__form"]}>
      <div className={styles["user-input__controls"]}>
        <div className={styles["user-input__control"]}>
          <label>Username:</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="please enter your name"
          />
        </div>
        <div className={styles["user-input__control"]}>
          <label>Age:</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            placeholder="please enter your age"
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
