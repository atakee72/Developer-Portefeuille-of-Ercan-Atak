import React from "react";
import { NavigationDots, SocialMedia } from "@/components";

const AppWrap = (Component, idName, classNames) =>
  function HOC(props) {
    return (
      <div
        id={idName}
        className={`app__container  min-h-screen flex flex-row items-center ${classNames}`}
      >
        <SocialMedia />
        <div className="app_wrapper app__flex flex flex-1 justify-center items-center">
          <Component {...props} />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
