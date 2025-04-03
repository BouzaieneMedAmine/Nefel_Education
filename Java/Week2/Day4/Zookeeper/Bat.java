public class Bat extends Mammal {
	public Bat() {
		this.energy = 300;
	}

	public void fly() {
		energy -= 50;
		System.out.println("Bat is airborne! Energy: " + energy);
	}

	public void eatHumans() {
		energy += 25;
		System.out.println("Bat ate humans! Energy: " + energy);
	}

	public void attackTown() {
		energy -= 100;
		System.out.println("Bat attacked a town! Energy: " + energy);
	}
}
