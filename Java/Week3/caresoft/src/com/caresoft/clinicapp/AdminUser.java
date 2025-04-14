package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
    
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;

    // ✅ Constructor
    public AdminUser(Integer id, String role) {
        this.id = id; // inherited from User
        this.employeeID = id;
        this.role = role;
        this.securityIncidents = new ArrayList<String>();
    }

    // ✅ Method to log new incident with custom notes
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }

    // ✅ Method to log unauthorized access attempts
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

    // ✅ Implement method from HIPAACompliantAdmin
    @Override
    public ArrayList<String> reportSecurityIncidents() {
        return this.securityIncidents;
    }

    // ✅ Implement method from HIPAACompliantUser
    @Override
    public boolean assignPin(int pin) {
        if (pin >= 100000) {
            this.pin = pin;
            return true;
        }
        return false;
    }

    // ✅ Implement method from HIPAACompliantUser
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        if (this.id.equals(confirmedAuthID)) {
            return true;
        } else {
            this.authIncident(); // log the failed attempt
            return false;
        }
    }

    // ✅ Getters and Setters
    public Integer getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(Integer employeeID) {
        this.employeeID = employeeID;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
