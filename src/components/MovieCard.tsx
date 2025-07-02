

interface MovieProps {
  movie: any;
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="bg-white border m-5 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300">
      
      <div className="relative group overflow-hidden">
        <img
          className="w-full h-80 object-cover scale-140 transition duration-300 group-hover:scale-110 "
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <img
          className="absolute top-4 right-4 w-20 h-14  object-cover rounded shadow-lg transition duration-300 group-hover:scale-200 "
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={`${movie.title} Backdrop`}
        />
      </div>

      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {movie.title}
        </h5>
        <h5 className="text-md font-semibold text-gray-900 dark:text-white mb-1 font-mono italic">
          Rate {movie.vote_average}
        </h5>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Release: {movie.overview}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Release: {movie.release_date}
        </p>
      </div>

    </div>
  );
};

export default MovieCard;
