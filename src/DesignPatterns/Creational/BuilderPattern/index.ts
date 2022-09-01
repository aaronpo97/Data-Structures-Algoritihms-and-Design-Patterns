import PizzaBuilder from './PizzaBuilder';

import PizzaDirector from './PizzaDirector';

const builder = new PizzaBuilder();

/** Making a medium pepperoni pizza */
const mdPepperoni = PizzaDirector.start(
  new PizzaBuilder(),
).createPepperoniPizza('md');

/** Making an extra-large meat lovers pizza */
const xlMeatLovers = PizzaDirector.start(
  new PizzaBuilder(),
).createMeatLoversPizza('xl');

/**
 * Making a large custom pizza with mushrooms, cheese, tomato sauce, pepperoni
 * and peppers.
 */
const customPizzaBuilder = new PizzaBuilder();

customPizzaBuilder.setSize('lg');
customPizzaBuilder.addMushrooms();
customPizzaBuilder.addCheese();
customPizzaBuilder.addTomatoSauce();
customPizzaBuilder.addPepperoni();
customPizzaBuilder.addPeppers();

const customPizza = customPizzaBuilder.bakePizza();

console.log({ mdPepperoni, xlMeatLovers, customPizza });
