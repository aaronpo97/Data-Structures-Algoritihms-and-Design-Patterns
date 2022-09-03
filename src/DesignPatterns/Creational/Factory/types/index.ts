export const transportMethods = ['plane', 'road', 'ship'] as const;
export type TransportType = typeof transportMethods[number];
