import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import fabicon from "../../assets/facebook-icon.png";
import github from "../../assets/1.png";
import lindedin from "../../assets/2.png";
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
        Please fill up all necessary steps and wait for me to reply.
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
          <a href="https://www.facebook.com/mdramjanali.ict" target="_blank">
            <img src={fabicon} alt="socalmedia" className="link" />
          </a>
          <a href="https://github.com/Ramjanict" target="_blank">
            <img src={github} alt="socalmedia" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/mdramjanict/" target="_blank">
            <img src={lindedin} alt="socalmedia" className="link" />
          </a>

          <img src={youticon} alt="socalmedia" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
