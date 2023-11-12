import AppWrap from "@/utils/AppWrap.js";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="  text-white mt-28 w-full h-screen flex flex-col items-center justify-center ">
      <h2 className="head-text text-lg font-semibold uppercase">
        Contact info:
      </h2>

      <div className="w-60 flex justify-evenly items-center flex-wrap m-16 8 8">
        <div className="min-w-minWidth flex flex-row justify-start items-center m-4 p-4 rounded-10 cursor-pointer bg-fef4f5 ">
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
        <p>12049 Berlin, Germany</p>
      </div>
      <p className=" absolute mt-[600px] font-semibold">
        Developed by Ercan. All rights reserved.
      </p>
      {/* <div className="app__footer-form app__flex">
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
      </div> */}
    </section>
  );
};

export default AppWrap(Footer, "contact");
