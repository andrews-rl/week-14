// Import React from the 'react' library
import React from 'react';

// Define the Stars component as a functional component
const Stars = ({ rating, onRatingChange }) => {
  const stars = [];
  // Loop to create the star rating UI
  for (let i = 1; i <= 5; i++) {
    stars.push(
      // Render a span element for each star
      <span
        key={i} // Set a unique key for each star
        onClick={() => onRatingChange(i)} // Add an onClick event handler to change the rating when a star is clicked
        className={i <= rating ? 'active' : ''} // Apply the 'active' class to filled stars based on the rating
      >
        &#9733; {/* Display a star character using HTML entity */}
      </span>
    );
  }

  // Render a div with the "star-rating" class containing the stars
  return <div className="star-rating">{stars}</div>;
};

// Export the Stars component as the default export of this module
export default Stars;

