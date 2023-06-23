import sql from 'mssql';
import config from '../db/config.js';


// Get all books
export const getBooks = async (req, res) => {
    let pool = await sql.connect(config.sql)
    const result = await pool.request().query("select * from Books");
    !result.recordset[0] ? res.status(404).json({ message: 'Books not found' }) :
        res.status(200).json(result.recordset);
    sql.close(); // Close the SQL connection
};

export const getBook = async (req, res) => {
    res.send('getBook')
}

export const AddBook = async (req, res) => {
    const { title, pdf_url, authorName, categoryName, price, image } = req.body;
    try {
        let pool = await sql.connect(config.sql);
     // Check if the category exists
     const categoryResult = await pool
     .request()
     .input('categoryName', sql.VarChar, categoryName)
     .query('SELECT category_id FROM Categories WHERE category_name = @categoryName');

   let categoryId;
   if (categoryResult.recordset.length === 0) {
     // Category does not exist, create a new one
     const createCategoryResult = await pool
       .request()
       .input('categoryName', sql.VarChar, categoryName)
       .query('INSERT INTO Categories (category_name) VALUES (@categoryName); SELECT SCOPE_IDENTITY() AS category_id');

     categoryId = createCategoryResult.recordset[0].category_id;
   } else {
     // Category exists, retrieve its ID
     categoryId = categoryResult.recordset[0].category_id;
   }

   // Check if the author exists
   const authorResult = await pool
     .request()
     .input('authorName', sql.VarChar, authorName)
     .query('SELECT author_id FROM Authors WHERE Author_name = @authorName');

   let authorId;
   if (authorResult.recordset.length === 0) {
     // Author does not exist, create a new one
     const createAuthorResult = await pool
       .request()
       .input('authorName', sql.VarChar, authorName)
       .query('INSERT INTO Authors (Author_name) VALUES (@authorName); SELECT SCOPE_IDENTITY() AS author_id');

     authorId = createAuthorResult.recordset[0].author_id;
   } else {
     // Author exists, retrieve its ID
     authorId = authorResult.recordset[0].author_id;
   }

   //insert the book into the database
        const result = await pool.request()
            .input('title', sql.VarChar, title)
            .input('pdf_url', sql.VarChar, pdf_url)
            .input('authorId', sql.Int, authorId)
            .input('categoryId', sql.Int, categoryId)
            .input('price', sql.VarChar, price)
            .input('image', sql.VarBinary, image)
            .query('insert into Books (title, pdf_url, author_id, category_id, price, image) values (@title, @pdf_url, @authorId, @categoryId, @price, @image)');
            result.output.errorMessage ? res.status(400).json({ message: result.output.errorMessage }) :
            res.status(200).json({ message: 'Book created successfully' });
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
    finally {
        sql.close(); // Close the SQL connection
    }
}

//get books by category
export const getBooksByCategory = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql)
  const result = await pool.request()
  .input('categoryName', sql.VarChar, req.params.categoryName)
  .query('select * from Books where category_id = (select category_id from Categories where category_name = @categoryName)');
  !result.recordset[0] ? res.status(404).json({ message: 'Books not found in that category' }) :
  res.status(200).json(result.recordset);
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
  finally {
    sql.close(); // Close the SQL connection
  }
}
  

export const getCategories = async (req, res) => {
    let pool = await sql.connect(config.sql)
    const result = await pool.request()
    .query("select * from Categories");
    !result.recordset[0] ? res.status(404).json({ message: 'Categories not found' }) :
        res.status(200).json(result.recordset);
    sql.close();
}

export const getAuthors = async (req, res) => {
    let pool = await sql.connect(config.sql)
    const result = await pool.request()
    .query("select * from Authors");
    !result.recordset[0] ? res.status(404).json({ message: 'Authors not found' }) :
        res.status(200).json(result.recordset);
    sql.close();
}



