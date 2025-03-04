// UpdateBook.jsx - Form to update an existing book with improved validation, UI feedback, and enhanced UX
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: '', author: '', category: 'Fiction', releaseDate: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        axios.get(`/api/books/${id}`)
            .then(res => {
                setBook(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                setErrors({ general: 'Error loading book data. Please try again.' });
            });
    }, [id]);

    const validateForm = () => {
        let newErrors = {};

        if (!book.title.trim() || book.title.length < 3) {
            newErrors.title = 'Title must be at least 3 characters long';
        }
        if (!book.author.trim()) {
            newErrors.author = 'Author is required';
        }
        if (!['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'].includes(book.category)) {
            newErrors.category = 'Invalid category';
        }
        if (!book.releaseDate) {
            newErrors.releaseDate = 'Release date is required';
        } else {
            const releaseDate = new Date(book.releaseDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (releaseDate < today) {
                newErrors.releaseDate = 'Release date must be in the future';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        try {
            await axios.put(`/api/books/${id}`, book);
            setSuccessMessage('Book updated successfully! Redirecting...');
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            setErrors({ general: error.response?.data?.message || 'Unknown error. Please try again later.' });
        }
    };

    if (loading) return <p>Loading book details...</p>;

    return (
        <div>
            <h2>Update Book</h2>
            {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                
                <label>Author:</label>
                <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
                {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
                
                <label>Category:</label>
                <select name="category" value={book.category} onChange={handleChange} required>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Mystery">Mystery</option>
                </select>
                {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
                
                <label>Release Date:</label>
                <input type="date" name="releaseDate" value={book.releaseDate} onChange={handleChange} required />
                {errors.releaseDate && <p style={{ color: 'red' }}>{errors.releaseDate}</p>}
                
                <button type="submit">Update Book</button>
            </form>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default UpdateBook;
