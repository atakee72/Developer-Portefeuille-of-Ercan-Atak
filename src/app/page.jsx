import React from "react";
// import { SanityDocument } from "next-sanity";
import { postsQuery } from "../../sanity/lib/queries.js";
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

  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Topics />
        <Info />
        <Blog posts={posts} />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default App;
