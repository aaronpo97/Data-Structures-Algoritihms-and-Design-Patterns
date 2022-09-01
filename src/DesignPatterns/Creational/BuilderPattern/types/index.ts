export const allPizzaToppings = [
  'pepperoni',
  'peppers',
  'sausage',
  'bacon',
  'mushrooms',
] as const;

export const allPizzaSauces = ['tomato', 'bbq', 'alfredo', 'rose'] as const;

export const allPizzaCheeses = [
  'parmesan',
  'mozzarella',
  'vegan mozzarella',
  'provolone',
  'cheddar',
  'asiago',
] as const;

export const allPizzaSizes = ['sm', 'md', 'lg', 'xl'] as const;

export type PizzaTopping = typeof allPizzaToppings[number];
export type PizzaSauce = typeof allPizzaSauces[number];
export type PizzaCheese = typeof allPizzaCheeses[number];
export type PizzaSizes = typeof allPizzaSizes[number];
