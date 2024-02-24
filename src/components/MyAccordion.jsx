import React from "react";
import {
  dashboard,
  graduate,
  maHalle,
  // syntax,
} from "../../public/assets/index.js";
import Image from "next/image.js";
import Link from "next/link";

const MyAccordion = () => {
  return (
    <div className="mt-5 p-6 bg-primary gap-5 flex font-semibold text-xl 2xl:w-[1600px] xl:w-[1400px] lg:w-[1200px] md:w-[1000px] sm:w-[800px]  h-[550px] rounded-sm overflow-hidden">
      <Link
        href="https://mahalle-kiez-gesichterbuch.vercel.app"
        target="_blank"
        className="relative w-1/3 transition-all duration-500 hover:w-2/3"
      >
        <Image
          className="h-full w-full rounded-sm object-cover aspect-auto"
          src={maHalle.src}
          height={400}
          width={600}
          alt="Logo of MaHalle"
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
          className="h-full w-full rounded-sm object-cover aspect-auto"
          src={graduate.src}
          height={400}
          width={600}
          alt="Cover picture of Dogs and Movies"
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
          className="h-full w-full rounded-sm object-cover aspect-auto"
          src={dashboard.src}
          height={400}
          width={600}
          alt="Cover picture of the Dashboard"
        />
        <div className="absolute font-sans font-normal tracking-widest leading-9 box-border m-0 flex flex-col items-start justify-center text-primary text-5xl top-0 left-0 z-20 w-full h-full bg-secondary/80 uppercase">
          {" "}
          <h1>Yet</h1> <h1>another </h1>
          <h1p>admin</h1p>
          <h1> dashboard</h1>
          <span className="absolute top-[293px] left-[330px] rotate-45">!</span>
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
  );
};

export default MyAccordion;
