import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import classes from './NewPost.module.css';

function NewPost({onAddPost, onClose}) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredNameValue, setEnteredNameValue] = useState("");

  function changeBodyHandler(event) {
    setEnteredValue(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredNameValue(event.target.value);
  }

  function submitHandler(event) {
    // prevents browser from generating and sending http request
    event.preventDefault();
    const postData = {
      body: enteredValue,
      author: enteredNameValue
    };
    onAddPost(postData);
    onClose();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNameHandler} />
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;