public class Device {
    protected int battery;

    public Device() {
        battery = 100;
    }

    public void showBatteryStatus() {
        System.out.println("Battery remaining: " + battery);
    }
}
