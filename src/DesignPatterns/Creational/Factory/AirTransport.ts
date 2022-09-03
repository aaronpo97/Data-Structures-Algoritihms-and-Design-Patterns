import Parcel from './Parcel';
import Transport from './Transport';

export default class AirTransport extends Transport {
  parcel: Parcel;

  shippingCosts: number;

  shippingCostsStr: string;

  shippingRate = { pricePerKilogram: 3, pricePerKilometer: 0.5 };

  transportType = 'plane' as const;

  constructor(parcel: Parcel) {
    super();
    this.parcel = parcel;
    this.shippingCosts = this.calculateShippingCost();
    this.shippingCostsStr = this.getShippingCostsFormatted();
  }

  shipItem() {
    this.parcel.shipped = true;
  }
}
