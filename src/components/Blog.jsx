"use client";

import Link from "next/link";
import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";
import AppWrap from "@/utils/AppWrap.js";
import Masonry from "react-masonry-css";

// const builder = imageUrlBuilder(client);

import React from "react";

const Blog = ({ posts }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section
    // className=" place-items-center mx-auto grid grid-cols-1 min-h-screen mt-28 w-full"
    >
      <h1 className="text-2xl text-center h-1/5 p-1 font-bold my-10 ">
        Latest {title} in my blog
      </h1>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid flex ml-[-30px] w-auto "
        columnClassName="my-masonry-grid_column pl-[30px] bg-clip-padding "

        // className="h-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-5 mx-1 xs:mx-7 md:mx-12 xl:mx-20 2xl:mx-28"
      >
        {posts.map((post) => (
          <Link
            href={post.slug.current}
            key={post._id}
            className="bg-gray mb-8"

            // className="container h-auto mx-auto group max-gap-y-1"
          >
            <div className=" text-white/90 bg-white/50 backdrop-blur-sm p-4 rounded-xl duration-300 ease-in-out shadow-md hover:shadow-lg hover:translate-y-[-3px] transition-transform flex flex-col h-auto w-3/4 xs:w-2/3 sm:w-3/4 md:w-3/4 xl:w-4/5 2xl:w-2/3 mx-auto">
              <div className="flex flex-col items-center justify-center  m-auto h-auto bg-gradient-to-br from-gray/80 to-lightGray/80 backdrop-blur-sm rounded-xl  p-6">
                <h3 className=" h-2/5 mx-1 my-2 w-full text-center text-2xl">
                  {post.title}
                </h3>

                <div className=" relative h-2/5 w-full aspect-[3/2] my-3">
                  <div className="absolute font-semibold text-xs text-white/90 px-4 py-0 right-2 top-2 rounded-lg z-10">
                    {post.label}
                  </div>
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post?.mainImage?.alt}
                    fill
                    sizes="100vw"
                    className="rounded-xl"
                  />
                </div>
                <div className=" w-2/3 h-1/5 mx-auto text-center border-white border-4 mt-3 rounded-xl group-hover:bg-secondary/80 p-1 ">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Masonry>
      <div className="h-1/5 w-1/6 my-2 flex items-center justify-center text-center bg-white/80 backdrop-blur-sm rounded-md mx-[900px] px-0 font-semibold text-xl  text-secondary hover:bg-secondary/80 hover:backdrop-blur-sm hover:text-white hover:border-4 hover:border-white">
        <a href="#">All Posts</a>
      </div>
    </section>
  );
};

export default AppWrap(Blog, "blog");
