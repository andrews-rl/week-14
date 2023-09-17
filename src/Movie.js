// Import React and the necessary components from their respective modules
import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

// Define the Movie component as a functional component
const Movie = ({ movie, addReviewToMovie }) => {
  return (
    // Render a div with the "movie" class
    <div className="movie">
      {/* Display the movie title */}
      <h2>{movie.title}</h2>
      {/* Display the movie image */}
      <img src={movie.image} alt={movie.title} />
      {/* Display the movie synopsis */}
      <p>{movie.synopsis}</p>
      {/* Render the Stars component to display the rating */}
      <Stars rating={movie.rating} />
      {/* Render the ReviewList component to display the reviews */}
      <ReviewList reviews={movie.reviews} />
      {/* Pass the addReviewToMovie function to the ReviewForm component */}
      <ReviewForm movieId={movie.id} addReviewToMovie={addReviewToMovie} />
    </div>
  );
};

// Export the Movie component as the default export of this module
export default Movie;

