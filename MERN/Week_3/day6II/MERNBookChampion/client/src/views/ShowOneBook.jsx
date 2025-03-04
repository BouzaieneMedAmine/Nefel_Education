// ShowOneBook.jsx - Displays details of a single book
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowOneBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`/api/books/${id}`)
            .then(res => {
                setBook(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error loading book details. Please try again.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading book details...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Release Date:</strong> {new Date(book.releaseDate).toLocaleDateString()}</p>
            <p><strong>Posted On:</strong> {new Date(book.postedAt).toLocaleDateString()}</p>
            
            <Link to={`/update/${book._id}`}>Edit</Link>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ShowOneBook;
