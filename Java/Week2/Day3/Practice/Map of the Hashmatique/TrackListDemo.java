import java.util.HashMap;
import java.util.Map;

public class TrackListDemo {
    public static void main(String[] args) {
        // Create a HashMap to store track titles and lyrics
        HashMap<String, String> trackList = new HashMap<>();

        // Add at least 4 songs to the trackList
        trackList.put("Uprising", "They will not force us, they will stop degrading us...");
        trackList.put("Starlight", "Hold you in my arms, I just wanted to hold...");
        trackList.put("Supermassive Black Hole", "Glaciers melting in the dead of night...");
        trackList.put("Knights of Cydonia", "No one's going to take me alive...");

        // Pull out one of the songs by its track title
        String songTitle = "Starlight";
        String lyrics = trackList.get(songTitle);
        System.out.println("Lyrics for '" + songTitle + "': " + lyrics);

        // Print out all the track names and lyrics
        System.out.println("\nAll Tracks:");
        for (Map.Entry<String, String> entry : trackList.entrySet()) {
            System.out.println("Track: " + entry.getKey() + " | Lyrics: " + entry.getValue());
        }
    }
}
