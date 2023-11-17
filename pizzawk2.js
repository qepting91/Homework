//Creating the variables for pizzaPlace and number of toppings
const pizzaPlace = "Pizza Planet";
let numberofToppings = 10;

//printing out the variables to the console
console.log(pizzaPlace);
console.log(numberofToppings);

//template literal print statement
console.log(
  `Hello! Welcome to ${pizzaPlace}! We have ${numberofToppings} toppings!`
);

// check the number of toppings and print appropriate message
if (numberofToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
