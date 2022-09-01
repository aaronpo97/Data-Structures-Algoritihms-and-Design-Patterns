import { PizzaCheese, PizzaSauce, PizzaSizes, PizzaTopping } from './types';

/** The base class for Pizza. */
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
