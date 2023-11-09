import React from "react";
// import { motion } from "framer-motion";

// import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
// import "./Header.scss";

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

const Header = () => (
  <div className="app__header app__flex flex-1 w-full h-full flex-row pt-12 pr-4 pb-0   ">
    <div
    //   whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //   transition={{ duration: 0.5 }}
      className="app__header-info flex-[0.65] flex flex-col justify-start items-start h-full mx-0 my-4"
    >
      <div className="app__header-badge w-full flex justify-end items-end flex-col ">
        <div className="badge-cmp app__flex px-2 py-4 bg-white rounded-lg flex-row w-auto shadow-md ">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Micael</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex px-2 py-4 bg-white rounded-lg flex-row w-auto shadow-md mt-6">
          <p className="p-text w-full uppercase text-right">Web Developer</p>
          <p className="p-text w-full uppercase text-right">Freelancer</p>
        </div>
      </div>
    </div>

    <div
    //   whileInView={{ opacity: [0, 1] }}
    //   transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </div>

    <div
    //   variants={scaleVariants}
    //   whileInView={scaleVariants.whileInView}
    //   className="app__header-circles"
    >
      {/* {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))} */}
    </div>
  </div>
);

export default Header;
