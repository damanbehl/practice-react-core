import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={styles["user-item"]}>
      <label>{`${props.user.name} (${props.user.age} Years old)`}</label>
    </div>
  );
};
export default UserItem;
