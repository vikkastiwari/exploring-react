import React, { useState } from "react";
import { FaLinkedinIn, FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import ReactGA from 'react-ga';
import ReCAPTCHA from "react-google-recaptcha";

import "./Contact.css";
import JsonData from "../../assets/data/home-content.json";
import Section from "../../components/Section/Section";
import Toast from '../../components/Toast/Toast';
import { SubmitForm } from '../../service/ContactFormService';
import { ValidateEmail, ValidatePhone, ValidateString } from "../../service/ValidationService";

const Contact = () => {
  const contactData = JsonData.contact;
  const [isToast, setToast] = useState({isVisbile:false, message:'', type:'success'});
  const recaptchaRef = React.createRef();
  const [userData, setUserData] = useState({
    fullName: "",
    emailId: "",
    phone: "",
    subject: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const { fullName, emailId, phone, subject, message } = userData;
      const nameValidity = ValidateString(fullName);
      const emailValidity = ValidateEmail(emailId);
      const phoneValidity = ValidatePhone(phone);
      const subjectValidity = ValidateString(subject);
      const isDataValid = nameValidity && emailValidity && phoneValidity && subjectValidity && message;
      let token = null;

      if(isDataValid){
        token = await recaptchaRef.current.executeAsync();
      }
  
      if (isDataValid && token) {
        const res = await SubmitForm({ fullName, emailId, phone, subject, message });
        if (res) {
          setUserData({
            fullName: "",
            emailId: "",
            phone: "",
            subject: "",
            message: "",
          });

          ReactGA.event({
            category:"form",
            action:"customer contacted",
            label:"contact"
          });
          toastHandler("Data sucessfully submitted.", "success");
        } else {
          toastHandler("Something went wrong!", "error");
        }
      } else if((!isDataValid && token) || (!isDataValid && !token)) {
        toastHandler("Fill out all fields correctly.", "error");
      } else if(isDataValid && !token) {
        toastHandler("Verification failed! Try again later.", "error");
      } else {
        toastHandler("Something went wrong!", "error");
      }
    } catch(error) {
      console.error(error);
    }
  };

  const toastHandler = (message,type) => {
    setToast({isVisbile:true, message, type});
    setTimeout(() => {
    setToast({isVisbile:false, message, type});
    },3000);
  }

  return (
    <>
      {isToast.isVisbile ? <Toast message={isToast.message} type={isToast.type} /> : ''}
      <Section id="contact">
        <div className="vtr_tm_contact vtr_section_padding">
          <div className="container">
            <div className="vtr_tm_main_title" data-text-align="center">
              <span>{contactData.title}</span>
              <h3>{contactData.subtitle}</h3>
              <p>{contactData.desc}</p>
            </div>
            <div className="contact_inner">
              <div
                className="left fadeInLeft"
                style={{ visibility: "visible", animationDuration: "1s" }}
              >
                <ul>
                  {contactData.innerList.map((item, index) => (
                    <li key={index}>
                      <div className="list_inner">
                        <div
                          className={`icon ${
                            index === 0
                              ? "orangeBackground"
                              : index === 1
                              ? "greenBackground"
                              : "purpleBackground"
                          }`}
                        >
                          {index === 0 ? (
                            <i className="orangeText">
                              <FaLocationDot />
                            </i>
                          ) : index === 1 ? (
                            <i className="greenText">
                              <FaLinkedinIn />
                            </i>
                          ) : (
                            <i className=" purpleText">
                              <FaPeopleGroup />
                            </i>
                          )}
                        </div>
                        <div className="short">
                          <h3>{item.title}</h3>
                          <span>
                            {index === 0 ? (
                              item.subtitle
                            ) : (
                              <a href={`${item.url}`}>
                                {item.subtitle}
                              </a>
                            )}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="right wow fadeInRight"
                data-wow-duration="1s"
                style={{ visibility: "visible", animationDuration: "1s" }}
              >
                <div className="fields">
                  <form
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>{contactData.requiredError}</span>
                    </div>
                    <div className="input_list">
                      <ul>
                        <li>
                          <input
                            type="text"
                            name="fullName"
                            maxLength="70"
                            id="fullName"
                            placeholder="Full Name"
                            value={userData.fullName}
                            onChange={postUserData}
                            required
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            name="emailId"
                            maxLength="320"
                            id="emailId"
                            placeholder="Email"
                            value={userData.email}
                            onChange={postUserData}
                            required
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            pattern="[0-9]+"
                            name="phone"
                            minLength="10"
                            maxLength="10"
                            id="phone"
                            placeholder="phone"
                            value={userData.phone}
                            onChange={postUserData}
                            required
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            name="subject"
                            maxLength="70"
                            id="subject"
                            placeholder="Subject"
                            value={userData.subject}
                            onChange={postUserData}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="message_area">
                      <textarea
                        name="message"
                        id="message"
                        maxLength="255"
                        placeholder={contactData.textPlaceholder}
                        value={userData.message}
                        onChange={postUserData}
                      ></textarea>
                    </div>
                    <ReCAPTCHA 
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={process.env.REACT_APP_SITE_KEY}
                    />
                    <div className="vtr_tm_button">
                      <a
                        href="/"
                        id="send_message"
                        onClick={submitForm}
                      >
                        <span>{contactData.submit}</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
