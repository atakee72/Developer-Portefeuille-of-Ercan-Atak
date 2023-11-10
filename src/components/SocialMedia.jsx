import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import React from "react";

const iconComponents = {
  AiOutlineGithub,
  AiOutlineLinkedin,
  BsInstagram,
  FaFacebookF,
};

const fieldNames = [
  {
    name: "github",
    web: "https://github.com/atakee72",
    icon: "AiOutlineGithub",
  },
  {
    name: "linkedin",
    web: "https://linkedin.com/in/atakee72",
    icon: "AiOutlineLinkedin",
  },
  {
    name: "instagram",
    web: "https://www.instagram.com/a_t_a_k_e_e/",
    icon: "BsInstagram",
  },
  {
    name: "facebook",
    web: "https://facebook.com/atakee72",
    icon: "FaFacebookF",
  },
];

const SocialMedia = () => (
  <div className="absolute app__social flex justify-end items-center flex-col p-4 ">
    {fieldNames.map((item, i) => (
      <div className="group" key={i}>
        <a
          href={item.web}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xs:flex w-10 h-10 rounded-full bg-white mx-1 my-1 border border-lightGray  justify-center items-center group-hover:bg-secondary group-hover:border-secondary"
        >
          {React.createElement(iconComponents[item.icon], {
            className: `${
              item.name === "github" || item.name === "linkedin"
                ? "w-6 h-6"
                : "w-5 h-5"
            } text-gray group-hover:text-white`,
          })}
        </a>
      </div>
    ))}
  </div>
);

export default SocialMedia;
