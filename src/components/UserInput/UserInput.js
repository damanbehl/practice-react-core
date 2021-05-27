// import Card from "../UI/Card";
import { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // if(enteredName.trim().length==0){

    // }
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    console.log("inside submit handler");
    props.onAddUser(userData);
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
            onChange={nameChangeHandler}
            placeholder="please enter your name"
          />
        </div>
        <div className={styles["user-input__control"]}>
          <label>Age:</label>
          <input
            type="number"
            onChange={ageChangeHandler}
            placeholder="please enter your age"
          />
        </div>
      </div>
      <div className={styles["new-user"]}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default UserInput;
