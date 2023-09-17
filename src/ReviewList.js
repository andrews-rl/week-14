// Import React and the Review component from their respective modules
import React from 'react';
import Review from './Review';

// Define the ReviewList component as a functional component
const ReviewList = ({ reviews }) => {
  return (
    // Render a div with the "review-list" class
    <div className="review-list">
      {/* Map over the array of reviews and render a Review component for each review */}
      {reviews.map(review => (
        <Review key={review.id} review={review} /> 
      ))}
    </div>
  );
};

// Export the ReviewList component as the default export of this module
export default ReviewList;
