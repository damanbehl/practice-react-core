import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    userData = { ...userData, id: "u" + (userList.length + 1).toString() };
    console.log(userData);
    setUserList((prevList) => [userData, ...prevList]);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList items={userList} />}
    </div>
  );
}

export default App;
