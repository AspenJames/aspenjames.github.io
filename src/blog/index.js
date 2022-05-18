/**
 * MDX/Frontmatter related functionality here; UI in src/pages/
 */
import React from "react";

import * as Test from "./test-post";

const METADATA_TAGS = Object.freeze({
  TITLE: "title",
  DATE: "date",
  ID: "postId",
  TAGS: "tags",
});

const posts = [Test];

// Returns a list of Post metadata objects.
export function postsMeta() {
  const metaKeys = Object.values(METADATA_TAGS);
  return posts.map((p) =>
    metaKeys.reduce((obj, key) => {
      Object.assign(obj, { [key]: p[key] });
      return obj;
    }, {})
  );
}

export function getPostById(id) {
  return posts.find(({ [METADATA_TAGS.ID]: postId }) => postId === id) || null;
}

// Accepts a Post & returns rendered MDX content.
export function renderMdxContent({ default: Content }) {
  return <Content />;
}
