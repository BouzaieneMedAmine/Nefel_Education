import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;
    
    // No argument constructor: name = "Guest", items = empty list.
    public Order() {
        this.name = "Guest";
        this.ready = false; // default value
        this.items = new ArrayList<>();
    }
    
    // Overloaded constructor: custom name, items = empty list.
    public Order(String name) {
        this.name = name;
        this.ready = false; // default value
        this.items = new ArrayList<>();
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // Setter for name
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter for ready. Use "isReady" for boolean getter naming.
    public boolean isReady() {
        return ready;
    }
    
    // Setter for ready
    public void setReady(boolean ready) {
        this.ready = ready;
    }
    
    // Getter for items
    public ArrayList<Item> getItems() {
        return items;
    }
    
    // ADD METHODS
    
    // addItem: add an Item to the items list
    public void addItem(Item item) {
        this.items.add(item);
    }
    
    // getStatusMessage: return appropriate string based on "ready"
    public String getStatusMessage() {
        return ready ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }
    
    // getOrderTotal: sum up item prices from the items list
    public double getOrderTotal() {
        double total = 0.0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }
    
    // display: prints customer name, items with prices, and total amount
    public void display() {
        System.out.println("Customer Name: " + name);
        for (Item item : items) {
            System.out.printf("%s - $%.2f\n", item.getName(), item.getPrice());
        }
        System.out.printf("Total: $%.2f\n", getOrderTotal());
    }
}
