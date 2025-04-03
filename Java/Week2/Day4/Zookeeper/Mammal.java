public class Mammal {
	// ...existing code...
	protected int energy;
	
	public Mammal() {
		this.energy = 100;
	}
	// ...existing code...
	public int displayEnergy() {
		System.out.println("Energy: " + energy);
		return energy;
	}
	// ...existing code...
}
