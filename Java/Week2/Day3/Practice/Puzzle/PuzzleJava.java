import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {
    Random rand = new Random();
    
    // Generates and returns an ArrayList with 10 random numbers between 1 and 20 inclusive.
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> rolls = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            rolls.add(rand.nextInt(20) + 1);
        }
        return rolls;
    }
    
    // Returns a random letter from an array containing all letters of the alphabet.
    public char getRandomLetter() {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        int index = rand.nextInt(26);
        return alphabet[index];
    }
    
    // Creates an eight-character password using getRandomLetter.
    public String generatePassword() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            password.append(getRandomLetter());
        }
        return password.toString();
    }
    
    // Generates an array of random eight-character passwords. The array length is passed as an argument.
    public String[] getNewPasswordSet(int length) {
        String[] passwords = new String[length];
        for (int i = 0; i < length; i++) {
            passwords[i] = generatePassword();
        }
        return passwords;
    }
    
    // Ninja Bonus: Shuffles an int array using the Fisher-Yates algorithm.
    public int[] shuffleArray(int[] arr) {
        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}
