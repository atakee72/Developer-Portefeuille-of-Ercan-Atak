import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client.js";
import { urlForImage } from "../../sanity/lib/image.js";

const builder = imageUrlBuilder(client);

const Testimonials = ({ testimonials }) => {
  if (testimonials.length === 0) {
    return (
      <section id="testimonials">
        <div id="wrapper">
          <h2>What our students say?</h2>
          <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="bg-pink-200/30 mx-auto ">
      <div id="wrapper">
        <h2>What our students say?</h2>

        <div className="mt-12 flex justify-evenly">
          {testimonials.map((testimonial, i) => (
            <div className="w-[264px]" key={i}>
              <Image
                src={urlForImage(testimonial.image).url()}
                width={100}
                height={100}
                alt="commenting person"
                className="rounded-lg"
              />
              <div className="reviewer-details">
                <div className="font-bold text-xl mt-4">{testimonial.name}</div>
                <div className="text-xs uppercase px-2 py-0 text-opacity-70">
                  {testimonial.company}
                </div>
                <div className="font-normal text-xs h-5 mt-1">
                  {testimonial.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
