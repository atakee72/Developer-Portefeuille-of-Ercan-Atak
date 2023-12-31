import AppWrap from "@/utils/AppWrap.js";
import { syntax } from "../../public/assets/index.js";
import Image from "next/image.js";

const Header = () => (
  <section className="  w-full min-h-screen flex flex-col items-center justify-items-start mt-28">
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col items-center text-white hover:text-secondary dark:hover:text-white font-semibold mb-10 text-3xl">
        <Image src={syntax.src} height={400} width={600} />

        {/* <p className="text-4xl xxs:text-5xl text-center">Web Developer</p> */}
      </div>

      <div
        className="w-48 h-48 xxs:w-56 xxs:h-56 xs:w-60 xs:h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-[300px] xl:h-[300px] rounded-full bg-secondary/50 shadow-lg"
        style={{ boxShadow: "-100px 10px 80px 20px #080707 inset" }}
      ></div>

      <div className="mt-10">
        <p className="text-4xl xxs:text-5xl text-white hover:text-secondary dark:hover:text-white font-semibold">
          Freelancer
        </p>
      </div>
    </div>
  </section>
);

export default AppWrap(Header, "home");
