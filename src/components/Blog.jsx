import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";
import AppWrap from "@/utils/AppWrap.js";

const builder = imageUrlBuilder(client);

import React from "react";

const Blog = ({ posts }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <section className=" place-items-center mx-auto grid grid-cols-1 min-h-screen mt-28 w-full">
      <h1 className="text-2xl text-center h-1/5 p-1 font-bold my-10 ">
        Latest {title} in my blog
      </h1>
      <div className="h-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-5 mx-1 xs:mx-7 md:mx-12 xl:mx-20 2xl:mx-28">
        {posts.map((post) => (
          <>
            <Link
              href={post.slug.current}
              key={post._id}
              className="container h-auto mx-auto group"
            >
              <div className=" text-white bg-white p-4 rounded-xl duration-300 ease-in-out shadow-md hover:shadow-lg hover:translate-y-[-3px] transition-transform flex flex-col h-auto w-3/4 xs:w-2/3 sm:w-3/4 md:w-3/4 xl:w-4/5 2xl:w-2/3 mx-auto">
                <div className="flex flex-col items-center justify-center  m-auto h-auto bg-gradient-to-br from-gray to-lightGray rounded-xl  p-6">
                  <h3 className=" h-2/5 mx-1 my-2 w-full text-center text-2xl">
                    {post.title}
                  </h3>

                  <div className=" relative h-2/5 w-full aspect-[3/2] my-3">
                    <div className="absolute font-semibold text-xs text-white px-4 py-0 right-2 top-2 rounded-lg z-10">
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
            {/* <Link
              href={post.slug.current}
              key={post._id}
              className="container mx-auto group"
            >
              <div className="relative bg-white rounded-lg duration-300 ease-in-out m-4 shadow-md hover:shadow-lg hover:translate-y-[-3px] transition-transform flex flex-col h-4/5 w-3/4 xs:w-2/3 sm:w-3/4 md:w-3/4 xl:w-4/5 2xl:w-2/3 mx-auto">
                <div className="absolute font-semibold text-xs text-white px-4 py-0 right-2 top-2 rounded-lg z-10">
                  {post.label}
                </div>

                <div className="relative  w-full aspect-[3/2]">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post?.mainImage?.alt}
                    fill
                    sizes="100vw"
                  />
                </div>

                <div className="container flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-6 text-secondary px-4 py-4 m-0">
                    {post.title}
                  </h3>
                  <div className="font-semibold h-11 text-center text-secondary/60 group-hover:bg-secondary group-hover:text-white flex justify-center items-center">
                    Read more
                  </div>
                </div>
              </div>{" "}
            </Link> */}
          </>
        ))}
      </div>
      <div className="h-1/5 w-1/6 my-2 flex items-center justify-center text-center bg-white rounded-md mx-[900px] px-0 font-semibold text-xl  text-secondary hover:bg-secondary hover:text-white hover:border-4 hover:border-white">
        <a href="#">All Posts</a>
      </div>
    </section>
  );
};

export default AppWrap(Blog, "blog");
