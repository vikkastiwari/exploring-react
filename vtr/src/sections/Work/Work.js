import "./Work.css";
import Section from "../../components/Section/Section";

import thumb_1x1 from "../../assets/img/thumb/1-1.jpg";
import w1 from "../../assets/img/work/w1.jpg";

const Work = () => {
  return (
    <Section>
      <div className="vtr_tm_portfolio">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
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
              {/* <li className="grid-sizer"></li> */}
              <li
                className="grid-item"
                // style="position: absolute; left: 0px; top: 0px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/1.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Youtube</span>
                    <p className="title">Drawing Art</p>
                  </div>
                  <a
                    className="vtr_tm_full_link popup-youtube"
                    href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                  >{}</a>
                </div>
              </li>
              <li
                className="grid-item"
                // style="position: absolute; left: 314.984px; top: 0px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/2.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Vimeo</span>
                    <p className="title">Lafayette Fly</p>
                  </div>
                  <a
                    className="vtr_tm_full_link popup-vimeo"
                    href="//player.vimeo.com/video/337293658?autoplay=1"
                  >{}</a>
                </div>
              </li>
              <li
                className="grid-item"
                // style="position: absolute; left: 629.968px; top: 0px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/3.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Soundcloud</span>
                    <p className="title">Emotional Music</p>
                  </div>
                  <a
                    className="vtr_tm_full_link soundcloude_link mfp-iframe audio"
                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                  >{}</a>
                </div>
              </li>
              <li
                className="grid-item"
                // style="position: absolute; left: 0px; top: 423.984px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/4.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Popup</span>
                    <p className="title">Deo Sumbara</p>
                  </div>
                  <a
                    className="vtr_tm_full_link zoom"
                    href="img/portfolio/4.jpg"
                  >{}</a>
                </div>
              </li>
              <li
                className="grid-item"
                // style="position: absolute; left: 314.984px; top: 423.984px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/5.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Details</span>
                    <p className="title">Product Design</p>
                  </div>
                  <a href="img/portfolio/5.jpg" className="vtr_tm_full_link portfolio_popup c-pointer">{}</a>
                </div>
              </li>
              <li
                className="grid-item"
                // style="position: absolute; left: 629.968px; top: 423.984px;"
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_1x1} alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/6.jpg"
                      style={{backgroundImage: `url(${w1})`}}
                    ></div>
                  </div>
                  <div className="details">
                    <span className="category">Popup</span>
                    <p className="title">Mockup Shape</p>
                  </div>
                  <a
                    className="vtr_tm_full_link zoom"
                    href="img/portfolio/6.jpg"
                  >{}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
