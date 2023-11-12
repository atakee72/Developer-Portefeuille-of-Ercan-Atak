"use client";
import Image from "next/image.js";
import { sun, moon } from "../../public/assets/index.js";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggleBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    console.log("Current Theme:", theme);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    // setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="container relative flex justify-between items-center mx-4 w-10 h-5 rounded-3xl cursor-pointer bg-gray"
      onClick={() => {
        toggle();
        // theme === "dark" ? setTheme("light") : setTheme("dark");
        // OR setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Image src={moon.src} alt="moon graphic" height={14} width={14} />
      <div
        className={` ${
          theme === "dark" ? "left-0" : "right-0"
        } bg-white absolute w-4 h-4 rounded-3xl`}
      ></div>
      <Image src={sun.src} alt="sun graphic" height={14} width={14} />
    </button>
  );
};

export default ThemeToggleBtn;
