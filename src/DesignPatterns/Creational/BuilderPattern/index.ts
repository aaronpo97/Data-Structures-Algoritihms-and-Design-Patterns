import PizzaBuilder from './PizzaBuilder';

import PizzaDirector from './PizzaDirector';

const pizzaBuilder = new PizzaBuilder();

const director = new PizzaDirector(pizzaBuilder);

/** Making a medium pepperoni pizza */
const mdPepperoni = director.createPepperoniPizza('md');

/** Making an extra-large meat lovers pizza */
const xlMeatLovers = director.createMeatLoversPizza('xl');

/** Making a small veggie pizza */
const smVeggie = director.createVeggiePizza('sm');

/** Making a large custom pizza */
const lgCustom = pizzaBuilder
  .addTopping('pepperoni')
  .addTopping('peppers')
  .setSize('lg')
  .bakePizza();

console.log([mdPepperoni, xlMeatLovers, smVeggie, lgCustom]);
