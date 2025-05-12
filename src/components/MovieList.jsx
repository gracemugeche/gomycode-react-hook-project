//importing the moviecard component
import MovieCard from './MovieCard';

// MovieList component takes an array of 'movies' as a prop
const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;

