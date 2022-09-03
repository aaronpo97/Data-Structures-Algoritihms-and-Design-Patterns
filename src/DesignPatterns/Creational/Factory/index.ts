import LogisticsFactory from './LogisticsFactory';
import Parcel from './Parcel';

const parcel = Parcel.createParcel(22, 43);

const shipByRoad = LogisticsFactory.generateShippingMethod('road', parcel);
const shipByAir = LogisticsFactory.generateShippingMethod('plane', parcel);
const shipBySea = LogisticsFactory.generateShippingMethod('ship', parcel);

console.log({ shipByAir, shipByRoad, shipBySea });
