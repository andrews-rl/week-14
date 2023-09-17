// Import React and useState from the React library
import React, { useState } from 'react';

// Import the MovieList component from a separate file
import MovieList from './MovieList';

// Import CSS styles for the App component
import './App.css';

// Define the App component
const App = () => {
  // Define the initial state for movies using the useState hook
  const [movies, setMovies] = useState([
    // Sample movie data with reviews
    {
      id: 1,
      title: 'The Last Kids on Earth',
      image: 'https://assets1.ignimgs.com/thumbs/userUploaded/2021/4/7/thelastkidsonearthandthestaffofdoomstorytrailerblogroll-1617811633636.jpg?width=1280',
      synopsis: 'The Last Kids on Earth is a series of books by Max Brallier, illustrated by Douglas Holgate, about a group of kids who survive a monster apocalypse123. The main character is Jack Sullivan, a foster kid who lives in a tree house and calls himself a “zombie-fighting, monster-slaying tornado of cool.”',
      rating: 4,
      reviews: [
        { id: 1, text: 'Good movie!', rating: 4 },
        { id: 2, text: 'Awesome!', rating: 3 },
      ],
    },
    {
      id: 2,
      title: 'Ninja Turtles Mutant Mayhem',
      image: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/07/tmnt-mutant-mayhem-movie-review.jpg',
      synopsis: 'Teenage Mutant Ninja Turtles: Mutant Mayhem is a 2023 American computer-animated superhero film directed by Jeff Rowe, who co-wrote the screenplay with Seth Rogen, Evan Goldberg, Dan Hernandez, and Benji Samit. It is the seventh theatrical Teenage Mutant Ninja Turtles film and a reboot of the Turtles series.',
      rating: 3.8,
      reviews: [
        { id: 3, text: 'Enjoyed it.', rating: 4 },
        { id: 4, text: 'It was amazing.', rating: 3 },
      ],
    },
    // You can add more movie data as needed
  ]);

  // Function to add a review to a movie
  const addReviewToMovie = (movieId, review) => {
    // Create a new array of movies with the updated review for the specified movie
    const updatedMovies = movies.map(movie => {
      if (movie.id === movieId) {
        return {
          ...movie, // Copy the existing movie properties
          reviews: [...movie.reviews, review], // Add the new review to the movie's reviews array
        };
      }
      return movie; // Return the unchanged movie
    });

    // Update the movies state with the new array of movies
    setMovies(updatedMovies);
  };

  // Render the App component
  return (
    <div className="App">
      <h1>Movies</h1>
      {/* Render the MovieList component and pass the movies data and the addReviewToMovie function */}
      <MovieList movies={movies} addReviewToMovie={addReviewToMovie} />
    </div>
  );
};

// Export the App component
export default App;
