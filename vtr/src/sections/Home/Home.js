import { Link } from 'react-router-dom';
import { FaYoutube, FaLinkedinIn, FaBloggerB } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import ReactGA from 'react-ga4';

import "./Home.css";
import JsonData from '../../assets/data/home-content.json';
import heroBanner from "../../assets/img/hero/bg.jpg";
import vt from "../../assets/img/hero/vt.png";
import vtbg from "../../assets/img/thumb/vt-bg.jpg";
import { ReactComponent as AngularIcon } from "../../assets/icons/tech/angular.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/tech/reactjs.svg";
import { ReactComponent as NodeIcon } from "../../assets/icons/tech/nodejs.svg";
import { ReactComponent as DownIcon } from "../../assets/icons/misc/down.svg";
import Section from "../../components/Section/Section";


const Home = () => {
  const homeData = JsonData.home;

  return (
    <Section id="home">
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
                <h3 className="hello">{homeData.hello}</h3>
                <h3 className="name">{homeData.name[0] + " " + homeData.name[1]}</h3>
                <h3 className="job">{homeData.job}</h3>
                <p className="text">{homeData.desc}</p>
                <div className="buttons">
                  <div className="vtr_tm_button">
                    <Link to="/contact" className="anchor">
                      {homeData.button}
                    </Link>
                  </div>
                  <div className="social">
                      <ul>
                        {
                          homeData?.social?.map((item, index) => (
                            <li key={index} onClick={() => {
                              ReactGA.event({
                                category:"Social Links",
                                action:"social_link_clicked",
                                label:item?.url,
                                value:+index
                              })
                            }}>
                              <a href={item?.url} target="_blank" rel="noreferrer">
                                {index === 0 ? <FaYoutube className="vtr-fs-16 vtr-color-white" /> : ''}
                                {index === 1 ? <FaLinkedinIn className="vtr-fs-16 vtr-color-white" /> : ''}
                                {index === 2 ? <FaBloggerB className="vtr-fs-16 vtr-color-white" /> : ''}
                                {index === 3 ? <PiGithubLogoFill className="vtr-fs-16 vtr-color-white" /> : ''}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.name[0]}</h3>
              <h3 className="stroke_2">{homeData.name[1]}</h3>
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
          <a className="anchor" href="#features">
            <DownIcon className="vtr-color-white" style={{width:'35px',height:'35px'}} />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Home;
