import React from "react";
import { postsQuery, testimonialsQuery } from "../../sanity/lib/queries.js";
import { sanityFetch } from "../../sanity/lib/sanityFetch.js";
import {
  Header,
  About,
  Work,
  Blog,
  Testimonials,
  Footer,
  Navbar,
} from "@/components";
const App = async () => {
  const posts = await sanityFetch({ query: postsQuery });
  const testimonials = await sanityFetch({ query: testimonialsQuery });

  return (
    <div className="bg-cover bg-fixed bg-[url(https://c2k4h3i2.rocketcdn.me/w/wp-content/uploads/2022/11/black-and-white-lightroom-presets-boat_2.jpg)] dark:bg-gradient-radial dark:from-secondary dark:to-secondary/20">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Blog posts={posts} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default App;
