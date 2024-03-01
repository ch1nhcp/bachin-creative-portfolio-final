import React from "react";
import { useParams } from "react-router-dom";

import BlogLayout from "../components/BlogLayout";
import { BlogList } from "./BlogData.constant";
function Blog() {
  let { id } = useParams();

  const blogEntry = BlogList.find((blog) => blog.id === id);

  return (
    <>
      <BlogLayout
        title={blogEntry.title}
        place={blogEntry.place}
        slogan={blogEntry.slogan}
        goals={blogEntry.goals}
        solutions={blogEntry.solutions}
        results={blogEntry.results}
        img={blogEntry.img}
      />
    </>
  );
}

export default Blog;
