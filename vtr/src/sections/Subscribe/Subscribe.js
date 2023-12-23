import { useState } from "react";
import ReactGA from 'react-ga';

import "./Subscribe.css";
import JsonData from "../../assets/data/home-content.json";
import Section from "../../components/Section/Section";
import Toast from "../../components/Toast/Toast";
import { SubscribeNewsletter } from "../../service/ContactFormService";

const Subscribe = () => {
  const subscribeData = JsonData.subscirbe;
  const [isToast, setToast] = useState({
    isVisbile: false,
    message: "",
    type: "success",
  });
  const [userData, setUserData] = useState({
    email: "",
    timeStamp: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const { email, timeStamp } = {...userData, timeStamp:new Date(Date.now()).toDateString()};

    if (email) {
      const res = await SubscribeNewsletter({ email, timeStamp });

      if (res) {
        setUserData({
          email:'',
          timeStamp:''
        });
        ReactGA.event({
          category:"form",
          action:"newsletter subscribed",
          label:"subscriber"
        });

        toastHandler("Data sucessfully submitted.", "success");
      } else {
        toastHandler("Something went wrong!", "error");
      }
    } else {
      toastHandler("Fill out all fields", "error");
    }
  };

  const toastHandler = (message, type) => {
    setToast({ isVisbile: true, message, type });
    setTimeout(() => {
      setToast({ isVisbile: false, message, type });
    }, 3000);
  };

  return (
    <>
      {isToast.isVisbile ? <Toast message={isToast.message} type={isToast.type} /> : ''}
      <Section>
        <div className="vtr_tm_subscribe vtr_section_padding">
          <div className="container">
            <div className="inner">
              <div className="background">
                <div className="overlay"></div>
              </div>
              <div className="content">
                <div
                  className="left wow fadeInLeft"
                  data-wow-duration="1s"
                  style={{ visibility: "visible", animationDuration: "1s" }}
                >
                  <span className="subtitle">{subscribeData.subtitle}</span>
                  <h3 className="title">{subscribeData.title}</h3>
                  <p className="text">{subscribeData.desc}</p>
                </div>
                <div
                  className="right wow fadeInRight"
                  data-wow-duration="1s"
                  style={{ visibility: "visible", animationDuration: "1s" }}
                >
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      placeholder={subscribeData.placeholder}
                      value={userData.email}
                      onChange={postUserData}
                    />
                    <input
                      type="submit"
                      value={subscribeData.value}
                      onClick={submitForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Subscribe;
