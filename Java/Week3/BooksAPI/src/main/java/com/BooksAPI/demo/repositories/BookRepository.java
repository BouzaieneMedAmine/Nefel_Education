package com.BooksAPI.demo.repositories;

 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BooksAPI.demo.models.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAll();
}
