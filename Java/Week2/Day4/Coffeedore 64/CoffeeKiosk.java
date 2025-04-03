import java.util.ArrayList;
import java.util.Scanner;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;
    private Scanner scanner;
    
    public CoffeeKiosk() {
        // Initialize empty menu and orders arrays.
        menu = new ArrayList<>();
        orders = new ArrayList<>();
        scanner = new Scanner(System.in);
    }
    
    // Adds a menu item with the given name and price.
    public void addMenuItem(String name, double price) {
        Item item = new Item(name, price); // assuming a constructor Item(String, double) exists.
        item.setIndex(menu.size());
        menu.add(item);
    }
    
    // Ninja Bonus: Allows an admin to add a menu item by getting console input.
    public void addMenuItemByInput() {
        System.out.println("Enter menu item name:");
        String name = scanner.nextLine();
        System.out.println("Enter menu item price:");
        String priceInput = scanner.nextLine();
        try {
            double price = Double.parseDouble(priceInput);
            addMenuItem(name, price);
            System.out.println("Item added successfully.");
        } catch (NumberFormatException e) {
            System.out.println("Invalid price entered.");
        }
    }
    
    // Displays the menu items.
    public void displayMenu() {
        // Print each menu item.
        for (Item item : menu) {
            System.out.printf("%d %s -- $%.2f%n", item.getIndex(), item.getName(), item.getPrice());
        }
    }
    
    // Creates a new order based on user input and prints order details.
    public void newOrder() {
        // Prompt for customer name.
        System.out.println("Please enter customer name for new order:");
        String name = scanner.nextLine();
        Order order = new Order(name); // assuming Order(String) constructor.
        orders.add(order);

        // Display the menu.
        displayMenu();
        
        // Prompt the user to enter an item index or q to quit.
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = scanner.nextLine();
        
        while (!itemNumber.equals("q")) {
            try {
                int index = Integer.parseInt(itemNumber);
                if(index >= 0 && index < menu.size()) {
                    Item item = menu.get(index);
                    order.addItem(item); // assuming addItem(Item) exists.
                    System.out.println("Added " + item.getName());
                } else {
                    System.out.println("Invalid index.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input.");
            }
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = scanner.nextLine();
        }
        
        // After collecting items, print order details.
        order.display(); // assuming display() method exists.
    }
    
    public static void main(String[] args) {
        CoffeeKiosk kiosk = new CoffeeKiosk();
        // Optional: add some menu items for testing.
        kiosk.addMenuItem("Espresso", 3.0);
        kiosk.addMenuItem("Latte", 4.0);
        System.out.println("Menu:");
        kiosk.displayMenu();
        // Start a new order.
        kiosk.newOrder();
    }
}

// Add stub definitions for Item and Order to fix compilation errors:
class Item {
    private String name;
    private double price;
    private int index;
    
    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }
    
    public String getName() { return name; }
    public double getPrice() { return price; }
    public void setIndex(int index) { this.index = index; }
    public int getIndex() { return index; }
}

class Order {
    private String customerName;
    private ArrayList<Item> items = new ArrayList<>();
    
    public Order(String customerName) {
        this.customerName = customerName;
    }
    
    public void addItem(Item item) {
        items.add(item);
    }
    
    public void display() {
        System.out.println("Order for " + customerName);
        for(Item item : items) {
            System.out.println(item.getName() + " -- $" + item.getPrice());
        }
    }
}
