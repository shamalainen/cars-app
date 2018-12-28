import React from 'react';
import PropTypes from 'prop-types';

const CarsListItem = ({
  brand, model, color, license,
}) => (
  <div className="cars__item">
    <div className="cars__brand">{brand}</div>
    <div className="cars__model">{model}</div>
    <div className="cars__color">{color}</div>
    <div className="cars__license">{license}</div>
  </div>
);

CarsListItem.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
};

export { CarsListItem };
