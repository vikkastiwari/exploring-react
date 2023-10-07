import "./Work.css";
import JsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";

import thumb_1x1 from "../../assets/img/thumb/1-1.jpg";
import w1 from "../../assets/img/work/w1.jpg";
import Modal from "../../components/Modal/Modal";
import blog_1 from '../../assets/img/blog/2.jpg';
import thumb_4x2 from '../../assets/img/thumb/4-2.jpg';

const Work = () => {

  const portfolioData = JsonData.portfolio;

  return (
    <>
      <Section>
        <div className="vtr_tm_portfolio">
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
              data-wow-duration="1s"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <ul
                className="gallery_zoom grid"
                // style="position: relative; height: 847.968px;"
              >
                {portfolioData.list.map((item,index)=>(
                  <li
                    key={index}
                    className="grid-item"
                    // style="position: absolute; left: 0px; top: 0px;"
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
      <Modal>
        <div className="modal_popup_informations">
          <div className="image">
            <img src={thumb_4x2} alt="" />
            <div
              className="main"
              style={{backgroundImage: `url(${blog_1})`}}
              data-img-url="img/modal/2.jpg"
            ></div>
          </div>
          <div className="details">
            <h3>How to be appreciated for your hard work as a developer</h3>
            <span>
              <a href="/">Branding</a>
            </span>
            <div></div>
          </div>
          <div className="text">
            <p>
              vtr is a leading web design agency with an award-winning
              design team that creates innovative, effective websites that
              capture your brand, improve your conversion rates, and
              maximize your revenue to help grow your business and achieve
              your goals.
            </p>
            <p>
              In today’s digital world, your website is the first
              interaction consumers have with your business. That's why
              almost 95 percent of a user’s first impression relates to web
              design. It’s also why web design services can have an immense
              impact on your company’s bottom line.
            </p>
            <p>
              That’s why more companies are not only reevaluating their
              website’s design but also partnering with Kura, the web design
              agency that’s driven more than $2.4 billion in revenue for its
              clients. With over 50 web design awards under our belt, we're
              confident we can design a custom website that drives sales for
              your unique business.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Work;
