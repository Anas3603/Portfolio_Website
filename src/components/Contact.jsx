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
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/m.o.h.d._.a.n.a.s?utm_source=qr"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/mohammadanasnisar" className="items">
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/anas-nisar-75108a2ba/"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://x.com/m_o_h_d_a_n_a_s" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Anas3603" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:mohammadanasnisar@gmail.com" className="items">
            <IoIosMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
