import { useState } from "react";

import "./Work.css";
import JsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";
import thumb_1x1 from "../../assets/img/thumb/1-1.jpg";
import w1 from "../../assets/img/work/w1.jpg";
import Modal from "../../components/Modal/Modal";
import blog_1 from '../../assets/img/blog/2.jpg';
import thumb_4x2 from '../../assets/img/thumb/4-2.jpg';

const Work = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const portfolioData = JsonData.portfolio;

  const openHandler = (index) => {
    setCurrentIndex(index);
    setIsOpened(true);
    console.log(index,"index");
  }

  const closeHandler = () => {
    setIsOpened(false);
  }

  return (
    <>
      <Section id="portfolio">
        <div className="vtr_tm_portfolio vtr_section_padding">
          <div className="container">
            <div className="vtr_tm_main_title" data-text-align="center">
              <span>{portfolioData.title}</span>
              <h3>{portfolioData.heading}</h3>
              <p>
                {portfolioData.desc}
              </p>
            </div>
            <div
              className="portfolio_list vtr_slider fadeInUp"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <ul
                className="gallery_zoom grid"
              >
                {portfolioData.list.map((item,index)=>(
                  <li
                    key={index}
                    className="grid-item vtr_cursor_ptr"
                    onClick={openHandler.bind(null,index)}
                  >
                    <div className="list_inner">
                      <div className="image">
                        <img src={thumb_1x1} alt={item.alt} />
                        <div
                          className="main"
                          data-img-url="img/portfolio/1.jpg"
                          style={{backgroundImage: `url(${w1})`}}
                        ></div>
                      </div>
                      <div className="details">
                        <span className="category">{item.category}</span>
                        <p className="title">{item.title}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Modal isOpen={isOpened} isClose={closeHandler}>
        <div className="modal_popup_informations">
          <div className="image">
            <img src={thumb_4x2} alt={portfolioData.list[currentIndex].popup.alt} />
            <div
              className="main"
              style={{backgroundImage: `url(${blog_1})`}}
              data-img-url="img/modal/2.jpg"
            ></div>
          </div>
          <div className="details">
            <h3>{portfolioData.list[currentIndex].popup.title}</h3>
            <span>
              <a href="/">{portfolioData.list[currentIndex].popup.subtitle}</a>
            </span>
            <div></div>
          </div>
          <div className="text">
            {portfolioData.list[currentIndex].popup.desc.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Work;
