package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {

    private ArrayList<String> patientNotes;

    // ✅ Constructor
    public Physician(Integer id) {
        this.id = id;
        this.patientNotes = new ArrayList<String>();
    }

    // ✅ Method to add notes for a patient (simulated log)
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s\n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

    // ✅ Implement assignPin (PIN must be exactly 4 digits for physicians)
    @Override
    public boolean assignPin(int pin) {
        if (pin >= 1000 && pin <= 9999) {
            this.pin = pin;
            return true;
        }
        return false;
    }

    // ✅ Implement accessAuthorized
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        return this.id.equals(confirmedAuthID);
    }

    // ✅ Getters and Setters (optional if needed)
    public ArrayList<String> getPatientNotes() {
        return patientNotes;
    }

    public void setPatientNotes(ArrayList<String> patientNotes) {
        this.patientNotes = patientNotes;
    }
}
