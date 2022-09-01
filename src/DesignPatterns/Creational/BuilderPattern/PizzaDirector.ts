import type Pizza from './Pizza';
import PizzaBuilder from './PizzaBuilder';
import { PizzaSizes } from './types';

/**
 * This class is responsible for executing the PizzaBuilder steps in a
 * particular sequence.
 *
 * Using this class is optional when creating a Pizza object. Despite being
 * optional, this class can reduce code duplication on the client-side when the
 * client wishes to make a Pizza based on a pre-configured 'recipe'.
 */
export default class PizzaDirector {
  private pizzaBuilder: PizzaBuilder;

  constructor(pizzaMaker: PizzaBuilder) {
    this.pizzaBuilder = pizzaMaker;
  }

  /**
   * Create a pepperoni pizza.
   *
   * @param size The size for your pizza.
   * @returns An instance of pizza with pepperoni as a topping, tomato sauce as
   *   a sauce, and mozzarella as a cheese.
   */
  createPepperoniPizza(size: PizzaSizes): Pizza {
    return this.pizzaBuilder
      .setSize(size)
      .addTopping('pepperoni')
      .addSauce('tomato')
      .addCheese('mozzarella')
      .bakePizza();
  }

  /**
   * Create a meat lovers pizza.
   *
   * @param size The size for your pizza.
   * @returns An instance of pizza with pepperoni, sausage, and bacon as
   *   toppings, tomato sauce as a sauce, and mozzarella as a cheese.
   */
  createMeatLoversPizza(size: PizzaSizes) {
    return this.pizzaBuilder
      .setSize(size)
      .addTopping('pepperoni')
      .addTopping('sausage')
      .addTopping('bacon')
      .addSauce('tomato')
      .addCheese('mozzarella')
      .bakePizza();
  }

  /**
   * Create a veggie pizza.
   *
   * @param size The size for your pizza.
   * @returns An instance of pizza with mushrooms and peppers as toppings,
   *   tomato sauce as a sauce and mozzarella as a cheese.
   */
  createVeggiePizza(size: PizzaSizes) {
    return this.pizzaBuilder
      .setSize(size)
      .addCheese('mozzarella')
      .addTopping('mushrooms')
      .addSauce('tomato')
      .addTopping('peppers')
      .bakePizza();
  }
}
