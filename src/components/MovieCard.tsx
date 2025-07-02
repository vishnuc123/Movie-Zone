import React from 'react';

interface MovieProps {
  movie: any;
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300">
      <img
        className="w-full h-80 object-cover hover:scale-150 hover:object-contain duration-300 transition-300"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {movie.title}
        </h5>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Release: {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
