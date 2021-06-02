import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
// import Modal from "./components/UI/Modal";
import NewModal from "./components/UI/NewModal";
import Wrapper from "./components/Helper/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const [isInputValid, setIsInputValid] = useState(true);
  const [modalText, setModalText] = useState("");
  const addUserHandler = (userData) => {
    userData = { ...userData, id: "u" + (userList.length + 1).toString() };
    console.log(userData);
    setUserList((prevList) => [userData, ...prevList]);
  };

  const invalidInputHandler = (message) => {
    setIsInputValid(false);
    setModalText({ message: message, title: "oops! an error" });
  };

  const closeModalHandler = (message) => {
    setIsInputValid(true);
    setModalText("");
  };

  return (
    // <div>
    <>
      <NewModal
        showModal={!isInputValid}
        text={modalText.message}
        title={modalText.title}
        onClose={closeModalHandler}
      />
      <UserInput
        onAddUser={addUserHandler}
        onInvalidInput={invalidInputHandler}
      />
      {userList.length > 0 && <UserList items={userList} />}
    </>
    // </div>
  );
}

export default App;
