// booksControllers.js - Controller for handling book operations
const Book = require('../models/bookSchema');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const { title, author, category, releaseDate } = req.body;
        
        if (!title || !author || !category || !releaseDate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newBook = new Book({ title, author, category, releaseDate });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a book
exports.updateBook = async (req, res) => {
    try {
        const { title, author, category, releaseDate } = req.body;

        if (!title || !author || !category || !releaseDate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedBook = await Book.findByIdAndUpdate(req.params.id, 
            { title, author, category, releaseDate }, 
            { new: true, runValidators: true }
        );

        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
