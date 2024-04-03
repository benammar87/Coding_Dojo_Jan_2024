class Ninja {
    constructor (name, health= 90, speed= 3, strength= 3 ){
        this.name = name
        this.health =health ;
        this.speed =speed ;
        this.strength =strength ;
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

class Sensei extends Ninja {

    constructor(name){
        super(name , 200 , 10 , 10  )
            this.wisdom = 10 ;
        
    }

    speakWisdom(){
        super.drinkShake()
        console.log("What one programmer can do in one month , two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.sayName();
superSensei.showStats();

