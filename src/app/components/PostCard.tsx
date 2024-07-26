// components/PostCard.tsx

import React from 'react';

interface PostCardProps {
  title: string;
  date: string;
  genres?: string[];
  synopsis?: string;
  latestChapter?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, genres, synopsis, latestChapter }) => {
  return (
    <article style={{ backgroundColor: '#FFF9D0' }} className="bg-gray-800 text-white rounded-lg p-6 mb-6 shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
      <p  className="text-gray-600 mb-4">{date}</p>
      {genres && (
        <div className="flex flex-wrap gap-2 mb-4">
          {genres.map((genre) => (
            <span key={genre} className="bg-white px-2 py-1 rounded text-sm text-gray-500">
              {genre}
            </span>
          ))}
        </div>
      )}
      {synopsis && <p className="mb-4">{synopsis}</p>}
      {latestChapter && (
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="font-semibold mb-2">Latest Reading</h3>
          <p>{latestChapter}</p>
        </div>
      )}
    </article>
  );
}

export default PostCard;
