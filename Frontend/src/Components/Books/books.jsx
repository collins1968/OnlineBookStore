import './books.css'
import { useState } from 'react'; 
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book3 from './images/book3.jpg';
import { FaShoppingCart } from 'react-icons/fa'
// import { Toast } from 'react-toastify/dist/components';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const MainContent = () => {
    const [books] = useState([
        {
          id: 1,
          title: 'Book 1',
          category: 'Fiction',
          author: 'Author 1',
          image: book1,
        },
        {
          id: 2,
          title: 'Book 2',
          category: 'Non-Fiction',
          author: 'Author 2',
          image: book2,
        },
        {
            id: 3,
            title: 'Book 3',
            category: 'Non-Fiction',
            author: 'Author 3',
            image: book3,

        },
        {
            id: 5,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
          {
            id: 6,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
          {
            id: 7,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
          {
            id: 8,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
          {
            id: 9,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
          {
            id: 10,
            title: 'Book 4',
            category: 'Fiction',
            author: 'Author 4',
            image: book1,
          },
        // Add more dummy book data...
        
    ]);

  const handleAddToCart = () => {
    toast.success('added to cart');
    // alert('added succes');
  }

  const groupByCategory = () => {
    const groupedBooks = {};

    books.forEach(book => {
      const { category } = book;

      if (groupedBooks[category]) {
        groupedBooks[category].push(book);
      } else {
        groupedBooks[category] = [book];
      }
    });
    return groupedBooks;
    };

  const renderBooksByCategory = () => {
    const groupedBooks = groupByCategory();

    return Object.entries(groupedBooks).map(([category, books]) => (
      <div key={category} className="category">
        <h2>{category}</h2>
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={handleAddToCart}>add <FaShoppingCart/> </button>
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
    </div>
        </>
    )
}



