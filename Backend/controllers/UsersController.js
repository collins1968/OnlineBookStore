import sql from 'mssql';
import config from '../db/config.js';

// // Get all todos
export const getUsers = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("select * from Users");
        !result.recordset[0] ? res.status(404).json({ message: 'Users not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        res.status(201).json({ error: 'an error occurred while retrieving users' });
    } finally {
        sql.close(); // Close the SQL connection
    }
};

export const PostUsers = async (req, res) => {
    try {
        res.status(200).json({ message: 'PostUsers' }); 
    } catch (error) {
        res.status(201).json({ error: 'an error occurred while retrieving users' });
    } finally {
        sql.close(); // Close the SQL connection

    }
};