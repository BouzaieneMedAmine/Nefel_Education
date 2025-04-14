package com.DaikichiPath.demo.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @RequestMapping("/daikichi/travel/{place}")
    public String showLesson(@PathVariable("place") String place ) {
 
  
        System.out.println("ءءءءءءءءءءءءءءءءءءءءءءءءءءxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

        return "Congratulations! You will soon travel to: " + place  ;
    }
    
    
    
    @RequestMapping("/daikichi/lotto/{number}")
    public String lotto(@PathVariable("number") int number) {
        System.out.println("Lotto number is        xxxxxxxxxxxxxxxxxxxxxxxxx    " + number);
        if (number % 2 == 0) {
            return "You will take a grand journey in the near future, but be weary of tempting   offers ";
        } else {
            return "You have enjo yed the fruits of your labor but now is a great time to spend time with family and friends ";
        }
    }
    
    
    
    
    
}
