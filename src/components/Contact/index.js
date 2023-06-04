import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vv0hg29",
        "template_rmea43h",
        refForm.current,
        "SJs2yKmII4amnDY7R"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          //Actually just clears form rather than refresh
          refForm.current.reset();
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in any freelance web development opportunities.
            However I am open to any requests or questions that you may have.
          </p>
          <div className="contact-form">
            <form id="contact-form" ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  );
};

export default Contact;
