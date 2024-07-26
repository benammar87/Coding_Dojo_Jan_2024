import java.util.ArrayList;

public class Order {
    // MEMBER VARIABLES
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    // CONSTRUCTOR
    public Order() {
        this.name = "Guest";
        this.items = new ArrayList<>();
        this.ready = false; // Default value
    }
    
    // OVERLOADED CONSTRUCTOR
    public Order(String name) {
        this.name = name;
        this.items = new ArrayList<>();
        this.ready = false; // Default value
    }

    // GETTER for name
    public String getName() {
        return name;
    }

    // SETTER for name
    public void setName(String name) {
        this.name = name;
    }

    // GETTER for ready
    public boolean isReady() {
        return ready;
    }

    // SETTER for ready
    public void setReady(boolean ready) {
        this.ready = ready;
    }

    // GETTER for items
    public ArrayList<Item> getItems() {
        return items;
    }

    // SETTER for items
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    // METHOD to add an item to the order
    public void addItem(Item item) {
        this.items.add(item);
    }

    // METHOD to get status message
    public String getStatusMessage() {
        return ready ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }

    // METHOD to get the order total
    public double getOrderTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }

    // METHOD to display the order information
    public void display() {
        System.out.println("Customer Name: " + name);
        for (Item item : items) {
            System.out.println(item.getName() + " - $" + String.format("%.2f", item.getPrice()));
        }
        System.out.println("Total: $" + String.format("%.2f", getOrderTotal()));
    }
}

