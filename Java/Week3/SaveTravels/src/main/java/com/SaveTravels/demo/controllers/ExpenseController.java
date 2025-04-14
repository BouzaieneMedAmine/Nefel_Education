package com.SaveTravels.demo.controllers;

import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.SaveTravels.demo.models.Expense;
import com.SaveTravels.demo.services.ExpenseService;

@Controller
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/")
    public String index(Model model, @ModelAttribute("expense") Expense expense) {
        model.addAttribute("expenses", expenseService.allExpenses());
        return "index.jsp";
    }

    @PostMapping("/create")
    public String create(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, Model model) {
        if(result.hasErrors()) {
            model.addAttribute("expenses", expenseService.allExpenses());
            return "index.jsp";
        }
        expenseService.createExpense(expense);
        return "redirect:/";
    }

    @GetMapping("/expenses/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        model.addAttribute("expense", expenseService.findExpense(id));
        return "show.jsp";
    }

    @GetMapping("/expenses/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        model.addAttribute("expense", expenseService.findExpense(id));
        return "edit.jsp";
    }

    @PostMapping("/expenses/update/{id}")
    public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if(result.hasErrors()) {
            return "edit.jsp";
        }
        expenseService.updateExpense(expense);
        return "redirect:/";
    }

    @GetMapping("/expenses/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
    	
        expenseService.deleteExpense(id);
        return "redirect:/";
    }
}
