import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <h2 className="text-center">Movie not found</h2>;

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <div className="my-4">
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;
