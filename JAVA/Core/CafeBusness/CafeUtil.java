import java.util.ArrayList;

public class CafeUtil {
    // Method to get streak goal
    public int getStreakGoal() {
        return getStreakGoal(10); // Default to 10 weeks
    }

    // Overloaded method with numWeeks parameter
    public int getStreakGoal(int numWeeks) {
        int sum = 0;
        for (int i = 1; i <= numWeeks; i++) {
            sum += i;
            }
        return sum;
         }
        // Method to get order total
        public double getOrderTotal(double[] prices) {
            double total = 0.0;
            for (double price : prices) {
                total += price;
            }
            return total;
        }
            // Method to display menu
    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%d %s\n", i, menuItems.get(i));
        }
    }
        // Method to add customer
        public void addCustomer(ArrayList<String> customers) {
            System.out.println("Please enter your name:");
            String username = System.console().readLine();
            System.out.printf("Hello, %s!\n", username);
    
            int position = customers.size() + 1;
            System.out.printf("There are %d people in front of you.\n", customers.size());
            
            customers.add(username);
            System.out.println(customers);
        }
    }
    
