import { useForm } from 'react-hook-form';
import axios from 'axios';
// import apiUrl from '../../utils/utils'
import './AddBooks.css';

const AddBookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

 // Adjust the API endpoint URL

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8081/books`, data);
      console.log(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error(error.response.data);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-book-form">
      <h2>Add Book</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input {...register('title', { required: true })} />
        {errors.title && <span className="error-message">Title is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="pdfUrl">PDF URL:</label>
        <input {...register('pdfUrl', { required: true })} />
        {errors.pdfUrl && <span className="error-message">PDF URL is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="authorName">Author Name:</label>
        <input {...register('authorName', { required: true })} />
        {errors.authorName && <span className="error-message">Author Name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="categoryName">Category Name:</label>
        <input {...register('categoryName', { required: true })} />
        {errors.categoryName && <span className="error-message">Category Name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input {...register('price', { required: true, pattern: /^\d+(\.\d{1,2})?$/ })} />
        {errors.price && <span className="error-message">Price is required and must be a valid number</span>}
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input {...register('image', { required: true })} />
        {errors.image && <span className="error-message">Image URL is required</span>}
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
