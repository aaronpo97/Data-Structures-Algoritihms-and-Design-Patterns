import Pizza from './Pizza';

import {
  PizzaTopping,
  allPizzaCheeses,
  allPizzaSauces,
  allPizzaToppings,
  PizzaCheese,
  PizzaSauce,
  PizzaSizes,
  allPizzaSizes,
} from './types';

/**
 * This class contains steps the client can take to create an instance of Pizza.
 * It contains methods to set the size, toppings, cheese, and sauce of the Pizza
 * object and returns an instance of Pizza upon executing the bakePizza() method.
 *
 * @example
 *   const builder = new PizzaBuilder();
 *   const customPizza = builder
 *     .addTopping('pepperoni')
 *     .addTopping('bacon')
 *     .addSauce('tomato')
 *     .addCheese('mozzarella')
 *     .setSize('xl')
 *     .bakePizza();
 */
class PizzaBuilder {
  private pizza!: Pizza;

  constructor() {
    this.reset();
  }

  reset() {
    this.pizza = new Pizza();
  }

  /**
   * @param topping The topping you wish to add.
   * @returns The current instance of PizzaBuilder.
   */
  addTopping(topping: PizzaTopping) {
    if (!allPizzaToppings.includes(topping)) {
      throw new TypeError(`'${topping}' is not a valid topping.`);
    }
    this.pizza.toppings.push(topping);
    return this;
  }

  /**
   * @param cheese The cheese you wish to add.
   * @returns The current instance of PizzaBuilder.
   */
  addCheese(cheese: PizzaCheese) {
    if (!allPizzaCheeses.includes(cheese)) {
      throw new TypeError(`'${cheese}' is not a valid cheese type.`);
    }
    this.pizza.cheeses.push(cheese);
    return this;
  }

  /**
   * @param sauce The sauce you wish to add.
   * @returns The current instance of PizzaBuilder.
   */
  addSauce(sauce: PizzaSauce) {
    if (!allPizzaSauces.includes(sauce)) {
      throw new TypeError(`'${sauce}' is not a valid sauce type.`);
    }
    this.pizza.sauces.push(sauce);
    return this;
  }

  /**
   * @param size The size of the pizza to be created.
   * @returns {this} The current instance of PizzaBuilder.
   */
  setSize(size: PizzaSizes) {
    if (!allPizzaSizes.includes(size)) {
      throw new TypeError(`'${size} is not a valid size.`);
    }
    this.pizza.size = size;
    return this;
  }

  /**
   * The final step for the pizza building process.
   *
   * @returns The PizzaBuilder result.
   */
  bakePizza(): Pizza {
    if (!this.pizza.size) {
      throw new Error('Cannot bake a pizza with no size configured.');
    }

    const { pizza } = this;

    this.reset();
    return pizza;
  }
}

export default PizzaBuilder;
