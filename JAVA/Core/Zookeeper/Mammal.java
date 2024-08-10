public class Mammal {

    private int energy;

    public Mammal(){
        this.energy = 100 ;
    }
    public Mammal(int energy){
        this.energy = energy;
    }
    public void DisplayEnergy(){
        System.out.println("Energy Level is "+energy);
    }

    public int getEnergy(){
        return energy ;
    }
    public void setEnergy(int energy){
        this.energy = energy ;
    }


}