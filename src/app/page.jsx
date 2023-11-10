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
    <>
      <header>
        <Navbar />
        <Header />
      </header>

      <main className="w-screen h-screen">
        <About />
        <Work />
        <Blog posts={posts} />
        <Testimonials testimonials={testimonials} />
        <Footer />
      </main>
    </>
  );
};

export default App;
