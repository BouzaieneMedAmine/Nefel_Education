package com.QueryParameters2.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class MainController {

    @RequestMapping("/")
    public String index(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "lastName", required = false) String lastName,
            @RequestParam(value = "times", required = false, defaultValue = "1") int times) {

    	System.out.println("ءءءءءءءءءءءءءءءءءءءءءءءءءءxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "  );

    	
        // تحديد الاسم الكامل بناءً على المعطيات
        String fullName;
        if (name == null && lastName == null) {
            fullName = "human";
        } else if (name == null) {
            fullName = lastName;
        } else if (lastName == null) {
            fullName = name;
        } else {
            fullName = name + " " + lastName;
        }

        // تكوين الاستجابة المتكرّرة
        StringBuilder response = new StringBuilder();
        for (int i = 0; i < times; i++) {
            response.append("Hello ").append(fullName).append("<br>");
        }

        return response.toString();
    }
}
