import { MdAlternateEmail } from "react-icons/md";
import JsonData from '../../assets/data/content.json';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import './Contact.css';

import misc_1 from '../../assets/img/misc/1.png';
import misc_2 from '../../assets/img/misc/2.png';
import Section from "../../components/Section/Section";

const Contact = () => {
  const contactData = JsonData.contact;

  return (
    <Section id="contact">
      <div className="vtr_tm_contact vtr_section_margin">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div
              className="left fadeInLeft"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <ul>
                {contactData.innerList.map((item,index)=>(
                  <li key={index}>
                    <div className="list_inner">
                      <div className={`icon ${index===0 ? 'orangeBackground' : index===1 ? 'greenBackground' : 'purpleBackground'}`}>
                        {
                          index===0 ? <i className="orangeText"><FaLocationDot /></i> : 
                          index===1 ? <i className="greenText"><MdAlternateEmail /></i> : 
                          <i className=" purpleText"><BsTelephoneFill /></i>
                        }
                      </div>
                      <div className="short">
                        <h3>{item.title}</h3>
                        <span>
                          {index === 1 ? <a href={`mailto:${item.subtitle}`}>{item.subtitle}</a> : item.subtitle}
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
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <div className="fields">
                <form
                  action="/"
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
                      {contactData.inputList.map((item,index)=>(
                        <li key={index}>
                          <input type={item.type} id={item.id} placeholder={item.placeholder} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder={contactData.textPlaceholder}
                    ></textarea>
                  </div>
                  <div className="vtr_tm_button">
                    <a id="send_message" href="/">
                      <span>{contactData.submit}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="brush_2 wow fadeInRight"
              data-wow-duration="1s"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <img src={misc_2} alt="misc shape" />
            </div>
          </div>
        </div>
        <div
          className="brush_1 wow fadeInLeft"
          data-wow-duration="1s"
          style={{visibility: 'visible', animationDuration: '1s'}}
        >
          <img src={misc_1} alt="misc shape" />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
