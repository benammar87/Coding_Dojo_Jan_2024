class Ninja {
    constructor (name ){
        this.name = name
        this.health = 90 ;
        this.speed = 3 ;
        this.strength = 3 ;
    }
    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log( `  ${this.name} my health is ${this.health} ,  my speed is ${this.speed} and my strength is ${this.strength}` )
    }
    
    drinkShake(){
        this.health +=10 ;
        console.log(this.health)


    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();
