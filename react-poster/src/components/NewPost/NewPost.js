import classes from './NewPost.module.css';

function NewPost({onBodyChange, onNameChange, onClose}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onClose}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;