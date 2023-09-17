// Import React from the 'react' library
import React from 'react';

// Define the Review component as a functional component
const Review = ({ review }) => {
  return (
    // Render a div with the "review" class
    <div className="review">
      {/* Display the review text inside a paragraph element */}
      <p>{review.text}</p>
    </div>
  );
};

// Export the Review component as the default export of this module
export default Review;



