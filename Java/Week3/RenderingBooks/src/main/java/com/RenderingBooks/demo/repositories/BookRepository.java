package com.RenderingBooks.demo.repositories;

 
import org.springframework.data.repository.CrudRepository;
import com.RenderingBooks.demo.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {
}
