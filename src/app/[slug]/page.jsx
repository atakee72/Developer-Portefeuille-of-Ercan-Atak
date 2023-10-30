import { SanityDocument } from "@sanity/client";
import Post from "@/components/BlogPost";
import { postPathsQuery, postQuery } from "../../../sanity/lib/queries.js";
import { sanityFetch } from "../../../sanity/lib/sanityFetch.js";
import { client } from "../../../sanity/lib/client.js";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }) {
  const post = await sanityFetch({ query: postQuery, params });

  return <Post post={post} />;
}
