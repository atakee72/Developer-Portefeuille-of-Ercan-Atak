"use client";

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenuBtn = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <HiMenuAlt4 onClick={() => setToggle(true)} />
      {toggle && (
        <ul>
          <HiX onClick={() => setToggle(false)} />
          {["home", "about", "work", "contact", "blog"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="bg-slate-300 uppercase font-bold transition-all ease-in-out hover:text-slate-500 p-1"
                onClick={() => setToggle(false)}
              >
                {" "}
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenuBtn;
