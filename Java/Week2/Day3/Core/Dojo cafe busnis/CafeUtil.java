import java.util.ArrayList;

public class CafeUtil {

    // Calculates sum from 1 to 10 (or use overloaded version for flexibility)
    public int getStreakGoal() {
        return getStreakGoal(10);
    }
    
    // Overloaded: calculates sum from 1 to numWeeks
    public int getStreakGoal(int numWeeks) {
        int sum = 0;
        for (int i = 1; i <= numWeeks; i++) {
            sum += i;
        }
        return sum;
    }

    // Returns the sum of all elements in prices array
    public double getOrderTotal(double[] prices) {
        double total = 0;
        for (double price : prices) {
            total += price;
        }
        return total;
    }

    // Prints the menu items with their indices
    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    // Overloaded displayMenu method to print menu items together with corresponding prices.
    public boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices) {
        if (menuItems.size() != prices.size()) {
            return false;
        }
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%d %s -- $%.2f\n", i, menuItems.get(i), prices.get(i));
        }
        return true;
    }

    // Adds one customer after prompting for their name, then prints greeting and updated list.
    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello, " + username + "!");
        System.out.println("There are " + customers.size() + " people in front of you");
        customers.add(username);
        System.out.println(customers);
    }
    
    // Prints a price chart with a progressive discount of $0.50 for each additional unit.
    public void printPriceChart(String product, double price, int maxQuantity) {
        System.out.println(product);
        for (int i = 1; i <= maxQuantity; i++) {
            // Each additional unit gets an extra discount of $0.50 per unit after the first.
            double discount = 0.5 * (i - 1);
            double totalPrice = i * price - discount;
            System.out.printf("%d - $%.2f\n", i, totalPrice);
        }
    }
    
    // Allows the barista to add multiple customers until they enter "q".
    public void addCustomers(ArrayList<String> customers) {
        String input = "";
        while (true) {
            System.out.println("Please enter a customer name (or type 'q' to quit):");
            input = System.console().readLine();
            if (input.toLowerCase().equals("q")) {
                break;
            }
            customers.add(input);
            System.out.println("Current customers: " + customers);
        }
    }
}
