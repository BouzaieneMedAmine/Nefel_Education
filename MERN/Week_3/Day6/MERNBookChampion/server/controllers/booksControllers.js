import Books from "../models/bookSchema.js";

// Add a new book
const addBook = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    return res.status(201).json(newBook); // 201 for resource creation
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(400).json({ message: err.message }); // 400 for validation errors
  }
};
const likeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } }, // Increment likes by 1
      { new: true }
    );
    
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }

    return res.status(200).json(updatedBook);
  } catch (err) {
    console.error("Error updating likes:", err);
    res.status(500).json({ message: "Server error while updating likes." });
  }
};

export { likeBook };

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find();
    return res.status(200).json(allBooks);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Server error while fetching books." });
  }
};

// Get one book by ID
const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Books.findById(id);
    if (!oneBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    return res.status(200).json(oneBook);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(400).json({ message: "Invalid book ID format." });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Books.findByIdAndDelete(id);
    if (!oneBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    return res.status(200).json({ message: "Book deleted successfully." });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(400).json({ message: "Invalid book ID format." });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Books.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    return res.status(200).json(updatedBook);
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(400).json({ message: "Invalid update request." });
  }
};

export { addBook, deleteBook, getAllBooks, getOneBook, updateBook };
