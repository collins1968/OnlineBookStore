import './books.css'
import { useState, useEffect } from 'react'; 
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book3 from './images/book3.jpg';
import { FaShoppingCart } from 'react-icons/fa'
// import { Toast } from 'react-toastify/dist/components';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import  BookDetailsPopup  from './BookDetails';

export const MainContent = () => {

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

  const FetchBooksByCategories = async () => {
    try {
        const response = await axios.get('http://localhost:8081/books');
        setBooks(response.data) ;
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    FetchBooksByCategories()
}, [])


  const handleAddToCart = () => {
    toast.success('added to cart');
    // alert('added succes');
  }

  const groupByCategory = () => {
    const groupedBooks = {};

    books.forEach(book => {
      const { category_name } = book;

      if (groupedBooks[category_name]) {
        groupedBooks[category_name].push(book);
      } else {
        groupedBooks[category_name] = [book];
      }
    });
    return groupedBooks;
    };

  const renderBooksByCategory = () => {
    const groupedBooks = groupByCategory();

    const handleBookClick = book => {
      setSelectedBook(book);
    };

    return Object.entries(groupedBooks).map(([category_name, books]) => (
      <div key={category_name} className="category">
        <h2>{category_name}</h2>
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={() => handleBookClick(book)}>Readmore</button>
            </div>
          ))}
        </div>
      </div>
    ));
    };
 
      
    return (
        <>
        <div className="books-page">
      <h1>Books</h1>
      {renderBooksByCategory()}
      {selectedBook && (
        <BookDetailsPopup
          book={selectedBook}
          handleAddToCart={handleAddToCart}
          handleClose={() => setSelectedBook(null)}
        />
      )}
    </div>
        </>
    )
}



