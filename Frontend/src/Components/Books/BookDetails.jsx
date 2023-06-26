import React from 'react';
import './BookDetails.css'

const BookDetailsPopup = ({ book, handleAddToCart, handleClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <div className="book-details">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          {/* Display other book details here */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
