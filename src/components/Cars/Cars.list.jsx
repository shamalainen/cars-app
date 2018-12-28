import React from 'react';
import PropTypes from 'prop-types';

import { CarsListItem, CarsListHeader } from './';

const CarsList = ({ cars }) => (
  <div className="cars">
    <CarsListHeader />
    {cars.map(i => (
      <CarsListItem key={i.car_id} {...i} />
    ))}
  </div>
);

CarsList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    car_id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    license: PropTypes.string.isRequired,
  })).isRequired,
};

export { CarsList };
