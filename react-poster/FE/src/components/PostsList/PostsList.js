import { useState, useEffect } from "react";

import classes from "./PostsList.module.css";
import Post from "../Post/Post";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  // calling fetch here will re-render the dom as data is updated
  // when it rerenders it will reload and it will again call fetch
  // this will cause infinite loop - to tackle this sideeffect we use a hook
  // useEffect hook

  // fetch('http://localhost:8080/posts').then(res => res.json()).then((data) => {
  //   setPosts(data.posts);
  // });

  // Its preventing infinite loop from occuring
  // It doesn't take a function that returns a promise instead it deals with void or say cleanup code
  
  /**
   * when does this execute ?
   * It executes based on second argument 
   * second argument can be dependency like function or variable so whenever it will change this useEffect will trigger
   * As we passed [] so it only executes once as it doesn't have any dependencies
   * */ 
  useEffect(() => {
    async function fetchPosts(){
      setIsFetching(true);
      let response;
      try{
        response = await fetch('http://localhost:8080/posts');
      }catch(error) {
        setIsError(true);
        console.error('There was an error', error);
      }
      if(response?.ok){
        const resData = await response.json();
        setPosts(resData.posts);
        setIsFetching(false);
      }
    }
    fetchPosts();
  },[]);

  function addPostHandler(postData) {
    let response;
    try{
      response = fetch('http://localhost:8080/posts', {
        method:'POST',
        body: JSON.stringify(postData),
        headers:{
          'Content-Type': 'application/json'
        }
      });
    }catch(error)  {
      setIsError(true);
      console.error('There was an error', error);
    }
    if(response?.ok){
      // technically the best way to use callback
      // when updation depends on previous state
      setPosts((exisitingPost) => [postData, ...exisitingPost]);
    }
  }
  
  return (
    <>
      {!isError && !isFetching && posts.length && ( 
        <ul className={classes.posts}>
          {posts.map((post, i) => (
            <Post key={i} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isError && !isFetching && !posts.length && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>There are no posts added.</h2>
          <p>Start adding one!!</p>
        </div>
      )}
      {!isError && isFetching && (
        <div style={{textAlign:'center', color:'white'}}>
          <p>Loading...</p>
        </div>
      )}
      {isError && !isFetching && (
        <div style={{textAlign:'center', color:'red'}}>
          <p>Something went wrong...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
