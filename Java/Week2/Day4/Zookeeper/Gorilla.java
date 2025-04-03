public class Gorilla extends Mammal {
	// ...existing code...
	public Gorilla() {
		super();
	}
	// ...existing code...
	public void throwSomething() {
		energy -= 5;
		System.out.println("Gorilla threw something! Energy: " + energy);
	}
	// ...existing code...
	public void eatBananas() {
		energy += 10;
		System.out.println("Gorilla ate bananas! Energy: " + energy);
	}
	// ...existing code...
	public void climb() {
		energy -= 10;
		System.out.println("Gorilla climbed a tree! Energy: " + energy);
	}
	// ...existing code...
}
