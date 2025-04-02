public class TestPuzzleJava {
    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();
        
        // Test getTenRolls
        System.out.println("getTenRolls: " + generator.getTenRolls());
        
        // Test getRandomLetter
        System.out.println("getRandomLetter: " + generator.getRandomLetter());
        
        // Test generatePassword
        System.out.println("generatePassword: " + generator.generatePassword());
        
        // Test getNewPasswordSet with 5 passwords
        String[] passwordSet = generator.getNewPasswordSet(5);
        System.out.print("getNewPasswordSet: ");
        for (String p : passwordSet) {
            System.out.print(p + " ");
        }
        
        // Test Ninja Bonus: shuffleArray
        int[] arr = {1,2,3,4,5,6,7,8,9,10};
        int[] shuffled = generator.shuffleArray(arr);
        System.out.print("\nshuffleArray: ");
        for (int num : shuffled) {
            System.out.print(num + " ");
        }
    }
}
