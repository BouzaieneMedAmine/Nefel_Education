package com.example.examjava.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.examjava.model.BookClub;



@Repository
public interface BookRepo extends CrudRepository<BookClub, Long> {

	List<BookClub> findAll();
	@Query("SELECT t FROM Tab t ORDER BY t.createdAt ASC")
	List<BookClub> findAllOrdered();

	BookClub findByIdIs(Long id);

}
