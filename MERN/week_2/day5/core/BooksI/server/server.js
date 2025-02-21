 
const express = ('express');
const bodyParser = ('body-parser');
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/booksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Minimum 2 letters required'],
        maxlength: [255, 'Maximum 255 letters allowed']
    },
    author: {
        type: String,
        required: [true, 'Author name is required'],
        minlength: [5, 'Minimum 5 letters required'],
        maxlength: [255, 'Maximum 255 letters allowed']
    },
    pages: {
        type: Number,
        required: [true, 'Number of pages is required'],
        min: [1, 'At least 1 page required']
    },
    isAvailable: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);


app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});


app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(400).send('Invalid request');
    }
});


app.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.send({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).send('Error deleting book');
    }
});


app.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

const PORT = 3040;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));