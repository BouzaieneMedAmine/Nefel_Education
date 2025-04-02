public class TestOrders {
    public static void main(String[] args) {
        // Create menu items
        Item item1 = new Item("mocha", 3.50);
        Item item2 = new Item("latte", 4.00);
        Item item3 = new Item("drip coffee", 2.50);
        Item item4 = new Item("cappuccino", 4.50);
        
        // Create orders
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
        
        // Application simulation
        // Print order1 object; will print its memory reference by default.
        System.out.println(order1);
        // Prediction: printing order1.total would show 0.0
        
        // Jimmy ordered a mocha: add item1 to order2
        order2.addItem(item1);
        
        // Noah ordered a cappuccino: add item4 to order3
        order3.addItem(item4);
        
        // Sam added a latte: add item2 to order4
        order4.addItem(item2);
        
        // Cindhuri’s order is now ready.
        order1.ready = true;
        
        // Sam ordered more drinks - 2 lattes: add item2 twice to order4
        order4.addItem(item2);
        order4.addItem(item2);
        
        // Jimmy’s order is now ready.
        order2.ready = true;
        
        // Print orders' details
        System.out.printf("Order1 - Name: %s, Total: %.2f, Ready: %s%n", order1.name, order1.total, order1.ready);
        System.out.printf("Order2 - Name: %s, Total: %.2f, Ready: %s%n", order2.name, order2.total, order2.ready);
        System.out.printf("Order3 - Name: %s, Total: %.2f, Ready: %s%n", order3.name, order3.total, order3.ready);
        System.out.printf("Order4 - Name: %s, Total: %.2f, Ready: %s%n", order4.name, order4.total, order4.ready);
    }
}
