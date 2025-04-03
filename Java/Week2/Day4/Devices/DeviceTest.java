public class DeviceTest {
    public static void main(String[] args) {
        Phone phone = new Phone();
        // Three phone calls
        phone.makeCall();
        phone.makeCall();
        phone.makeCall();
        // Two games
        phone.playGame();
        phone.playGame();
        // Charge the phone
        phone.charge();
    }
}
