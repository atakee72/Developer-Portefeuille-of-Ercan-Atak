import Image from "next/image.js";
import { sun, moon } from "../../public/assets/index.js";

const ThemeToggleBtn = () => {
  return (
    <div className="container flex justify-end items-center mx-4">
      <Image src={moon.src} alt="moon graphic" height={14} width={14} />
      <div></div>
      <Image src={sun.src} alt="sun graphic" height={14} width={14} />
    </div>
  );
};

export default ThemeToggleBtn;
