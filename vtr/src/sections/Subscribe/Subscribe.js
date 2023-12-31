import React, { useState } from "react";
import ReactGA from 'react-ga4';

import "./Subscribe.css";
import JsonData from "../../assets/data/home-content.json";
import Section from "../../components/Section/Section";
import Toast from "../../components/Toast/Toast";
import { SubscribeNewsletter } from "../../service/FormService";
import { ValidateEmail } from "../../service/ValidationService";

const Subscribe = () => {
  const subscribeData = JsonData.subscirbe;
  const subscribeNewsletter = SubscribeNewsletter;
  const [isToast, setToast] = useState({
    isVisbile: false,
    message: "",
    type: "success",
  });
  // const recaptchaRef = React.createRef();
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

  const submitForm = (event) => {
    event.preventDefault();
    try {
      const data = {...userData, timeStamp:new Date(Date.now()).toDateString()};
      const emailValidity = ValidateEmail(data?.email) ?? false;
  
      if (emailValidity) {
        subscribeNewsletter(data).then(() => {
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
        })
        .catch((error) => {
          console.error(error);
          toastHandler("Something went wrong!", "error");
        });
      } else {
        toastHandler("Fill out fields correctly.", "error");
      }
    } catch(error) {
      console.error(error);
      toastHandler("Something went wrong!", "error");
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
                      type="email"
                      autoComplete="off"
                      name="email"
                      maxLength="255"
                      placeholder={subscribeData.placeholder}
                      value={userData.email}
                      onChange={postUserData}
                      required
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
