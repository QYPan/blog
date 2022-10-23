import React from "react";

export default function ArticleIntro({ introInfo }) {
  return (
    <div className="mt-8 flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        className="h-32 w-32 flex-shrink-0"
        src={introInfo.imageUrl}
        alt={introInfo.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {introInfo.title}
        </h3>
        <p className="text-gray-600">{introInfo.intro}</p>
        <p className="mt-4">{introInfo.date}</p>
      </div>
    </div>
  );
}
