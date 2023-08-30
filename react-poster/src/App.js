import { useState } from 'react';

import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import PostsList from './components/PostsList/PostsList';

function App() {
  const [modalIsVisible , setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} ></MainHeader>
      <main>
        <PostsList modalIsVisible={modalIsVisible} onCloseModal={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
