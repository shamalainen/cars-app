import { carsConstants } from '../contants';

const initialState = {
  list: [
    {
      car_id: 1,
      brand: 'Opel',
      model: 'Astra',
      color: 'Light Brown',
      license: 'MLP-881',
    },
    {
      car_id: 2,
      brand: 'BMW',
      model: 'E92 335',
      color: 'Black',
      license: 'HAN-5',
    },
  ],
};

export const cars = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.ADD_CAR:
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.car,
            car_id:
              state.list.length === 0
                ? 1
                : Math.max(state.list.map(i => i.id)) + 1,
          },
        ],
      };

    default:
      return state;
  }
};
