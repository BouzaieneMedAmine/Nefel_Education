package com.RenderingBooks.demo.services;

 
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.RenderingBooks.demo.models.Book;
import com.RenderingBooks.demo.repositories.BookRepository;

@Service
public class BookService {

    private final BookRepository bookRepo;

    public BookService(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        return optionalBook.orElse(null);
    }
}
