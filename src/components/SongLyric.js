import React from "react";

const SongLyric = ({ title, lyrics }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <hr />
        <blockquote className="mt-2 text-gray-700 text-base whitespace-pre-wrap">
          {lyrics}
        </blockquote>
      </div>
    </div>
  );
};

export default SongLyric;
