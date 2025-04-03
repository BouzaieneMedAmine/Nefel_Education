public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();
        
        // Display account numbers
        System.out.println("Account1 Number: " + account1.getAccountNumber());
        System.out.println("Account2 Number: " + account2.getAccountNumber());
        System.out.println("Account3 Number: " + account3.getAccountNumber());
        
        // Deposit Test
        account1.deposit("checking", 500.0);
        System.out.println("Account1 Total Balance: $" + account1.getBalance());
        
        account2.deposit("savings", 1000.0);
        System.out.println("Account2 Total Balance: $" + account2.getBalance());
        
        account3.deposit("checking", 300.0);
        account3.deposit("savings", 700.0);
        System.out.println("Account3 Total Balance: $" + account3.getBalance());
        
        // Withdrawal Test
        boolean withdraw1 = account1.withdraw("checking", 200.0);
        System.out.println("Account1 withdraw 200: " + withdraw1 + ", New Total Balance: $" + account1.getBalance());
        
        boolean withdraw2 = account2.withdraw("savings", 1500.0); // should fail due to insufficient funds
        System.out.println("Account2 withdraw 1500: " + withdraw2 + ", New Total Balance: $" + account2.getBalance());
        
        boolean withdraw3 = account3.withdraw("savings", 300.0);
        System.out.println("Account3 withdraw 300: " + withdraw3 + ", New Total Balance: $" + account3.getBalance());
        
        // Static Test: print the number of bank accounts and the totalMoney
        System.out.println("Total Bank Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money in Bank: $" + BankAccount.getTotalMoney());
    }
}
