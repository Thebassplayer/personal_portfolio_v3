import React, { useState } from "react";
import { send } from "emailjs-com";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  // Component rendering logic
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { from_name, reply_to, message } = formData;

  // populate formData with form values
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setLoading(true);

    // emailjs send method
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(response => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h2 className="head-text">Contact me!</h2>
      <div className="app__footer-cards">
        <a href="mailto:roylopezdev@gmail.com" className="p-text">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <span>roylopezdev@gmail.com</span>
          </div>
        </a>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name"
              value={from_name}
              onChange={handleChangeInput}
              name="from_name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email"
              value={reply_to}
              onChange={handleChangeInput}
              name="reply_to"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
