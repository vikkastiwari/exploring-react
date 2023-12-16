import { useState } from "react";

import "./ProjectCard.css";
import thumb_1x1 from "../../../assets/img/thumb/1-1.jpg";
import Modal from "../../Modal/Modal";
import thumb_4x2 from "../../../assets/img/thumb/4-2.jpg";
import ProjectJsonData from "../../../assets/data/project-content.json";

const ProjectCard = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const portfolioData = ProjectJsonData;

  const openHandler = (index) => {
    setCurrentIndex(index);
    setIsOpened(true);
    console.log(index, "index");
  };

  const closeHandler = () => {
    setIsOpened(false);
  };

  return (
    <>
      <div
        className="vtr_project_card_wrapper vtr_cursor_ptr"
        onClick={openHandler.bind(null, props.index)}
      >
        <div className="image">
          <img src={thumb_1x1} alt={props.item.alt} />
          <div
            className="main"
            data-img-url="img/portfolio/1.jpg"
            style={{
              backgroundImage: `url(${require(`../../../assets/img/work/${props.item.src}`)})`,
            }}
          ></div>
        </div>
        <div className="details vtr_whitespace_normal">
          <span className="category">{props.item.title}</span>
          <p className="title">{props.item.category}</p>
        </div>
      </div>

      <Modal isOpen={isOpened} isClose={closeHandler}>
        <div className="modal_popup_informations">
          <div className="image">
            <img
              src={thumb_4x2}
              alt={portfolioData.projectPageData[currentIndex].popup.alt}
            />
            <div
              className="main"
              style={{
                backgroundImage: `url(${require(`../../../assets/img/work/${portfolioData.projectPageData[currentIndex].popup.src}`)})`,
              }}
              data-img-url="img/modal/2.jpg"
            ></div>
          </div>
          <div className="details">
            <h3>{portfolioData.projectPageData[currentIndex].popup.title}</h3>
            <span>
              <a href={portfolioData.projectPageData[currentIndex].popup.url} target="_blank" rel="noreferrer">
                {portfolioData.projectPageData[currentIndex].popup.subtitle}
              </a>
            </span>
            <div></div>
          </div>
          <div className="text">
            {portfolioData.projectPageData[currentIndex].popup.desc.map(
              (item, index) => (
                <p key={index}>{item}</p>
              )
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
