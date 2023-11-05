import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";

const builder = imageUrlBuilder(client);

export default function Blog({ posts }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <section className="container bg-slate-100 mx-auto grid grid-cols-1 min-h-fit">
      <h1 className="text-2xl p-4 font-bold">Latest {title}</h1>
      <div className="grid grid-cols-3 gap-10 h-80">
        {posts.map((post) => (
          <div
            key={post._id}
            className="relative overflow-hidden bg-white rounded-lg duration-300 ease-in-out m-4 shadow-md hover:shadow-lg hover:translate-y-[-3px] transition-transform flex flex-col min-h-full"
          >
            <div className="absolute font-semibold text-xs text-black bg-pink-200 px-4 py-0 right-2 top-2 rounded-lg z-10">
              {post.label}
            </div>

            <div className="relative w-full h-full">
              <Image
                src={urlForImage(post.mainImage).url()} // Remove width and height attributes
                alt={post?.mainImage?.alt}
                fill
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <h3 className="font-semibold text-lg leading-6 text-black px-4 py-4 m-0">
                {post.title}
              </h3>

              <Link
                href={post.slug.current}
                className="p-1 hover:bg-blue-50 bg-pink-100 rounded-lg mx-auto mt-2 mb-5 text-center "
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-7">
        <a
          href="#"
          className="font-semibold text-base px-8 py-2 bg-pink-100 hover:bg-pink-200 rounded-full mt-8 text-black"
        >
          All Posts
        </a>
      </div>
    </section>
  );
}
