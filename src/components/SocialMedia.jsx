import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social flex justify-end items-center flex-col p-4 ">
    <div className="group">
      <Link
        href={"https://github.com/atakee72"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white mx-1 my-0 border border-lightGray flex justify-center items-center  group-hover:bg-secondary group-hover:border-secondary"
      >
        <AiOutlineGithub className="w-5 h-5 text-gray group-hover:text-white" />
      </Link>
    </div>
    <div className="group">
      <Link
        href={"https://www.instagram.com/a_t_a_k_e_e/"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white mx-1 my-0 border border-lightGray flex justify-center items-center  group-hover:bg-secondary group-hover:border-secondary"
      >
        <BsInstagram className="w-4 h-4 text-gray group-hover:text-white" />
      </Link>
    </div>
    <div className="group">
      <Link
        href={"https://www.facebook.com/atakee72"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white mx-1 my-0 border border-lightGray flex justify-center items-center  group-hover:bg-secondary group-hover:border-secondary"
      >
        <FaFacebookF className="w-4 h-4 text-gray group-hover:text-white" />
      </Link>
    </div>
  </div>
);

export default SocialMedia;
