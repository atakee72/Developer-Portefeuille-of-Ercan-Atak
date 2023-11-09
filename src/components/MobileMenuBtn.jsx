"use client";

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenuBtn = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden w-9 h-9 rounded-full relative flex justify-center items-center bg-secondary cursor-pointer">
      {!toggle && (
        <div onClick={() => setToggle(true)}>
          <HiMenuAlt4 className="w-10 h-10 text-white " />
        </div>
      )}
      {toggle && (
        <div className="md:hidden fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex justify-end items-end flex-col   bg-gray/25 backdrop-blur-sm border border-white/18  transition-all duration-75 ease-in-out">
          <div className="w-9 h-9 rounded-full relative flex justify-center items-center bg-secondary cursor-pointer m-4">
            <HiX
              className="w-10 h-10 text-white "
              onClick={() => setToggle(false)}
            />
          </div>
          <ul className="m-0 p-0 h-full w-full flex justify-start items-start flex-col">
            {["home", "about", "work", "contact", "blog"].map((item) => (
              <li className="m-4" key={item}>
                <Link
                  href={`#${item}`}
                  className="text-secondary text-lg uppercase font-bold transition-all ease-in-out hover:underline"
                  onClick={() => setToggle(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenuBtn;
