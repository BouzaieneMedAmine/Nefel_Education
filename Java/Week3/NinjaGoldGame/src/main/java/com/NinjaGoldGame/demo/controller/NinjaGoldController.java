package com.NinjaGoldGame.demo.controller;

 
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Random;

import jakarta.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@Controller
public class NinjaGoldController {

    @GetMapping("/")
    public String index(HttpSession session, Model model) {
        if (session.getAttribute("gold") == null) {
            session.setAttribute("gold", 0);
        }
        if (session.getAttribute("log") == null) {
            session.setAttribute("log", new ArrayList<String>());
        }

        model.addAttribute("gold", session.getAttribute("gold"));
        model.addAttribute("log", session.getAttribute("log"));

        return "index";
    }

    @PostMapping("/process")
    public String process(@RequestParam("location") String location, HttpSession session) {
        int goldEarned = 0;
        Random rand = new Random();

        switch (location) {
            case "farm":
                goldEarned = rand.nextInt(11) + 10; // 10-20
                break;
            case "cave":
                goldEarned = rand.nextInt(6) + 5; // 5-10
                break;
            case "house":
                goldEarned = rand.nextInt(4) + 2; // 2-5
                break;
            case "quest":
                goldEarned = rand.nextInt(101) - 50; // -50 to 50
                break;
        }

        Integer currentGold = (Integer) session.getAttribute("gold");
        session.setAttribute("gold", currentGold + goldEarned);

        ArrayList<String> log = (ArrayList<String>) session.getAttribute("log");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String time = LocalDateTime.now().format(formatter);

        if (goldEarned >= 0) {
            log.add("You entered a " + location + " and earned " + goldEarned + " gold. (" + time + ")");
        } else {
            log.add("You entered a " + location + " and lost " + Math.abs(goldEarned) + " gold. Ouch. (" + time + ")");
        }

        session.setAttribute("log", log);
        return "redirect:/";
    }
}
