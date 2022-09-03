import Parcel from './Parcel';
import { TransportType } from './types';

export default abstract class Transport {
  abstract transportType: TransportType;

  abstract parcel: Parcel;

  abstract shippingCosts: number;

  abstract shippingRate: {
    pricePerKilogram: number;
    pricePerKilometer: number;
  };

  abstract shipItem(): void;

  protected calculateShippingCost(): number {
    const distanceCharge =
      this.parcel.distance * this.shippingRate.pricePerKilometer;
    const weightSurcharge =
      this.parcel.weight * this.shippingRate.pricePerKilogram;

    return distanceCharge + weightSurcharge;
  }

  protected getShippingCostsFormatted(): string {
    return Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'CAD',
    }).format(this.shippingCosts);
  }
}
