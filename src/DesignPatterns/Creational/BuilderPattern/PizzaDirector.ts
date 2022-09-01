import type PizzaSizes from './types/PizzaSizes';
import type Pizza from './Pizza';
import PizzaBuilder from './PizzaBuilder';

/**
 * This class is responsible for executing the PizzaBuilder steps in a particular sequence.
 *
 * Using this class is optional when creating a Pizza object. Despite being optional, this
 * class can reduce code duplication on the client-side when the client wishes to make a
 * Pizza based on a pre-configured 'recipe'.
 */
export default class PizzaDirector {
  private pizzaMaker!: PizzaBuilder;

  private constructor(pizzaMaker: PizzaBuilder) {
    this.pizzaMaker = pizzaMaker;
  }

  /**
   * Creates a new instance of PizzaDirector.
   *
   * @param builder An instance of PizzaBuilder.
   * @returns An instance of PizzaDirector.
   */
  public static start(builder: PizzaBuilder) {
    return new PizzaDirector(builder);
  }

  createPepperoniPizza(size: PizzaSizes): Pizza {
    this.pizzaMaker.setSize(size);
    this.pizzaMaker.addCheese();
    this.pizzaMaker.addPepperoni();
    this.pizzaMaker.addTomatoSauce();

    return this.pizzaMaker.bakePizza();
  }

  createMeatLoversPizza(size: PizzaSizes) {
    this.pizzaMaker.setSize(size);
    this.pizzaMaker.addTomatoSauce();
    this.pizzaMaker.addCheese();
    this.pizzaMaker.addPepperoni();
    this.pizzaMaker.addBacon();
    this.pizzaMaker.addSausage();

    return this.pizzaMaker.bakePizza();
  }

  createVeggiePizza(size: PizzaSizes) {
    this.pizzaMaker.setSize(size);
    this.pizzaMaker.addTomatoSauce();
    this.pizzaMaker.addCheese();
    this.pizzaMaker.addMushrooms();
    this.pizzaMaker.addPeppers();

    return this.pizzaMaker.bakePizza();
  }
}
