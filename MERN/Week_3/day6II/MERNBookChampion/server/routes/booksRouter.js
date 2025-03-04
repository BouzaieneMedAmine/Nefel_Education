// booksRouter.js - Routes for book operations
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksControllers');

// Route to create a new book
router.post('/', bookController.createBook);

// Route to get all books
router.get('/', bookController.getAllBooks);

// Route to get a single book by ID
router.get('/:id', bookController.getBookById);

// Route to update a book
router.put('/:id', bookController.updateBook);

// Route to delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
