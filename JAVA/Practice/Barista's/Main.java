public class Main {
    public static void main(String[] args) {
        // Creating items
        Item coffee = new Item("drip coffee", 1.50);
        Item cappuccino = new Item("cappuccino", 3.50);
        Item latte = new Item("latte", 2.75);
        Item espresso = new Item("espresso", 2.00);

        // Creating orders
        Order order1 = new Order();
        Order order2 = new Order("Cindhuri");
        Order order3 = new Order("Jimmy");
        Order order4 = new Order("Noah");

        // Adding items to orders
        order1.addItem(coffee);
        order1.addItem(cappuccino);

        order2.addItem(latte);
        order2.addItem(espresso);

        order3.addItem(coffee);
        order3.addItem(latte);

        order4.addItem(cappuccino);
        order4.addItem(espresso);

        // Test status message
        order1.setReady(true);
        System.out.println(order1.getStatusMessage()); // Should print "Your order is ready."

        order2.setReady(false);
        System.out.println(order2.getStatusMessage()); // Should print "Thank you for waiting. Your order will be ready soon."

        // Test total
        System.out.println("Order 1 Total: $" + order1.getOrderTotal()); // Should print the total of order1
        System.out.println("Order 2 Total: $" + order2.getOrderTotal()); // Should print the total of order2

        // Display orders
        System.out.println("\nOrder 1:");
        order1.display();
        System.out.println("\nOrder 2:");
        order2.display();
        System.out.println("\nOrder 3:");
        order3.display();
        System.out.println("\nOrder 4:");
        order4.display();
    }
}

