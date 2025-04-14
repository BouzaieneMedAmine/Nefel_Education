package com.BooksAPI.demo.controller;
 

 
import org.springframework.web.bind.annotation.*;

import com.BooksAPI.demo.models.Book;
import com.BooksAPI.demo.services.BookService;

@RestController
public class BooksApi {

    private final BookService bookService;

    public BooksApi(BookService bookService) {
        this.bookService = bookService;
    }

    @PutMapping("/api/books/{id}")
    public Book update(
        @PathVariable("id") Long id,
        @RequestParam("title") String title,
        @RequestParam("description") String desc,
        @RequestParam("language") String lang,
        @RequestParam("pages") Integer numOfPages) {
        return bookService.updateBook(id, title, desc, lang, numOfPages);
    }

    @DeleteMapping("/api/books/{id}")
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}
