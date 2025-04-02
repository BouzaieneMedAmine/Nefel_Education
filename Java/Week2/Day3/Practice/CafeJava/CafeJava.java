public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.0;
        double lattePrice = 4.5;
        double cappuccinoPrice = 4.0;

        // Customer name variables
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        // Order completion statuses
        boolean isReadyOrder1 = false; // Cindhuri
        boolean isReadyOrder2 = true;  // Sam
        boolean isReadyOrder3 = false; // Jimmy
        boolean isReadyOrder4 = true;  // Noah

        // APP INTERACTION SIMULATION
        System.out.println(generalGreeting + customer1); // Welcome message for Cindhuri

        // Cindhuri ordered a coffee
        System.out.println(customer1 + (isReadyOrder1 ? readyMessage : pendingMessage));

        // Noah ordered a cappuccino
        if (isReadyOrder4) {
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappuccinoPrice);
        } else {
            System.out.println(customer4 + pendingMessage);
        }

        // Sam ordered 2 lattes
        double samTotal = lattePrice * 2;
        System.out.println(displayTotalMessage + samTotal);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        } else {
            System.out.println(customer2 + pendingMessage);
        }

        // Jimmy was charged for a coffee but ordered a latte
        double difference = lattePrice - dripCoffeePrice;
        System.out.println(displayTotalMessage + difference);
    }
}
