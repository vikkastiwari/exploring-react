
import './Modal.css';
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({children, isOpen, isClose}) => {
  const closeHandler = () => {
    isClose();
  }
  
  return (
    <div className={`vtr_tm_modalbox ${isOpen ? 'opened' : ''}`}>
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
  );
};

export default Modal;
