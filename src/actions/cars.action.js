import { carsConstants } from '../contants';

export const AddCar = car => ({
  type: carsConstants.ADD_CAR,
  car,
});
