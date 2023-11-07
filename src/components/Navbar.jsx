import Link from "next/link";
import React from "react";
import MobileMenuBtn from "./mobileMenuBtn";

const Navbar = () => {
  return (
    <nav className="flex w-full h-28 justify-between items-center px-8 py-4 bg-white/25 backdrop-blur-sm border border-white/18 fixed z-20">
      <div className="flex justify-start items-center font-extrabold text-2xl 2xl:text-6xl text-secondary">
        <Link href={"#"}>Ercan.</Link>
      </div>

      <ul className="flex justify-center items-center flex-1">
        {["home", "about", "work", "contact", "blog"].map((item) => (
          <li key={`link-${item}`} className="my-0 mx-4 flex-col group">
            <div className="w-1 h-1 bg-transparent rounded-full mx-auto mb-1 group-hover:bg-secondary transition-all ease-in-out" />

            <Link
              href={`#${item}`}
              className="text-gray text-lg uppercase flex-col font-semibold p-1 transition-all ease-in-out group-hover:text-[#313bac]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <MobileMenuBtn />
    </nav>
  );
};

export default Navbar;
