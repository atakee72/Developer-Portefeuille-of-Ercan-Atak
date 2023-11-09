import React from "react";
import { postsQuery, testimonialsQuery } from "../../sanity/lib/queries.js";
import { sanityFetch } from "../../sanity/lib/sanityFetch.js";
import {
  Header,
  Info,
  Topics,
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
        <Header />
        <Navbar />
      </header>

      <main>
        <Info />
        <Blog posts={posts} />
        <Testimonials testimonials={testimonials} />
        <Topics />
        <Footer />
      </main>
    </>
  );
};

export default App;
