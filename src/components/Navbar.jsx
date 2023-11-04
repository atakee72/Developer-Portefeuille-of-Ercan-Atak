import Link from "next/link";
import React from "react";
import MobileMenuBtn from "./mobileMenuBtn";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center px-8 py-4 bg-white/25 backdrop-blur-sm border border-black-/18 fixed z-20">
      <Link
        className="font-extrabold text-5xl  w-24 h-5 lg:w-48 lg:h-10"
        href={"#"}
      >
        Ercan.
      </Link>
      <div className="flex-1">
        <ul className="flex justify-center items-center flex-1">
          {["home", "about", "work", "contact", "blog"].map((item) => (
            <li key={`link-${item}`} className="my-0 mx-4">
              <div className="bg-transparent rounded-lg mb-1">
                <Link
                  href={`#${item}`}
                  className="bg-slate-300 uppercase font-bold transition-all ease-in-out hover:text-slate-500 p-1"
                >
                  {" "}
                  {item}
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <MobileMenuBtn />
      </div>
    </nav>
  );
};

export default Navbar;
