import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

import "./Contact.css";
import JsonData from "../../assets/data/home-content.json";
import Section from "../../components/Section/Section";
import Toast from '../../components/Toast/Toast';
import { SubmitForm } from '../../service/ContactFormService';

const Contact = () => {
  const contactData = JsonData.contact;
  const [isToast, setToast] = useState({isVisbile:false, message:'', type:'success'});
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
    const { fullName, emailId, phone, subject, message } = userData;
    if(fullName && emailId && phone && subject && message){
      const res = await SubmitForm({ fullName, emailId, phone, subject, message });

      if(res) {
        setUserData({
          fullName: "",
          emailId: "",
          phone: "",
          subject: "",
          message: "",
        });
        toastHandler('Data sucessfully submitted.','success');
      }else {
        toastHandler('Something went wrong!','error');
      }
    } else {
      toastHandler('Fill out all fields','error');
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
                              <MdAlternateEmail />
                            </i>
                          ) : (
                            <i className=" purpleText">
                              <BsTelephoneFill />
                            </i>
                          )}
                        </div>
                        <div className="short">
                          <h3>{item.title}</h3>
                          <span>
                            {index === 1 ? (
                              <a href={`mailto:${item.subtitle}`}>
                                {item.subtitle}
                              </a>
                            ) : (
                              item.subtitle
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
                        {/* {contactData.inputList.map((item, index) => (
                          <li key={index}>
                            <input
                              type={item.type}
                              name={item.id}
                              id={item.id}
                              placeholder={item.placeholder}
                              value={userData.fullName}
                              onChange={postUserData}
                            />
                          </li>
                        ))} */}

                        <li>
                          <input
                            type="text"
                            name="fullName"
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
                            id="emailId"
                            placeholder="Email"
                            value={userData.email}
                            onChange={postUserData}
                            required
                          />
                        </li>
                        <li>
                          <input
                            type="number"
                            name="phone"
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
                        placeholder={contactData.textPlaceholder}
                        value={userData.message}
                        onChange={postUserData}
                      ></textarea>
                    </div>
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
