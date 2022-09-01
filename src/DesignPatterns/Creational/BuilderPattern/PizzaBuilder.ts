import Pizza from './Pizza';
import type PizzaSizes from './types/PizzaSizes';

interface Builder {
  reset(): void;
  addPepperoni(): void;
  addCheese(): void;
  addPeppers(): void;
  addSausage(): void;
  addBacon(): void;
  addTomatoSauce(): void;
  addMushrooms(): void;
  // eslint-disable-next-line no-unused-vars
  setSize(size: PizzaSizes): void;
}

class PizzaBuilder implements Builder {
  private pizza!: Pizza;

  constructor() {
    this.reset();
  }

  reset() {
    this.pizza = new Pizza();
  }

  addBacon() {
    this.pizza.bacon = true;
  }

  addTomatoSauce() {
    this.pizza.tomatoSauce = true;
  }

  addMushrooms() {
    this.pizza.mushrooms = true;
  }

  addCheese() {
    this.pizza.cheese = true;
  }

  addPepperoni() {
    this.pizza.pepperoni = true;
  }

  addPeppers() {
    this.pizza.peppers = true;
  }

  addSausage() {
    this.pizza.sausage = true;
  }

  setSize(size: PizzaSizes): void {
    this.pizza.size = size;
  }

  bakePizza(): Pizza {
    if (!this.pizza.size) {
      throw new Error('Cannot bake a pizza with no size configured.');
    }

    return this.pizza;
  }
}

export default PizzaBuilder;
