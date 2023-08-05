const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const cors = require('cors');

dotenv.config({ path: './config.env' });


require('./db/connection');

app.use(express.json());
// const Entry = require('./models/user_schema');
// app.use(cors({
//     origin: 'http://127.0.0.1:5173', // Update the allowed origin to match the frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
// }));



      

app.use(require('./routes/auth'));


const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});