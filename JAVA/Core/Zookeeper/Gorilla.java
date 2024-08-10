public class Gorilla extends Mammal{

    public void throwSomthing(){
        int energy = getEnergy();
        energy -= 5;
        setEnergy(energy);
        System.out.println("the Gorilla has thrown somthing");
    }

    public void eatBanans(){
        int energy = getEnergy();
        energy += 10 ; 
        setEnergy(energy);
        System.out.println("the Gorilla eat bananas ");
    }
    public void Climb(){
        int energy = getEnergy();
        energy -=10 ;
        setEnergy(energy);
        System.out.println("the gorilla has climbed a tree");
    }





    
}
