import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/mongoose.config.js';
import cors from 'cors';
import dbConnect from './config/mongoose.config.js';

const app = express();
app.use(express.json(),cors() ) 

dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));