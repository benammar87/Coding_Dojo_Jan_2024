public class ZooTest {

    public static void main(String[] args) {
        Gorilla gorilla = new Gorilla();
        gorilla.throwSomthing();
        gorilla.throwSomthing();
        gorilla.eatBanans();
        gorilla.Climb();


        System.out.println("*************");

        Bat bat = new Bat();

        bat.DisplayEnergy();
        bat.fly();
        bat.eatHumans();
        bat.attackTown();


    }
}
