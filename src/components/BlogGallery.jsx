import React from "react";
import { Link } from "react-router-dom";

function BlogGallery({ imgBlogGallery }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
      {imgBlogGallery.map((image, index) => (
        <Link
          to={`/portfolio${image.url}`}
          key={index}
          className="relative transition-transform duration-300 hover:scale-105"
        >
          <img
            className="object-cover w-full h-full"
            src={image.src}
            alt={{ index }}
          />
          <div className=" text-center p-2">
            <p className="text-sm md:text-base font-semibold">
              {image.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogGallery;
