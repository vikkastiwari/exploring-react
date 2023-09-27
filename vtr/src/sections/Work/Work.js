import './Work.css';
import Section from "../../components/Section/Section";

import thumb_42x56 from '../../assets/img/thumb/42-56.jpg';
import thumb_42x34 from '../../assets/img/thumb/42-34.jpg';
import w1 from '../../assets/img/work/w1.jpg';
import w2 from '../../assets/img/work/w2.jpg';

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
          {/* <div className="portfolio_filter">
            <ul>
              <li>
                <a className="c-pointer current">All</a>
              </li>
              <li>
                <a className="c-pointer ">Youtube</a>
              </li>
              <li>
                <a className="c-pointer ">Vimeo</a>
              </li>
              <li>
                <a className="c-pointer ">Soundcloud</a>
              </li>
              <li>
                <a className="c-pointer ">Popup</a>
              </li>
              <li>
                <a className="c-pointer  ">Detail</a>
              </li>
            </ul>
          </div> */}
          <div
            className="vtr_tm_portfolio_titles"
            style={{left: '1004px', top: '319px'}}
          >
            Magic Art<span className="work__cat">Soundcloud</span>
          </div>
          <div
            className="portfolio_list wow fadeInUp"
            data-wow-duration="1s"
            style={{visibility: 'visible', animationDuration: '1s'}}
          >
            <ul
              className="gallery_zoom grid"
              style={{position: 'relative', height: '792.828px'}}
            >
              <li
                className="youtube grid-item"
                style={{position: 'absolute', left: '0%', top: '0px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    >
                      <img src={thumb_42x56} alt="thumb_42x56" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                        style={{backgroundImage: `url(${w1})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li
                className="vimeo grid-item"
                style={{position: 'absolute', left: '33.3317%', top: '0px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src={thumb_42x34} alt="thumb" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                        style={{backgroundImage: `url(${w2})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li
                className="soundcloud grid-item"
                style={{position: 'absolute', left: '66.6634%', top: '0px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                    >
                      <img src={thumb_42x56} alt="thumb" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                        style={{backgroundImage: `url(${w1})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li>
              <li
                className="popup grid-item"
                style={{position: 'absolute', left: '33.3317%', top: '287px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src={thumb_42x56} alt="thumb" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                        style={{backgroundImage: `url(${w1})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li
                className="popup grid-item"
                style={{position: 'absolute', left: '0%', top: '461px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={thumb_42x34} alt="thumb" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                        style={{backgroundImage: `url(${w2})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li
                className="detail grid-item"
                style={{position: 'absolute', left: '66.6634%', top: '461px'}}
              >
                <div className="inner">
                  <div
                    className="entry vtr_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="/">
                      <img src={thumb_42x34} alt="thumb" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                        style={{backgroundImage: `url(${w2})`}}
                      ></div>
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div
          className="brush_1 wow zoomIn"
          data-wow-duration="1s"
          style={{visibility: 'visible', animationDuration: '1s'}}
        >
          <img src="img/brushes/portfolio/1.png" alt="thumb" />
        </div>
        <div
          className="brush_2 wow fadeInRight"
          data-wow-duration="1s"
          style={{visibility: 'visible', animationDuration: '1s'}}
        >
          <img src="img/brushes/portfolio/2.png" alt="thumb" />
        </div> */}
      </div>
    </Section>
  );
};

export default Work;
