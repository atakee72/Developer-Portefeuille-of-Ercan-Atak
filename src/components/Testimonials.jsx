import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";
import AppWrap from "@/utils/AppWrap.js";

const builder = imageUrlBuilder(client);

const Testimonials = ({ testimonials }) => {
  if (testimonials.length === 0) {
    return (
      <section>
        <div>
          <h2>What others say?</h2>
          <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#01889f]/30 mx-auto min-h-screen mt-28 w-full">
      <div>
        <h2 className="text-2xl p-4 font-bold">What people say?</h2>

        <div className="flex flex-col md:flex-row justify-around">
          {testimonials.map((testimonial, i) => (
            <div
              className="m-4 flex flex-col justify-center items-center"
              key={i}
            >
              <Image
                src={urlForImage(testimonial.image).url()}
                width={100}
                height={100}
                alt="commenting person"
                className="rounded-lg"
              />
              <div className="font-bold text-xl mt-4">{testimonial.name}</div>
              <div className="text-xs uppercase px-2 py-0 text-opacity-70">
                {testimonial.company}
              </div>
              <div className="font-normal text-xs h-5 mt-1">
                {testimonial.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Testimonials, "testimonials");

