// ShowAllBooks.jsx - Displays all books
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowAllBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('/api/books')
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error loading books. Please try again.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>All Books</h1>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                {book.title} - {book.author} ({book.category})
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <br />
            <Link to="/create">Add a New Book</Link>
        </div>
    );
};

export default ShowAllBooks;
