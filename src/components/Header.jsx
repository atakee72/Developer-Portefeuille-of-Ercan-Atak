import AppWrap from "@/utils/AppWrap.js";
import {
  dashboard,
  graduate,
  maHalle,
  syntax,
} from "../../public/assets/index.js";
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

      <div className="mt-5 p-3 bg-primary gap-3 flex font-semibold text-xl w-full h-96 rounded-lg">
        <div className="relative w-1/3 transition-all duration-500 hover:w-2/3">
          <Image
            className="h-full w-full aspect-square group-hover:aspect-[3/2]"
            object-cover
            src={maHalle.src}
            height={600}
            width={300}
          />
          <div className="absolute leading-7 box-border m-0 flex flex-col items-start justify-center text-primary text-4xl top-0 left-0 z-20  w-full h-full bg-secondary/50 uppercase">
            {" "}
            <h1>A Home~made </h1>
            <h1>Facebook</h1>
            <h1>for my</h1>
            <h1>Neighbours</h1>
          </div>{" "}
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 mb-1 ml-1 z-40 rounded-e-lg bottom-0 text-xs">
            Next.js
          </span>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 mb-1 ml-1 z-40 rounded-e-lg bottom-0 left-16 text-xs">
            MongoDB
          </span>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 mb-1 ml-1 z-40 rounded-e-lg bottom-0 left-36 text-xs">
            NextAuth
          </span>
        </div>{" "}
        <div className="relative w-1/3 transition-all duration-500 hover:w-2/3">
          <Image
            className="h-full w-full aspect-square group-hover:aspect-[3/2]"
            object-cover
            src={graduate.src}
            height={450}
            width={300}
          />
          <div className="absolute leading-7 box-border m-0 flex flex-col items-start justify-center text-primary text-4xl top-0 left-0 z-20 w-full h-full bg-secondary/50 uppercase">
            <h1>Can </h1>
            <h1>Dogs</h1>
            <h1 className="absolute left-40"> & </h1>
            <h1>Movies</h1>
            <h1>go together</h1>
            <span className="absolute top-[228px] left-64 rotate-180">?</span>
          </div>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 ml-1 mb-1 z-40 rounded-e-lg bottom-0 text-xs">
            Next.js
          </span>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 ml-1 mb-1 z-40 rounded-e-lg bottom-0 left-16 text-xs">
            Tailwind
          </span>
        </div>
        <div className="relative group text-secondary w-1/3 transition-all duration-500 hover:w-2/3">
          <Image
            className="h-full w-full aspect-square group-hover:aspect-[3/2]"
            object-cover
            src={dashboard.src}
            height={450}
            width={300}
          />
          <div className="absolute leading-7 box-border m-0 flex flex-col items-start justify-center text-primary text-4xl top-0 left-0 z-20  w-full h-full bg-secondary/50 uppercase">
            {" "}
            <h1>Yet</h1> <h1>another </h1>
            <h1p>admin</h1p>
            <h1> dashboard</h1>
            <span className="absolute top-[211px] left-[230px] rotate-45">
              !
            </span>
          </div>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 ml-1 mb-1 z-40 rounded-e-lg bottom-0 text-xs">
            Next.js
          </span>
          <span className="absolute bg-secondary text-primary py-0.25 pl-1 pr-2 ml-1 mb-1 z-40 rounded-e-lg bottom-0 left-16 text-xs">
            Sass
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AppWrap(Header, "home");
