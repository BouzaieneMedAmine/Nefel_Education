package com.SaveTravels.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import com.SaveTravels.demo.models.Expense;
import java.util.List;

public interface ExpenseRepository extends CrudRepository<Expense, Long> {
    List<Expense> findAll();
}
