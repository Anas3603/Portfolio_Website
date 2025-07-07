import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
      data-aos-duration="1000"
        >
          <a href=""  className="items">
            <FaInstagram className="icons"/>
          </a>
          <a href=""  className="items">
            <FaFacebook className="icons"/>
          </a>
          <a href=""  className="items">
            <FaLinkedin className="icons"/>
          </a>
          <a href=""  className="items">
            <FaSquareXTwitter className="icons"/>
          </a>
          <a href=""  className="items">
            <FaGithub className="icons"/>
          </a>
          <a href="mailto:mohammadanasnisar@gmail.com"  className="items">
            <IoIosMail className="icons"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
