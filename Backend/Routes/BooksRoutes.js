import { getBooks, getBook, getCategories, AddBook, getAuthors, getBooksByCategory } from "../controllers/booksControllers.js";
import { PostPayment } from "../controllers/PaymentControllers.js";

const booksRoutes = (app) => {
    app.route('/books')
        .get(getBooks)
        .post(AddBook),
    app.route('/book:id')
        .get(getBook)
    app.route('/categories')
        .get(getCategories) 
    app.route('/authors')
        .get(getAuthors)  
    app.route('/books/:categoryName')
        .get(getBooksByCategory)
    app.route("/create-payment-intent")
        .post(PostPayment)

}

export default booksRoutes;