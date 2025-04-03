public class ZookeeperTest {
	public static void main(String[] args) {
		// Test Gorilla
		Gorilla gorilla = new Gorilla();
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.eatBananas();
		gorilla.eatBananas();
		gorilla.climb();
		System.out.println("Gorilla energy:");
		gorilla.displayEnergy();

		System.out.println("\n------------------\n");

		// Test Bat
		Bat bat = new Bat();
		bat.attackTown();
		bat.attackTown();
		bat.attackTown();
		bat.eatHumans();
		bat.eatHumans();
		bat.fly();
		bat.fly();
		System.out.println("Bat energy:");
		bat.displayEnergy();
	}
}
