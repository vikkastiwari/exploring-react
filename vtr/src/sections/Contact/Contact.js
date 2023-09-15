import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import './Contact.css';

import misc_1 from '../../assets/img/misc/1.png';
import misc_2 from '../../assets/img/misc/2.png';
import Section from "../../components/Section/Section";

const Contact = () => {
  return (
    <Section>
      <div className="vtr_tm_contact">
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
              className="left wow fadeInLeft"
              data-wow-duration="1s"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="icon orangeBackground">
                      <i className="orangeText"><FaLocationDot /></i>
                    </div>
                    <div className="short">
                      <h3>Address</h3>
                      <span>20, Somewhere in world</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon greenBackground">
                      <i className="greenText"><MdAlternateEmail /></i>
                    </div>
                    <div className="short">
                      <h3>Email</h3>
                      <span>
                        <a href="mailto:hello@vtr.com">hello@vtr.com</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon purpleBackground">
                      <i className=" purpleText"><BsTelephoneFill /></i>
                    </div>
                    <div className="short">
                      <h3>Phone</h3>
                      <span>+123 456 7890</span>
                    </div>
                  </div>
                </li>
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
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input type="text" id="name" placeholder="Your Name" />
                      </li>
                      <li>
                        <input
                          type="text"
                          id="email"
                          placeholder="Your Email"
                        />
                      </li>
                      <li>
                        <input
                          type="number"
                          id="phone"
                          placeholder="Your Phone"
                        />
                      </li>
                      <li>
                        <input type="text" id="subject" placeholder="Subject" />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <div className="vtr_tm_button">
                    <a id="send_message" href="/">
                      <span>Submit Now</span>
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
