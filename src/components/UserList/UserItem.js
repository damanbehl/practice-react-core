// import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    //<div className={styles["user-item"]}>
    <li>
      <label>{`${props.user.name} (${props.user.age} Years old)`}</label>
    </li>
    //</div>
  );
};
export default UserItem;
