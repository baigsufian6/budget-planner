import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <label className="contact-label">
          Name:
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Email:
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
        </label>
        <label className="contact-label">
          Message:
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>
        </label>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
