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
    <div className=" bg-gradient-radial from-white to-gray dark:from-secondary dark:to-secondary/20">
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
