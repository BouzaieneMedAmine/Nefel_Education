package com.RenderingBooks.demo.controller;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

import com.RenderingBooks.demo.models.Book;
import com.RenderingBooks.demo.services.BookService;

@Controller
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "show";
    }
}
