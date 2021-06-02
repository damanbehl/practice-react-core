import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card classes={styles["users"]}>
      <ul>
        {props.items.map((item) => (
          <UserItem id={item.id} key={item.id} user={item} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
