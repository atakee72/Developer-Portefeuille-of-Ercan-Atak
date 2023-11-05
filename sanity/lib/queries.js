// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current) && defined(author)]{
    _id, title, slug, mainImage, label, author
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug && defined(author)][0]{ 
    title, mainImage, body, _createdAt, categories, author
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Define a query to fetch the author's data based on the reference
// export const authorQuery = groq`*[_type == "author" && _id == $authorId][0]{name, image}`;

// Get all testimonials
export const testimonialsQuery = groq`*[_type == "testimonials" && defined(name) && defined(company) && defined(message) && defined(image)]{
  _id, image, name, company, message
}`;
