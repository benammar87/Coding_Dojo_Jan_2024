import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item();
        item1.name = "latte";
        item1.price = 5.5 ;
        item2.name = "cappucino" ;
        item2.price = 7.2 ;
        item3.name ="mocha";
        item3.price = 8.5 ;
        item4.name = "drop coffe";
        item4.price= 10 ;

    
        // Order variables -- order1, order2 etc.
        Orders order1 = new Orders();
        Orders order2 = new Orders();
        Orders order3 = new Orders();
        Orders order4 = new Orders();
        order1.name = "Firas";
        order2.name = "Noah";
        order3.name ="Jimmy";
        order4.name="Sam";
        order1.total = item1.price + item2.price ;
        order1.ready = true ;

        order2.items.add(item2);
        order2.total +=item2.price;
        order3.items.add(item3);
        order3.total += item3.price;
        order3.ready = true ;
        
    
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);
    }
}

