import React from "react";
import Link from "next/link";
import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";
import AppWrap from "@/utils/AppWrap.js";
// const builder = imageUrlBuilder(client);
import BlogPostCard from "./BlogPostCard.jsx";

const Blog = ({ posts }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <section className="container min-h-screen flex flex-col items-center mt-32 w-9/12 mx-auto rounded-3xl shadow-md bg-primary/10">
      <h1 className="text-2xl text-center text-primary/90 h-1/5 p-1 font-bold my-10 ">
        Latest {title} in my blog
      </h1>
      <div
        className="container gap-4 columns-1 md:columns-2 xl:columns-3 2xl:columns-4 p-7 "
        // className="container masonry place-items-start lg:masonry-lg xl:masonry-xl w-auto gap-0 mx-1 "
      >
        {posts.map((post) => (
          <div key={post._id}>
            <BlogPostCard
              href={post.slug.current}
              title={post.title}
              label={post.label}
              src={urlForImage(post.mainImage).url()}
              alt={post?.mainImage?.alt}
            />
          </div>
          // <div
          //   key={post._id}
          //   className="container text-white/90 bg-white/50 backdrop-blur-sm p-4 rounded-xl duration-300 ease-in-out shadow-md hover:shadow-lg h-auto hover:translate-y-[-3px] transition-transform flex flex-col mx-auto mb-8  overflow-auto "
          // >
          //   <Link href={post.slug.current}>
          //     <div className="flex flex-col items-center justify-center  m-auto h-auto bg-gradient-to-br from-gray/80 to-lightGray/80 backdrop-blur-sm rounded-xl  p-6">
          //       <h3 className=" mx-1 my-2 w-full text-center text-2xl">
          //         {post.title}
          //       </h3>

          //       <div className=" relative  w-full aspect-[3/2] my-3">
          //         <div className="absolute font-semibold text-xs text-white/90 px-4 py-0 right-2 top-2 rounded-lg z-10">
          //           {post.label}
          //         </div>
          //         <Image
          //           src={urlForImage(post.mainImage).url()}
          //           alt={post?.mainImage?.alt}
          //           fill
          //           sizes="100vw"
          //           className="rounded-xl"
          //         />
          //       </div>
          //       <div className=" w-2/3 h-1/5 mx-auto text-center border-white/90 hover:bg-secondary/70 border-2 mt-3 rounded-xl group-hover:bg-secondary/80 p-1 ">
          //         Read more
          //       </div>
          //     </div>
          //   </Link>
          // </div>
        ))}
      </div>
      <div className="h-1/5 w-1/6 py-2 mt-8 mb-14 flex items-center justify-center text-center bg-white/80 backdrop-blur-sm rounded-md mx-[900px] px-0 font-semibold text-xl  text-secondary hover:bg-secondary/70 hover:backdrop-blur-sm hover:text-white hover:border-2 hover:border-white">
        <a href="#">All Posts</a>
      </div>
    </section>
  );
};

export default AppWrap(Blog, "blog");
