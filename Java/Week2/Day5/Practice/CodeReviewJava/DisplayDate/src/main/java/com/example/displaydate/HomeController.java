package com.example.displaydate;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.text.SimpleDateFormat;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }

    @RequestMapping("/date")
    public String datePage(Model model) {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("EEEE, MMMM d, yyyy");
        model.addAttribute("currentDate", sdf.format(now));
        return "date.jsp";
    }

    @RequestMapping("/time")
    public String timePage(Model model) {
        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");
        model.addAttribute("currentTime", sdf.format(now));
        return "time.jsp";
    }
}