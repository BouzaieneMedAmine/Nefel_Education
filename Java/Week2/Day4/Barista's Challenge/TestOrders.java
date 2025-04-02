public class TestOrders {
    public static void main(String[] args) {
        // Create Items
        Item dripCoffee = new Item("drip coffee", 1.50);
        Item cappuccino = new Item("cappuccino", 3.50);
        Item latte = new Item("latte", 4.00);
        Item mocha = new Item("mocha", 4.50);
        Item espresso = new Item("espresso", 2.00);

        // Create 2 orders for guests (unspecified names)
        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders with specified customer names
        Order order3 = new Order("Alice");
        Order order4 = new Order("Bob");
        Order order5 = new Order("Charlie");

        // Add items to guest orders
        order1.addItem(dripCoffee);
        order1.addItem(cappuccino);
        order2.addItem(latte);
        order2.addItem(mocha);

        // Add items to named orders
        order3.addItem(espresso);
        order3.addItem(dripCoffee);
        order4.addItem(cappuccino);
        order4.addItem(latte);
        order5.addItem(mocha);
        order5.addItem(espresso);

        // Set some orders ready
        order1.setReady(true);
        order4.setReady(true);

        // Test getStatusMessage and getOrderTotal
        Order[] orders = {order1, order2, order3, order4, order5};
        for (Order order : orders) {
            System.out.println("---------------------------------");
            System.out.println(order.getStatusMessage());
            System.out.printf("Order total: $%.2f\n", order.getOrderTotal());
            order.display();
        }
    }
}
