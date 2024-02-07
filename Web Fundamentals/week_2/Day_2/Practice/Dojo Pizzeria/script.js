// function pizzaOven
function pizzaOven(crustType, sauceType,cheeses, toppings){
  var pizza = {} ;
   pizza.crustType = crustType;
   pizza.sauceType = sauceType;
   pizza.cheeses = cheeses;
   pizza.toppings = toppings;
   
   console.log(pizza);
   return pizza;
}
// pizza1
 var pizza1 = pizzaOven("deep Dish","tradional",["mozzarella"] ,["pepperoni", "sausage"]);
 console.log(pizza1);

//  pizza2
 var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
 console.log(pizza2);
//  pizza3
ar pizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["vegan pesto", "roaston tomatoes", "fresh basil"]);
 console.log(pizza3);
//  pizza4
ar pizza4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["fennel", "sauteed kele", "caramelised onions"]);
 console.log(pizza4);