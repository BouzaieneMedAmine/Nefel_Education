package com.Counter.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class  maincontroller  {

    @GetMapping("/")
    public String index(HttpSession session) {
        Integer count = (Integer) session.getAttribute("count");
        if (count == null) {
            count = 0;
        }
        session.setAttribute("count", count + 1);
        return "index";
    }

    @GetMapping("/counter")
    public String counter(HttpSession session, Model model) {
        Integer count = (Integer) session.getAttribute("count");
        if (count == null) {
            count = 0;
        }
        model.addAttribute("count", count);
        return "counter";
    }

    @GetMapping("/plus2")
    public String plusTwo(HttpSession session) {
        Integer count = (Integer) session.getAttribute("count");
        if (count == null) {
            count = 0;
        }
        session.setAttribute("count", count + 2);
        return "redirect:/counter";
    }

    @GetMapping("/reset")
    public String reset(HttpSession session) {
        session.setAttribute("count", 0);
        return "redirect:/counter";
    }
}
