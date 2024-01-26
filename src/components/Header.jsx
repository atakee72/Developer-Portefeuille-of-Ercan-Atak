import AppWrap from "@/utils/AppWrap.js";
import {
  dashboard,
  graduate,
  maHalle,
  syntax,
} from "../../public/assets/index.js";
import Image from "next/image.js";
import Link from "next/link";

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

      <div className="mt-5 p-6 bg-primary gap-5 flex font-semibold text-xl w-[1600px] h-[550px] rounded-sm">
        <Link
          href="https://mahalle-kiez-gesichterbuch.vercel.app"
          target="_blank"
          className="relative w-1/3 transition-all duration-500 hover:w-2/3"
        >
          <Image
            className="h-full w-full rounded-sm object-cover overflow-hidden aspect-auto"
            src={maHalle.src}
            height={400}
            width={600}
          />
          <div className="absolute font-sans font-normal tracking-widest leading-9 box-border m-0 flex flex-col items-start justify-center text-primary text-5xl top-0 left-0 z-20 w-full h-full bg-secondary/80 uppercase">
            {" "}
            <h1>Home~made </h1>
            <h1>Facebook</h1>
            <h1>for my</h1>
            <h1>Neighbours</h1>
          </div>{" "}
          <div className="techBadges font-light absolute bottom-1 z-40 text-primary text-xs">
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 mb-1 ml-1 z-40 rounded-s-sm rounded-e-lg text-xs">
              Next.js
            </span>
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 mb-1 ml-1 z-40 rounded-s-sm rounded-e-lg">
              MongoDB
            </span>
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 mb-1 ml-1 z-40 rounded-s-sm rounded-e-lg">
              NextAuth
            </span>
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 ml-1 mb-1 z-40 rounded-s-sm rounded-e-lg">
              Tailwind
            </span>
          </div>
        </Link>{" "}
        <Link
          href="https://dogs-n-films-catalog-app.vercel.app"
          target="_blank"
          className="relative w-1/3 transition-all duration-500 hover:w-2/3"
        >
          <Image
            className="h-full w-full rounded-sm object-cover overflow-hidden aspect-auto"
            src={graduate.src}
            height={400}
            width={600}
          />
          <div className="absolute font-sans font-normal tracking-widest leading-9 box-border m-0 flex flex-col items-start justify-center text-primary text-5xl top-0 left-0 z-20 w-full h-full bg-secondary/80 uppercase">
            <h1>Can </h1>
            <h1>Dogs</h1>
            <h1 className="absolute left-56"> & </h1>
            <h1>Movies</h1>
            <h1>go together</h1>
            <span className="absolute top-[322px] left-[350px] rotate-180">
              ?
            </span>
          </div>
          <div className="techBadges font-light absolute bottom-1 z-40 text-primary text-xs">
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 mb-1 ml-1 z-40 rounded-s-sm rounded-e-lg text-xs">
              Next.js
            </span>

            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 ml-1 mb-1 z-40 rounded-s-sm rounded-e-lg">
              Tailwind
            </span>
          </div>
        </Link>
        <div className="relative w-1/3 transition-all duration-500 hover:w-2/3">
          <Image
            className="h-full w-full rounded-sm object-cover overflow-hidden aspect-auto"
            src={dashboard.src}
            height={400}
            width={600}
          />
          <div className="absolute font-sans font-normal tracking-widest leading-9 box-border m-0 flex flex-col items-start justify-center text-primary text-5xl top-0 left-0 z-20 w-full h-full bg-secondary/80 uppercase">
            {" "}
            <h1>Yet</h1> <h1>another </h1>
            <h1p>admin</h1p>
            <h1> dashboard</h1>
            <span className="absolute top-[293px] left-[330px] rotate-45">
              !
            </span>
          </div>
          <div className="techBadges font-light absolute bottom-1 z-40 text-primary text-xs">
            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 mb-1 ml-1 z-40 rounded-s-sm rounded-e-lg text-xs">
              Next.js
            </span>

            <span className="bg-secondary/70 py-[1px] pl-1 pr-2 ml-1 mb-1 z-40 rounded-s-sm rounded-e-lg">
              Sass
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppWrap(Header, "home");
