//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Pepperoni", "Sausage", "Jalapeno", "Bacon"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
  let toppingsList = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    toppingsList += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) {
      toppingsList += ", ";
    }
  }
  console.log(`Welcome to Pizza Planet, our toppings are: ${toppingsList}!`);
}

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  const toppingsText =
    toppings.length > 0
      ? `with ${
          toppings.length > 1
            ? `${toppings.slice(0, -1).join(", ")}, and ${toppings.slice(-1)}`
            : toppings.join("")
        }`
      : "cheese";
  console.log(`One ${size} ${crust} crust pizza ${toppingsText} coming up!`);
  return [size, crust, toppings];
}
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizza) {
  const toppingsText =
    pizza.toppings.length > 1
      ? `${pizza.toppings.slice(0, -1).join(", ")}, and ${pizza.toppings.slice(
          -1
        )}`
      : pizza.toppings.join("");
  console.log(
    `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${toppingsText}. Enjoy!`
  );
  return pizza;
}
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
const orderDetails = getPizzaOrder(
  "large",
  "thin",
  "Sausage",
  "Jalapeno",
  "Bacon"
);
const preparedPizza = preparePizza(orderDetails);
servePizza(preparedPizza);
