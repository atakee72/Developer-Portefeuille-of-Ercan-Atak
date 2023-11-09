import AppWrap from "@/utils/AppWrap.js";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Contact info:</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Link
            href="mailto:atakee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text"
          >
            atakee@gmail.com
          </Link>
        </div>
        <div className="app__footer-card">
          <a href="tel:+49 (30) 88694300" className="p-text">
            +49 (30) 88694300
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex border w-1/3 my-1">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
          />
        </div>
        <div className="app__flex border w-1/3 my-1">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
          />
        </div>
        <div className="border w-1/3 my-1">
          <textarea
            className="p-text w-full"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <button type="button" className="p-text"></button>
      </div>
    </>
  );
};

export default AppWrap(Footer, "app__footer");
