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

// vuvuzela
const targetAudience =
  "Main age group: 26-45 (80% from Hanoi)\nMale, high income, enjoys luxury, successful\n Income level B+, A";
const socialMediaKPIs =
  "Increased EngagementIncreased Accounts Reached/Impressions/Video ViewsIncreased\nFollowing Count More bookings (tracked via booking system) \nInventive activity series 'Vuvuzela - Vuivuijluly'";

function BlogLayout({ title, place, slogan, goals, solutions, results, img }) {
  const splitGoals = useMemo(() => goals.split("\n"), [goals]);
  const splitSolutions = useMemo(() => solutions.split("\n"), [solutions]);
  const splitResults = useMemo(() => results.split("\n"), [results]);

  // vuvuzela
  const splitTargetAudience = useMemo(() => targetAudience.split("\n"), []);
  const splitSocialMediaKPIs = useMemo(() => socialMediaKPIs.split("\n"), []);

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

        {/* Vuvuzela */}
        {title === "Vuvuzela - High-End Beer Restaurant" && (
          <>
            <div className="text-xl py-8">
              <div className="uppercase font-medium">TARGET AUDIENCE </div>
              <SplitLines lines={splitTargetAudience} />
            </div>

            <div className="text-xl py-8">
              <div className="uppercase font-medium">SOCIAL MEDIA KPI'S</div>
              <SplitLines lines={splitSocialMediaKPIs} />
            </div>
          </>
        )}

        {img.length > 0 && <hr className="border-black" />}
        <BlogGallery imgBlogGallery={img} />
      </div>
      <Footer />
    </>
  );
}

export default BlogLayout;
