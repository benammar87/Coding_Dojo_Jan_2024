public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffePrice = 5.5 ;
        double lattePrice = 2.5 ; 
        double cappucinoPrice = 6 ;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam" ;
        String customer3 = "Jimmy";
        String customer4 = "Noah" ;


    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(isReadyOrder1) {
        System.out.println(customer1 +readyMessage);
        }
        else {
        System.out.println(customer1 + pendingMessage);
        }
        if(isReadyOrder4) {
        System.out.println(customer4 + readyMessage );
        System.out.println(displayTotalMessage + cappucinoPrice);
        }
        else {
        System.out.println(customer4 + pendingMessage);
        }
        if(isReadyOrder2) {
        System.out.println(customer2 + readyMessage );
        System.out.println(displayTotalMessage + lattePrice * 2);
        }
        else {
        System.out.println(customer2 + pendingMessage);
        }
    }
}
