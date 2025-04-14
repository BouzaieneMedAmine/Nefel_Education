package com.Login.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Login.demo.models.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

	
	//find all users 
	List<User> findAll();
	// find user by email 
	Optional<User> findByEmail(String email);
	
	
}