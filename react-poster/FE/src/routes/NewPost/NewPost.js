// import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import classes from './NewPost.module.css';

function NewPost({onAddPost, onClose}) {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [enteredNameValue, setEnteredNameValue] = useState("");

  // function changeBodyHandler(event) {
  //   setEnteredValue(event.target.value);
  // }

  // function changeNameHandler(event) {
  //   setEnteredNameValue(event.target.value);
  // }

  // function submitHandler(event) {
    // prevents browser from generating and sending http request
    // event.preventDefault();

    // const postData = {
    //   body: enteredValue,
    //   author: enteredNameValue
    // };
    
    // onAddPost(postData);
    // onClose();
  // }

  return (
    <Modal>
     <Form method="post" className={classes.form}>  {/* onSubmit={submitHandler} */}
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} /> {/*  onChange={changeBodyHandler}  */}
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required /> {/* onChange={changeNameHandler}  */}
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// It receives data from the router module automatically
export async function action({request}){
  const formData = await request.formData();
  const postData  = Object.fromEntries(formData); // returns {body:'', author:''}
  try{
    await fetch('http://localhost:8080/posts', {
      method:'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }catch(error)  {
    console.error('There was an error', error);
  }

  // It returns the result of the calling function
  return redirect('/');
}