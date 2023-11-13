import "./About.css";
import Section from "../../components/Section/Section";
import JsonData from '../../assets/data/content.json';

import thumb_64x49 from "../../assets/img/thumb/64-49.jpg";
import thumb_1x1 from "../../assets/img/thumb/1-1.jpg";
import about_1 from "../../assets/img/about/about-1.jpg";

const About = () => {
  const aboutData = JsonData.about;
  
  return (
    <Section id="about">
      <div className="vtr_tm_about vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{aboutData.title}</span>
            <h3>{aboutData.heading}</h3>
            <p>
              {aboutData.desc}
            </p>
          </div>
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src={thumb_64x49} alt="" />
                <div
                  className="main"
                  data-img-url="img/about/1.jpg"
                  style={{ backgroundImage: `url(${about_1})` }}
                ></div>
                <div className="">
                  <span
                    className="icon_2 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.2s",
                    }}
                  >
                    <svg
                      version="1.1"
                      id="null"
                      xmlnsdc="http://purl.org/dc/elements/1.1/"
                      xmlnscc="http://creativecommons.org/ns#"
                      xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      xmlnssvg="http://www.w3.org/2000/svg"
                      xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                      xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
                      sodipodidocname="wordpress.svg"
                      inkscapeversion="0.48.4 r9939"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="1200px"
                      height="1200px"
                      viewBox="0 0 1200 1200"
                      enableBackground="new 0 0 1200 1200"
                      xmlSpace="preserve"
                      className="svg replaced-svg"
                    >
                      <path
                        id="path26266"
                        inkscapeconnectorcurvature="0"
                        d="M599.314,1200C264.241,1193.561,2.343,918.889,0,599.314
	C6.515,264.491,279.729,2.343,599.314,0C934.157,6.694,1197.654,279.298,1200,599.314
	C1193.381,934.406,919.318,1197.654,599.314,1200z M599.314,42.514C288.196,48.64,43.307,302.232,41.143,599.314
	c6.051,311.365,261.102,556.007,558.171,558.171c311.365-6.053,556.007-261.103,558.172-558.171
	C1151.613,287.967,895.954,44.676,599.314,42.514L599.314,42.514z M455.314,1090.285l153.6-441.6l160.457,432
	C661.269,1116.874,559.068,1119.067,455.314,1090.285L455.314,1090.285z M337.371,309.943
	c-56.23,7.644-110.916,10.369-164.571,8.229C274.677,172.521,437.796,90.579,599.314,89.143c132.109,2.5,255.27,52.438,345.6,134.4
	c-41.893-3.097-66.977,15.276-85.028,46.628c-26.234,80.939,29.201,140.853,60.344,201.601
	c29.443,55.505,27.108,118.618,10.971,172.8l-76.8,261.943L669.258,356.571c19.291-1.795,38.708-2.373,56.229-5.486
	c20.736-4.617,25.286-23.914,10.971-35.657c-4.57-3.656-9.6-5.484-15.086-5.484l-111.085,8.229h-84.343
	c-23.813,1.406-91.053-21.597-96.688,9.601c-2.911,12.017,6.06,21.436,16.457,23.313c18.346,2.377,39.365,5.076,56.229,6.857
	l80.914,216.686L470.4,906.515L283.886,356.571c19.736-1.714,39.733-2.312,57.6-5.486c14.63-1.833,21.028-9.146,19.2-21.943
	C358.093,317.765,347.952,310.078,337.371,309.943L337.371,309.943z M131.657,394.972l245.486,663.771
	c-88.577-43.659-158.606-107.864-208.458-184.458C77.49,728.754,67.897,544.121,131.657,394.972L131.657,394.972z M1090.972,735.771
	c-40.303,131.608-122.616,240.613-236.57,306.515c5.484-14.629,14.171-39.314,26.057-74.058l142.629-414.172
	c13.714-40.229,23.314-85.028,28.8-134.399c1.853-20.199,1.914-40.564-1.371-58.972
	C1108.954,486.728,1125.532,611.577,1090.972,735.771L1090.972,735.771z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="">
                  <span
                    className="icon_3 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.4s",
                    }}
                  >
                    <svg
                      width="17px"
                      height="17px"
                      viewBox="0 0 17 17"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="null"
                      className="svg replaced-svg"
                    >
                      <g></g>
                      <path
                        d="M8.563 16.5c-3.718 0-7.062-2.926-7.062-6.906 0-3.974 3.098-5.813 3.672-6.114 0.684-0.364 1.176-0.556 1.95-1.175 0.383-0.301 0.702-0.739 0.803-1.805 0.555 0.665 1.221 1.439 1.694 1.759 0.775 0.51 1.55 0.711 2.36 1.221 0.492 0.301 3.518 2.15 3.518 6.241 0 4.082-3.226 6.779-6.935 6.779zM14.030 9.903c-0.729 0-2.205 1.513-2.979 1.522-0.901 0.018-2.149-1.787-3.954-1.77-1.422 0.010-2.542 1.14-2.561 2.343-0.009 0.675 0.21 1.176 0.675 1.494 0.31 0.209 0.592 0.337 1.512 0.337 1.531 0 3.472-1.896 4.365-1.867 0.71 0.026 1.812 1.768 2.369 1.804 0.437 0.036 0.665-0.164 1.038-0.701 0.364-0.547 0.52-1.404 0.52-1.887 0-0.473-0.21-1.275-0.985-1.275zM11.917 14.741c-0.31 0.228-1.003 0.511-1.987 0.511s-1.448-0.21-1.758-0.447c-0.045-0.036-0.027-0.036-0.119-0.036-0.1 0-0.154 0.046-0.236 0.109-0.073 0.064-0.109 0.219 0 0.328 0.674 0.619 1.804 0.565 2.633 0.491 0.839-0.082 1.55-0.573 1.622-0.646 0.109-0.108 0.082-0.2 0.063-0.264-0.018-0.064-0.073-0.154-0.218-0.046zM11.424 13.184c-0.182-0.118-0.445-0.137-0.691-0.137-0.247 0-0.383-0.018-0.646 0.091-0.266 0.109-0.539 0.355-0.711 0.511-0.174 0.154-0.201 0.273-0.11 0.401 0.092 0.117 0.192 0.044 0.447-0.174 0.264-0.21 0.438-0.401 0.975-0.401s0.629 0.201 0.737 0.401c0.11 0.2 0.119 0.228 0.228 0.174 0.128-0.064 0.192-0.156 0.128-0.312-0.065-0.154-0.174-0.427-0.357-0.554z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="">
                  <span
                    className="icon_1 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.6s",
                    }}
                  >
                    <svg
                      width="35px"
                      height="35px"
                      viewBox="0 -5.5 35 35"
                      xmlns="http://www.w3.org/2000/svg"
                      id="null"
                      className="svg replaced-svg"
                    >
                      <path d="m34.959 11.235h-.055q.438.384-.219.548l-4.766 1.259 4.326 5.862q.219.329.11.468c-.155.144-.337.262-.536.346l-.012.005-5.587 2.03q-5.314 1.863-5.807 2.028h-.055c-.276.138-.602.219-.946.219-.014 0-.028 0-.041 0h.002c-.353-.079-.644-.299-.815-.596l-.003-.006q-.548-.712-3.999-6.957-5.865 1.533-7.344 1.863c-.147.057-.317.09-.495.09-.597 0-1.107-.373-1.31-.899l-.003-.01-1.425-3.127q-5.533-11.888-5.807-12.6-.493-1.096.438-1.206l.712-.055q5.703-.437 6.355-.492c.033-.003.072-.004.111-.004.207 0 .404.042.584.118l-.01-.004c.168.115.305.262.407.432l.003.006 8.492 14.19 10.628-2.52-3.508-4.986q-.384-.548.493-.657l4.931-.819c.067-.015.144-.024.224-.024.116 0 .228.019.332.053l-.008-.002c.22.115.404.273.545.464l.003.004 2.136 2.63q1.753 2.185 1.918 2.35zm-19.339 3.944q.274-.055.055-.329l-7.949-13.751c-.039-.067-.11-.112-.192-.112-.009 0-.019.001-.028.002h.001l-5.807.493q-.055 0-.055.11c.001.08.021.155.056.221l-.001-.003 7.177 14.792q.055.11.11.11h.274l3.889-.935q2.41-.599 2.47-.599zm16.764 3.123-3.508-4.821c-.044-.082-.11-.147-.189-.191l-.002-.001c-.024-.005-.052-.008-.08-.008-.06 0-.118.013-.169.036l.003-.001-10.407 2.74 3.452 5.807q.165.274.274.302c.027.005.058.008.09.008.066 0 .129-.013.187-.036l-.003.001 10.244-3.508q.219-.055.219-.11c-.005-.052-.025-.099-.055-.137v.001zm.657-7.341q.438-.11.329-.274-2.689-3.342-3.013-3.78c-.064-.135-.199-.228-.356-.228-.029 0-.058.003-.085.009h.003l-3.944.712q-.219.055-.055.274l3.123 4.273q2.026-.493 3.999-.987z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{aboutData.me.title}</span>
                <h3>{aboutData.me.heading}</h3>
              </div>
              <div className="text">
                {aboutData.me.desc.map((list,index) => (
                  <p key={index}>
                    {list}
                  </p>
                ))}
              </div>
              <div className="vtr_tm_button">
                <a className="anchor" href="#portfolio">
                  {aboutData.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
