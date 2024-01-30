import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import fabicon from "../../assets/facebook-icon.png";
import insticon from "../../assets/instagram.png";
import twiticon from "../../assets/twitter.png";
import youticon from "../../assets/youtube.png";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3i46kpg",
        "template_59pohvi",
        form.current,
        "g1izcsP6ffcn-1oou"
      )
      .then(
        (result) => {
          //console.log(result.text);
          e.target.reset();
          alert("Message Has been sent");
        },
        (error) => {
          //console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <span className="contactdes">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        assumenda quo consequatur voluptates, id possimus vel? Porro amet, eum
        culpa labore error, fuga odit distinctio ea, itaque voluptatibus quod a.
      </span>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input
          className="name"
          type="text"
          placeholder="Your Name"
          name="your_name"
          required
        />
        <input
          className="email"
          type="email"
          placeholder="Your Email"
          name="your_email"
          required
        />
        <textarea
          name="message"
          className="msg"
          rows={5}
          placeholder="Your Message"
          required
        ></textarea>
        <button className="subbtn" type="submit" value="send">
          submit
        </button>
        <div className="links">
          <img src={fabicon} alt="socalmedia" className="link" />
          <img src={twiticon} alt="socalmedia" className="link" />
          <img src={insticon} alt="socalmedia" className="link" />
          <img src={youticon} alt="socalmedia" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
