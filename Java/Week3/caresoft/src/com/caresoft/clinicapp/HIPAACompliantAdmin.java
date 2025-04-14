package com.caresoft.clinicapp;

import java.util.ArrayList;

public interface HIPAACompliantAdmin {
    
    // Abstract method that must be implemented by any class using this interface
    ArrayList<String> reportSecurityIncidents();

    // Default method to print all security incidents
    public default void printSecurityIncidents() {
        for (String incident : reportSecurityIncidents()) {
            System.out.println("🔒 " + incident);
        }
    }

    // Default method to compare actual vs expected incidents and print PASS/FAIL
    public default boolean adminQATest(ArrayList<String> expectedIncidents) {
        boolean passed = reportSecurityIncidents().equals(expectedIncidents);
        System.out.println(passed ? "PASS" : "FAIL");
        return passed;
    }
}
