// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein; 
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }

// var sandwich1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(sandwich1); 

function pizzaFactory(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var deepDishPizza = pizzaFactory("deep dish", "traditional", "mozarella", ["pepperoni", "sausage"]);
console.log(deepDishPizza);

var handTossed = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(handTossed);

var patrickFav = pizzaFactory("deep dish", "traditional", ["mozzarella", "provolon"], ["pepperoni", "sausage", "bacon", "onion", "mushroom"]);
console.log(patrickFav);

var bbqPizza = pizzaFactory("hand tossed", "bbq sauce", "mozzarella", ["chicken", "bacon", "onion"]);
console.log(bbqPizza);