import java.text.SimpleDateFormat;
import java.util.Date;

public class AlfredQuotes {
    


    
    // Basic greeting method
    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }
    
    // Guest greeting method
    public String guestGreeting(String name) {
        return String.format("Hello, %s. Lovely to see you.", name);
    }
    
    // Overloaded guest greeting method with day period
    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }
    
    // Overloaded guest greeting method that determines day period automatically
   // Overloaded guest greeting method that determines day period automatically
public String guestGreetingWithTime(String name) {
    Date date = new Date();
    SimpleDateFormat hourFormat = new SimpleDateFormat("H");
    int hour = Integer.parseInt(hourFormat.format(date));
    
    String dayPeriod;
    if (hour < 12) {
        dayPeriod = "morning";
    } else if (hour < 18) {
        dayPeriod = "afternoon";
    } else {
        dayPeriod = "evening";
    }
    
    return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
}

    // Date announcement method
    public String dateAnnouncement() {
        Date date = new Date();
        return "It is currently " + date.toString() + ".";
    }
    
    // Respond before Alexis method
    public String respondBeforeAlexis(String conversation) {
        if (conversation.contains("Alexis")) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (conversation.contains("Alfred")) {
            return "At your service. As you wish, naturally.";
        } else {
            return "Right. And with that I shall retire.";
        }
    }
    
    // Sensei Bonus: Alfred sometimes yells when he's angry
    public String alfredYells(String conversation) {
        return conversation.toUpperCase() + "!!!";
    }
}


