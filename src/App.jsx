import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

// Main App component
const App = () => {
  // Movies state to store the list of movies
  const [movies, setMovies] = useState([
    {
      title: 'Us',
      description: 'A chilling psychological thriller',
      posterURL: '/Us.png',
      rating: 8.8,
    },
    {
      title: 'Karate Kid',
      description: 'An inspiring martial arts journey.',
      posterURL: '/Karate Kid.png',
      rating: 8.6,
    },
  ]);

  // Filtered movies state
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Handle filter based on title and rating
  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered); // Update filtered movie list
  };

  // Add new movie function, using prompt for simplicity
  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('Enter poster URL:'),
      rating: parseFloat(prompt('Enter movie rating:')),
    };
    // Add the new movie to the list and update state
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="text-center my-4">
        <h1 className="display-4">My Movie App</h1>
        <p className="lead">movie collection!</p>
      </div>

      {/* Add New Movie Button */}
      <div className="text-center mb-4">
        <button
          onClick={handleAddMovie}
          className="btn btn-primary btn-lg"
        >
          Add New Movie
        </button>
      </div>

      {/* Centered Filter Section using Bootstrap Grid */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6"> 
          <Filter onFilter={handleFilter} />
        </div>
      </div>

      {/* Movie List Display */}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

