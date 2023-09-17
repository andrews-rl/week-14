// Import the React library, which is required for creating React components
import React from 'react';

// Import the Movie component from a local file named 'Movie.js'
import Movie from './Movie';

// Define the MovieList component as a functional component that receives two props: 'movies' and 'addReviewToMovie'
const MovieList = ({ movies, addReviewToMovie }) => {
  // Start the return statement, which defines what the component will render
  return (
    // Render a div element with the CSS class "movie-list" for styling purposes
    <div className="movie-list">
      {/* Use the map() function to iterate over the 'movies' array */}
      {movies.map(movie => (
        // For each 'movie' object in the array, render the 'Movie' component
        <Movie key={movie.id} movie={movie} addReviewToMovie={addReviewToMovie} />
      ))}
    </div>
  );
};

// Export the 'MovieList' component as the default export of this module
export default MovieList;






