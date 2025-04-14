package com.example.studentManagement.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.studentManagement.model.Student;

import jakarta.servlet.http.HttpSession;

@Controller

public class StudentController {
	
//	Display the form to add a new student
	
	@GetMapping("/form")
	public String showForm (Model model) {
		
		model.addAttribute("userForm", new Student());
		return "form.jsp";
	}
	
	@PostMapping("/save")
	public String saveStudent(@ModelAttribute Student student, HttpSession session) {
//		get the current list of students form the session 
	List<Student> students = (List<Student>) session.getAttribute("students");
		
//	 if no students in session yet create new list
		if (students == null) {
			students = new ArrayList<>();
		}
		students.add((Student) students);
//		update the sessioin  with new the new list of students 
		session.setAttribute("userForm", students);
		return "redirect:/students";
		
	}
	
	
	@GetMapping("/students")
	public String listStudents(Model model, HttpSession session) {
//		Retrieve students from session 
		
	List<Student> students =(List<Student>) session.getAttribute("students");
		if (students == null) {
		students = new ArrayList<>();
		}
	model.addAttribute("students",students);
	return "list.jsp";
	}

}
