import type PizzaSizes from './types/PizzaSizes';

class Pizza {
  pepperoni: boolean;

  cheese: boolean;

  peppers: boolean;

  sausage: boolean;

  bacon: boolean;

  tomatoSauce: boolean;

  mushrooms: boolean;

  size: PizzaSizes | undefined;

  constructor() {
    this.pepperoni = false;
    this.cheese = false;
    this.peppers = false;
    this.sausage = false;
    this.bacon = false;
    this.tomatoSauce = false;
    this.mushrooms = false;
    this.size = undefined;
  }
}

export default Pizza;
