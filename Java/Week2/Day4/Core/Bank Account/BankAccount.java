public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private String accountNumber; // Ninja Bonus 1: account number

    private static int accounts = 0;
    private static double totalMoney = 0.0; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount() {
        accounts++;
        this.accountNumber = generateAccountNumber(); // Ninja Bonus 3: assign random account number
    }

    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }
    
    public double getSavingsBalance() {
        return savingsBalance;
    }
    
    public static int getAccounts() {
        return accounts;
    }
    
    public static double getTotalMoney() {
        return totalMoney;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }

    // METHODS
    // deposit: deposit money into checking or savings
    public void deposit(String accountType, double amount) {
        if (amount > 0) {
            if (accountType.equalsIgnoreCase("checking")) {
                checkingBalance += amount;
            } else if (accountType.equalsIgnoreCase("savings")) {
                savingsBalance += amount;
            }
            totalMoney += amount;
        }
    }
    
    // withdraw: withdraw money if there are sufficient funds
    public boolean withdraw(String accountType, double amount) {
        if (amount > 0) {
            if (accountType.equalsIgnoreCase("checking")) {
                if (checkingBalance >= amount) {
                    checkingBalance -= amount;
                    totalMoney -= amount;
                    return true;
                }
            } else if (accountType.equalsIgnoreCase("savings")) {
                if (savingsBalance >= amount) {
                    savingsBalance -= amount;
                    totalMoney -= amount;
                    return true;
                }
            }
        }
        return false;
    }

    // getBalance: display total balance in checking and savings
    public double getBalance() {
        return checkingBalance + savingsBalance;
    }
    
    // PRIVATE METHOD: generates a random ten-digit account number (Ninja Bonus 2)
    private String generateAccountNumber() {
        long number = (long)(Math.random() * 9000000000L) + 1000000000L;
        return String.valueOf(number);
    }
}
