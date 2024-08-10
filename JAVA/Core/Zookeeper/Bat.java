public class Bat extends Mammal {

    public Bat(){
        super(300) ;
    }
    
    public void fly(){
        int energy = getEnergy();
        energy +=50 ;
        setEnergy(energy);
        System.out.println("bat is airborne");
    }

    public void eatHumans(){
        int energy = getEnergy();
        energy += 25 ; 
        setEnergy(energy);
        System.out.println("the bat's satisfaction");
    }
    public void attackTown(){
        int energy = getEnergy();
        energy -= 100 ;
        setEnergy(energy);
        System.out.println("the bat's attack");
    }




}
