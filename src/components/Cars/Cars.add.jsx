import React from 'react';
import PropTypes from 'prop-types';

const CarsAdd = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <label htmlFor="brand">Brand</label>
    <input type="text" name="brand" id="brand" />
    <label htmlFor="model">Model</label>
    <input type="text" name="model" id="model" />
    <label htmlFor="color">Colour</label>
    <input type="text" name="color" id="color" />
    <label htmlFor="license">License</label>
    <input type="text" name="license" id="license" />
    <button>CLICK ME</button>
  </form>
);

CarsAdd.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export { CarsAdd };
