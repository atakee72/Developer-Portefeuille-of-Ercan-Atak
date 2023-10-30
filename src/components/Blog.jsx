import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";

const builder = imageUrlBuilder(client);

export default function Blog({ posts }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <section className="container bg-slate-100 mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      <div className="grid grid-cols-5 gap-10">
        {posts.map((post) => (
          <div className=" bg-white rounded-lg relative overflow-hidden  duration-300 ease-in-out  m-4 p-4 shadow-md hover:shadow-lg hover:translate-y-[-3px] hover:translate-x-[3px] transition-transform">
            <div className="absolute font-alegreya font-semibold text-xs text-black bg-pink-200 px-4 py-0.5 right-8 top-8 rounded-full">
              {post.label}
            </div>
            <Link
              key={post._id}
              href={post.slug.current}
              className="p-4 hover:bg-blue-50 flex flex-col bg-slate-100 "
            >
              <div>
                <Image
                  src={urlForImage(post.mainImage).width(100).height(100).url()} // Generate the image URL using urlForImage
                  width={100}
                  height={100}
                  alt={post?.mainImage?.alt}

                  // fill
                  // loading="lazy"
                  // className=" object-contain"
                />

                <h3 class="font-semibold text-lg leading-6  text-black px-4 py-4 m-0">
                  {post.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-7">
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
