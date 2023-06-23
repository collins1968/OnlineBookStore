import express from 'express';
import bodyParser from 'body-parser';
import config from './db/config.js';
import routes from './Routes/UserRoutes.js';
import booksRoutes from './Routes/BooksRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.static("public"));
app.use(express.json());

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


//my routes
//user routes
routes(app);
booksRoutes(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
    }       
);

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
    }   
);
