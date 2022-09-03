import Parcel from './Parcel';
import Transport from './Transport';

export default class SeaTransport extends Transport {
  parcel: Parcel;

  shippingCosts: number;

  shippingCostsStr: string;

  shippingRate = { pricePerKilogram: 0.2, pricePerKilometer: 0.25 };

  transportType = 'road' as const;

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
