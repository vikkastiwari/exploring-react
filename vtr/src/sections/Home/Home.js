import { FaFacebookF, FaLinkedinIn, FaBloggerB } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

import "./Home.css";
import heroBanner from "../../assets/img/hero/bg.jpg";
import vt from "../../assets/img/hero/vt.jpg";
import vtbg from "../../assets/img/thumb/vt-bg.jpg";
import { ReactComponent as AngularIcon } from "../../assets/icons/tech/angular.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/tech/reactjs.svg";
import { ReactComponent as NodeIcon } from "../../assets/icons/tech/nodejs.svg";
import { ReactComponent as DownIcon } from "../../assets/icons/misc/down.svg";
import Section from "../../components/Section/Section";


function Home() {
  return (
    <>
      <Section>
        <div className="vtr_tm_hero">
          <div className="background">
            <div
              className="image"
              style={{ backgroundImage: `url(${heroBanner})` }}
            ></div>
          </div>

          <div className="container">
            <div className="content">
              <div className="left">
                <div className="inner">
                  <h3 className="hello">Hello I'm</h3>
                  <h3 className="name">Vikas Tiwari</h3>
                  <h3 className="job">Web Developer from India</h3>
                  <p className="text">
                    I will simplify the complexity for you but remember, Nine people can't make a baby in a month.
                  </p>
                  <div className="buttons">
                    <div className="vtr_tm_button">
                      <a className="anchor" href="#contact">
                        Get a Quote
                      </a>
                    </div>
                    <div className="social">
                        <ul>
                          <li>
                            <a href="/">
                              <FaFacebookF  className="vtr-fs-16 vtr-color-white" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <FaLinkedinIn className="vtr-fs-16 vtr-color-white" />
                            </a>
                          </li>
                          <li>  
                            <a href="/">
                              <FaBloggerB className="vtr-fs-16 vtr-color-white" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <PiGithubLogoFill className="vtr-fs-16 vtr-color-white" />
                            </a>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
                <h3 className="stroke_1">Vikas</h3>
                <h3 className="stroke_2">Tiwari</h3>
              </div>
              <div className="right">
                <div className="image">
                  <img src={vtbg} alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(${vt})` }}
                  ></div>
                  <span className="icon t1">
                    <ReactIcon className="svg" />
                  </span>
                  <span className="icon t2">
                    <AngularIcon className="svg" />
                  </span>
                  <span className="icon node t3">
                    <NodeIcon className="svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="vtr_tm_down">
            <a className="anchor" href="/">
              <DownIcon className="vtr-color-white" style={{width:'35px',height:'35px'}} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;
