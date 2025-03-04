// server.js - Main entry point for the backend
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/books', booksRouter);

// Default route
app.get('/', (req, res) => {
    res.send('MERN Book Champion API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
