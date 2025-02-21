import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import cors from 'cors';

const app = express();
app.use(express.json(),cors() ) 

dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));