from classes.character import Character

class Ninja(Character):

    def __init__( self , name ):
        super().__init__(name=name,strength=10,speed=5,health=100)
        self.stealth = self.strength * 2

    def perform_stealth_attack(self,target) :
        print(f"{self.name} the ninja perfomrs a stealth attack§")   
        
    

    def attack( self , pirate ):
        pirate.health -= self.strength
        return self