/**
 * UI for the blog; MDX/Frontmatter content & utilities in src/blog/
 */
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { getPostById, postsMeta, renderMdxContent } from "../blog";

function Blog() {
  return (
    <Routes>
      <Route path="/:postId" element={<Post />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

function Index() {
  // TODO: Create an index page for the blog:
  // ☑️  List of truncated posts & links
  // ☑️  Filter by tag
  // ☑️  Search
  const posts = postsMeta();
  console.log({ posts });
  return (
    <div>
      <h1>Blog Index</h1>
    </div>
  );
}

function Post() {
  const { postId } = useParams();
  const post = getPostById(postId);
  return post ? renderMdxContent(post) : <NotFound />;
}

function NotFound() {
  // TODO: Create a nicer not-found page:
  // ☑️  Fun graphic / message
  // ☑️  Link back to index
  // ☑️  Fuzzy match suggestion?
  return <div>Post not found!</div>;
}

export default Blog;
