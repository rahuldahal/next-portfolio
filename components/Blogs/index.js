import React from "react";
import Link from "@components/Link";
import BlogCards from "./BlogCards";

export default function Blogs({ blogDetails, handle }) {
  return (
    <main className="blogCards overlay codeBackground">
      <div className="contentsWrap">
        <BlogCards cardDetails={blogDetails} />
      </div>
    </main>
  );
}
