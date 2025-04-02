public class TestCafe {
    public static void main(String[] args) {
        // Instantiate CafeUtil
        CafeUtil appTest = new CafeUtil();
        
        /* ============ App Test Cases ============= */
    
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());
    
      
    }
}
