from classes.ninja import Ninja
from classes.pirate import Pirate
from classes.character import Character

michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

michelangelo.attack(jack_sparrow)
jack_sparrow.show_stats()

char1 = Character(name="bob",strength= 20 ,speed=6,health=100)
char2 = Character(name="jhon", strength=20 ,speed=6,health=100)

