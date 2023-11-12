import Link from "next/link";
import React from "react";
import { MobileMenuBtn, ThemeToggleBtn } from "./index.js";
// import { ThemeToggleBtn } from ".";

const Navbar = () => {
  return (
    <nav className="flex w-full h-[112px] md:h-28 justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/18 fixed z-20">
      <div className="flex justify-start items-center font-extrabold text-5xl xxs:text-6xl text-secondary dark:text-white">
        <Link className="group" href={"#"}>
          <span>Ercan</span>
          <span className="group-hover:text-white dark:group-hover:text-secondary">
            .
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex justify-end items-baseline flex-1 ">
        <ThemeToggleBtn />
        <ul className=" flex justify-end items-center ">
          {["home", "about", "work", "blog", "testimonials", "contact"].map(
            (item) => (
              <li key={`link-${item}`} className="my-0 mx-4 flex-col group">
                <div className="w-2 h-2 bg-transparent rounded-full mx-auto mb-1 group-hover:bg-white  transition-all ease-in-out" />

                <Link
                  href={`#${item}`}
                  className=" text-lg uppercase flex-col font-semibold p-1 transition-all ease-in-out text-secondary dark:text-white"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <MobileMenuBtn />
      </div>
    </nav>
  );
};

export default Navbar;
