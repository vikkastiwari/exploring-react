import { useState } from "react";

import classes from "./PostsList.module.css";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostsList({ modalIsVisible, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // technically the best way to use callback
    // when updation depends on previous state
    setPosts((exisitingPost) => [postData, ...exisitingPost]);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onHideModal={onCloseModal}>
          <NewPost onAddPost={addPostHandler} onClose={onCloseModal} />
        </Modal>
      ) : null}
      {posts.length && ( 
        <ul className={classes.posts}>
          {posts.map((post, i) => (
            <Post key={i} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!posts.length && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>There are no posts added.</h2>
          <p>Start adding one!!</p>
        </div>
      )}
      
    </>
  );
}

export default PostsList;
