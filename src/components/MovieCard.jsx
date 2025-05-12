//// MovieCard component
const MovieCard = ({ movie }) => {
  return (
    // Wrapper div for the card
    <div className="border border-gray-300 p-2.5 w-[200px]">
      <img
        src={movie.posterURL}
        alt={`${movie.title} Poster`}
        className="w-full h-auto mb-2"
      />
      {/* Movie title with larger font size and bold styling */}
      <h3 className="text-lg font-semibold">{movie.title}</h3>

      {/* Movie description with smaller font size*/}
      <p className="text-sm text-gray-700">{movie.description}</p>

      {/* Movie rating with a smaller font size and even lighter color */}
      <p className="text-sm text-gray-500">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
