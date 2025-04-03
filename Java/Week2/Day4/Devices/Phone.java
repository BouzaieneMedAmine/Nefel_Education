public class Phone extends Device {

    public void makeCall() {
        battery -= 5;
        System.out.println("You make a call.");
        showBatteryStatus();
        if (battery < 10) {
            System.out.println("Battery critical");
        }
    }

    public void playGame() {
        if (battery < 25) {
            System.out.println("Battery too low to play a game.");
            showBatteryStatus();
            return;
        }
        battery -= 20;
        System.out.println("You play a game.");
        showBatteryStatus();
        if (battery < 10) {
            System.out.println("Battery critical");
        }
    }

    public void charge() {
        battery += 50;
        System.out.println("You charge the phone.");
        showBatteryStatus();
    }

    public static void main(String[] args) {
        Phone phone = new Phone();
        // Optionally initialize phone battery if needed
        System.out.println("Phone initialized.");
        // Test method calls if desired, e.g.:
         phone.charge();
         phone.makeCall();
         phone.playGame();
    }
}
