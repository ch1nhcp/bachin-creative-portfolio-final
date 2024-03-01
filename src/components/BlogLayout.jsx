import React, { useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogGallery from "./BlogGallery";

const SplitLines = ({ lines }) => (
  <>
    {lines.map((line, index) => (
      <p key={index} className="pb-2 font-light">
        - {line}
      </p>
    ))}
  </>
);

function BlogLayout({ title, place, slogan, goals, solutions, results, img }) {
  const splitGoals = useMemo(() => goals.split("\n"), [goals]);
  const splitSolutions = useMemo(() => solutions.split("\n"), [solutions]);
  const splitResults = useMemo(() => results.split("\n"), [results]);

  return (
    <>
      <Header />
      <div className="py-20 px-80 border-b border-black">
        <div className="text-center text-4xl font-sans-custom uppercase">
          {title}
        </div>
        <div className="text-center text-4xl font-sans-custom uppercase">
          <i>{place}</i>
        </div>
        <div className="text-center text-xl py-10">{slogan}</div>
        <hr className="border-black" />

        {goals.length > 0 && (
          <div className="text-xl py-8">
            <div className="uppercase font-medium">Goals</div>
            <SplitLines lines={splitGoals} />
          </div>
        )}

        {solutions.length > 0 && (
          <div className="text-xl py-8">
            <div className="uppercase font-medium">Solutions</div>
            <SplitLines lines={splitSolutions} />
          </div>
        )}

        {results.length > 0 && (
          <div className="text-xl py-8">
            <div className="uppercase font-medium">The Results</div>
            <SplitLines lines={splitResults} />
          </div>
        )}

        {img.length > 0 && <hr className="border-black" />}
        <BlogGallery imgBlogGallery={img} />
      </div>
      <Footer />
    </>
  );
}

export default BlogLayout;
