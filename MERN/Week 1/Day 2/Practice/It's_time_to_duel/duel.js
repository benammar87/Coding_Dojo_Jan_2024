
class Card {
    constructor(name , cost){
        this.name = name ; 
        this.cost = cost ;
    }
}




class Unit extends Card {
    constructor(name , cost , power , resilience){
        super(name , cost);
        this.power = power ;
        this.resilience = resilience ;   
}

showStats(){
    console.log( `  ${this.name} cost is ${this.cost} ,  my speed is ${this.power} and my strength is ${this.resilience}` )
}
attack(target){
    target.resilience -= this.power 
    console.log(`${this.power}` )
}

}

const unit1 = new Unit( "Red Belt Ninja" ,3 , 3 , 4  )
const unit2 = new Unit( "Black Belt Ninja" , 4 , 5 , 4) 

unit1.showStats();
unit2.showStats();

class Effect extends Card{
    constructor(name , cost , text , stat , magnitude ){
        super(name , cost) ;
        this.text = text ;
        this.stat = stat ;
        this.magnitude = magnitude ;
    }
attack(target){
        if(this.stat=="resilience"){
            target.resilience+=this.magnitude;
        }
        else if(this.state=="power"){
            target.power+=this.magnitude;
        }
        console.log(`  ${this.name}  ${this.text} `)
    }
   
}


const effect1 = new Effect("Hard Algo" , 2 ,"increase target's resilience by 3 " ,"resilience" , +3 )
const effect2 = new Effect("Unhandled Promise rejection " ,"reduce target's resilience by 3 " ,1 , "resilience" , -2 )
const effect3 = new Effect("Pair programming" ,"increase target's power by 2" ,3 , "power" , +2 )

unit1.attack(unit2);
effect1.attack(unit1);


