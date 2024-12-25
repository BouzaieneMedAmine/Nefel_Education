var pizza = {};

function pizzaoven(crustType,sauceType,cheeses,topping){
   pizza.crustType = crustType;
   pizza.sauceType = sauceType;
   pizza.cheeses = cheeses;
   pizza.topping = topping;

return pizza
}
var pizza1= pizzaoven("deep dish","traditional",["mozzarella"],["pepperoni"]);
var pizza2= pizzaoven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms","olives","onions"]);
var pizza3= pizzaoven("cireal","white sauce",["gruerre","rocqueford" ],["olves"]);
var pizza4= pizzaoven("fin crust","marinara",["mozzarella", "gruerre"],["beef meat","olives","tomato"]);






console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

