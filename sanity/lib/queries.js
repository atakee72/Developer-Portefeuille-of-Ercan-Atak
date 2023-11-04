// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, mainImage, label
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, _createdAt, categories
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;


// Get all testimonials
export const testimonialsQuery = groq`*[_type == "testimonials" && defined(name) && defined(company) && defined(message) && defined(image)]{
  _id, image, name, company, message
}`;
