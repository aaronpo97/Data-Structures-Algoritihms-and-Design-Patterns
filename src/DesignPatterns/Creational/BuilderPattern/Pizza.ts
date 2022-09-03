import { PizzaCheese, PizzaSauce, PizzaSizes, PizzaTopping } from './types';

/**
 * The base class for Pizza.
 *
 * The creation of this object is abstracted away into the PizzaBuilder class.
 */
class Pizza {
  toppings: PizzaTopping[];

  cheeses: PizzaCheese[];

  sauces: PizzaSauce[];

  size: PizzaSizes | undefined;

  constructor() {
    this.toppings = [];
    this.cheeses = [];
    this.sauces = [];
    this.size = undefined;
  }
}

export default Pizza;
