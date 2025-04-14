package com.SaveTravels.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.SaveTravels.demo.models.Expense;
import com.SaveTravels.demo.repositories.ExpenseRepository;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepo;

    public ExpenseService(ExpenseRepository expenseRepo) {
        this.expenseRepo = expenseRepo;
    }

    public List<Expense> allExpenses() {
        return expenseRepo.findAll();
    }

    public Expense createExpense(Expense e) {
        return expenseRepo.save(e);
    }

    public Expense findExpense(Long id) {
        return expenseRepo.findById(id).orElse(null);
    }

    public Expense updateExpense(Expense e) {
        return expenseRepo.save(e);
    }

    public void deleteExpense(Long id) {
        expenseRepo.deleteById(id);
    }
}
