import Image from "next/image.js";
import { twitterLogo } from "../../public/assets/index.js";
import AppWrap from "@/utils/AppWrap.js";

const Header = () => (
  <div className="app__header app__flex flex-1 w-full h-full flex-row pt-24 px-8 pb-0   ">
    <div className="app__header-info flex-[0.65] flex flex-col justify-start items-start h-full mx-0 my-8">
      <div className="app__header-badge w-full flex justify-end items-end flex-col ">
        <div className="badge-cmp app__flex px-2 py-4 bg-white rounded-lg flex-row w-auto shadow-md ">
          <span className="text-4xl">👋</span>
          <div className="ml-5">
            <p className="p-text">Hello, am</p>
            <h1 className="head-text">Ercan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex px-4 py-8 bg-white rounded-lg flex-row w-auto shadow-md mt-12">
          <p className="p-text w-full uppercase text-right">Web Developer</p>
          <p className="p-text w-full uppercase text-right">Freelancer</p>
        </div>
      </div>
    </div>

    <div className="app__header-img flex flex-1 justify-end items-end relative h-full ">
      <Image
        className=" object-contain z-10"
        src={twitterLogo.src}
        alt="Twitter Logo"
        height={32}
        width={32}
      />
    </div>

    <div className="app__header-circles flex flex-[0.75] flex-col justify-evenly items-start h-full ml-4 ">
      <div className="w-[100px] h-[100px] rounded-full bg-gray shadow-lg ">
        <img className="w-[0.60] h-[0.65] " src="" alt="" />
      </div>
    </div>
  </div>
);

export default AppWrap(Header, "home");
