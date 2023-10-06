import { useState } from 'react';

import './Modal.css';
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({children}) => {
  const [isClosed, setIsClosed] = useState(true);

  const closeHandler = () => {
    setIsClosed(true); 
  }
  
  return (
    <>
      <div className={`vtr_tm_modalbox ${!isClosed ? 'opened' : ''}`}>
        <div className="box_inner">
          <div className="close vtr_cursor_ptr" onClick={closeHandler}>
            <div>
              <AiOutlineClose />
            </div>
          </div>
          <div className="description_wrap">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
