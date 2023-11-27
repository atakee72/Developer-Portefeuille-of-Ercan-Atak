import React from "react";
import { urlForImage } from "../../sanity/lib/image.js";
import AppWrap from "@/utils/AppWrap.js";
import BlogPostCards from "./BlogPostCards.jsx";

const Blog = ({ posts }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <section className="container min-h-screen flex flex-col items-center mt-32 w-9/12 mx-auto rounded-3xl shadow-md bg-primary/10">
      <h1 className="text-2xl text-center text-primary/90 h-1/5 p-1 font-bold my-10 ">
        Latest {title} in my blog
      </h1>
      <div className="container gap-4 columns-1 md:columns-2 xl:columns-3 2xl:columns-4 p-7 ">
        {posts.map((post) => (
          <div key={post._id}>
            <BlogPostCards
              href={post.slug.current}
              title={post.title}
              label={post.label}
              src={urlForImage(post.mainImage).url()}
              alt={post?.mainImage?.alt}
            />
          </div>
        ))}
      </div>
      <div className="h-1/5 w-1/6 py-2 mt-8 mb-14 flex items-center justify-center text-center bg-white/80 backdrop-blur-sm rounded-md mx-[900px] px-0 font-semibold text-xl  text-secondary hover:bg-secondary/70 hover:backdrop-blur-sm hover:text-white hover:border-2 hover:border-white">
        <a href="#">More</a>
      </div>
    </section>
  );
};

export default AppWrap(Blog, "blog");
