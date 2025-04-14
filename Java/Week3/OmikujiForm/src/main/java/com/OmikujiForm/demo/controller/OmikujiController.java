package com.OmikujiForm.demo.controller;

 
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class OmikujiController {

    @GetMapping("/omikuji")
    public String form() {
        return "omikuji";
    }

    @PostMapping("/omikuji/process")
    public String process(
        @RequestParam("number") int number,
        @RequestParam("city") String city,
        @RequestParam("person") String person,
        @RequestParam("hobby") String hobby,
        @RequestParam("thing") String thing,
        @RequestParam("message") String message,
        HttpSession session) {

        session.setAttribute("number", number);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("thing", thing);
        session.setAttribute("message", message);

        return "redirect:/omikuji/show";
    }

    @GetMapping("/omikuji/show")
    public String show() {
        return "show";
    }
}
