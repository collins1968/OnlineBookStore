import express from 'express';
import bodyParser from 'body-parser';
import config from './db/config.js';
import routes from './Routes/UserRoutes.js';

const app = express();


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


//my routes
//user routes
routes(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
    }       
);

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
    }   
);
