// bookSchema.js - Mongoose schema for books
const mongoose = require('mongoose');
const { isDate } = require('validator');

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long']
    },
    author: { 
        type: String, 
        required: [true, 'Author is required'],
        trim: true
    },
    category: { 
        type: String, 
        required: [true, 'Category is required'],
        enum: {
            values: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'],
            message: 'Category must be one of Fiction, Non-Fiction, Sci-Fi, or Mystery'
        }
    },
    releaseDate: { 
        type: Date, 
        required: [true, 'Release date is required'],
        validate: {
            validator: function(value) {
                return isDate(value.toISOString());
            },
            message: 'Invalid date format'
        }
    },
    birthdate: {
        type: Date,
        required: [true, "Birth data is required"],
        max: [Date.now(), "Birth date must be in the past"]
    },
    postedAt: { 
        type: Date, 
        default: Date.now, // Auto-set when book is added
        immutable: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
