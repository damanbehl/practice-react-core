import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card classes={styles["user-list"]}>
      {props.items.map((item) => (
        <UserItem id={item.id} key={item.id} user={item} />
      ))}
    </Card>
  );
};

export default UserList;
