import { useState } from "react";

import classes from "./PostsList.module.css";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostsList(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredNameValue, setEnteredNameValue] = useState("");

  function changeBodyHandler(event) {
    setEnteredValue(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredNameValue(event.target.value);
  }

  return (
    <>
      {props.modalIsVisible ? (
        <Modal onHideModal={props.onCloseModal}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onNameChange={changeNameHandler}
            onClose={props.onCloseModal}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredNameValue} body={enteredValue} />
        <Post author={enteredNameValue} body={enteredValue} />
        <Post author={enteredNameValue} body={enteredValue} />
        <Post author={enteredNameValue} body={enteredValue} />
      </ul>
    </>
  );
}

export default PostsList;
