package com.BooksAPI.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.BooksAPI.demo.models.Book;
import com.BooksAPI.demo.repositories.BookRepository;

@Service
public class BookService {
    
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

     public List<Book> allBooks() {
        return bookRepository.findAll();
    }

     public Book createBook(Book b) {
        return bookRepository.save(b);
    }

     public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        return optionalBook.orElse(null);
    }

     public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(title);
            book.setDescription(desc);
            book.setLanguage(lang);
            book.setNumberOfPages(numOfPages);
            return bookRepository.save(book);
        } else {
            return null;
        }
    }

     public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
