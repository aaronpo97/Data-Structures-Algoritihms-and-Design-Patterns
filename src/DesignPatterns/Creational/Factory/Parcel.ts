export default class Parcel {
  readonly weight: number;

  readonly distance: number;

  shipped: boolean;

  private constructor(weight: number, distance: number) {
    this.weight = weight;
    this.distance = distance;
    this.shipped = false;
  }

  static createParcel(weight: number, distance: number) {
    if (weight < 0) {
      throw new Error(
        'Illegal value for parcel weight. Weight must be greater than 0',
      );
    }
    if (distance < 0) {
      throw new Error(
        'Illegal value for parcel weight. Weight must be greater than 0',
      );
    }

    return new Parcel(weight, distance);
  }
}
