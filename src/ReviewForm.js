import React, { useState } from 'react';

const ReviewForm = ({ movieId, addReviewToMovie }) => {
  // Initialize state variables for review text and rating
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if rating is between 1 and 5 before submitting
    if (/^[1-5]$/.test(rating)) {
      // Create a combined review text with "Rating: (input) | (reviewText)"
      const combinedReview = `Rating: ${rating} | ${reviewText}`;

      // Create a review object with the combined review text and the rating
      const review = {
        text: combinedReview, // Include the combined review text
        rating: rating,
      };

      // Call the 'addReviewToMovie' function, passing 'movieId' and the 'review' object
      addReviewToMovie(movieId, review);

      // Reset the form inputs
      setReviewText('');
      setRating('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for rating */}
      <input
        type="number" // Use type "number" to accept only numeric input
        value={rating} // Bind the input value to the 'rating' state
        onChange={(e) => {
          const enteredValue = e.target.value;
          if (/^[1-5]$/.test(enteredValue)) {
            setRating(enteredValue);
          }
        }}
        placeholder="Leave a rating 1-5" // Set a placeholder text for the input
        className="rating-input" // Apply the "rating-input" class for styling
        min="1" // Set the minimum value
        max="5" // Set the maximum value
        onWheel={(e) => e.target.blur()} // Prevent mouse wheel input
        onKeyDown={(e) => e.preventDefault()} // Prevent keyboard arrow key input
        style={{ '-moz-appearance': 'textfield' }} // Firefox specific style
      />

      {/* Input for leaving a review */}
      <input
        type="text"
        value={reviewText} // Bind the input value to the 'reviewText' state
        onChange={(e) => setReviewText(e.target.value)} // Update the 'reviewText' state when the input value changes
        placeholder="Leave a review" // Set a placeholder text for the input
      />

      {/* Button for submitting the form */}
      <button type="submit">Submit Rating and Review</button>
    </form>
  );
};

export default ReviewForm;
