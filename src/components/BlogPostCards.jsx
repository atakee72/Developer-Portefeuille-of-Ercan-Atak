import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPostCards = ({ href, title, label, src, alt }) => {
  return (
    <div className="container text-white/90 bg-white/20 backdrop-blur-sm p-4 rounded-xl duration-300 ease-in-out shadow-md hover:shadow-lg h-auto hover:translate-y-[-3px] transition-transform flex flex-col mx-auto mb-8  overflow-auto ">
      <Link href={href}>
        <div className="flex flex-col items-center justify-center  m-auto h-auto bg-gradient-to-br from-gray/80 to-lightGray/80 backdrop-blur-sm rounded-xl  p-6">
          <h3 className=" mx-1 my-2 w-full text-center text-2xl">{title}</h3>

          <div className=" relative  w-full aspect-[3/2] my-3">
            <div className="absolute font-semibold text-xs text-white/90 px-4 py-0 right-2 top-2 rounded-lg z-10">
              {label}
            </div>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="rounded-xl"
            />
          </div>
          <div className=" w-2/3 h-1/5 mx-auto text-center border-white/90 hover:bg-secondary/70 border-2 mt-3 rounded-xl group-hover:bg-secondary/80 p-1 ">
            Read more
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCards;
