import AirTransport from './AirTransport';
import Parcel from './Parcel';
import RoadTransport from './RoadTransport';
import SeaTransport from './SeaTransport';
import { transportMethods, TransportType } from './types';

export default class LogisticsFactory {
  static generateShippingMethod(type: TransportType, parcel: Parcel) {
    if (!transportMethods.includes(type)) {
      throw new TypeError('Invalid shipping type.');
    }

    switch (type) {
      case 'plane':
        return new AirTransport(parcel);
      case 'road':
        return new RoadTransport(parcel);
      case 'ship':
        return new SeaTransport(parcel);

      default:
        return null;
    }
  }
}
