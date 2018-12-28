import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { CarsList, CarsAdd } from './';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      cars: [
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
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      brand, model, color, license,
    } = e.target;

    const newCarID =
      this.state.cars[this.state.cars.length - 1].car_id === 0
        ? 1
        : this.state.cars[this.state.cars.length - 1].car_id + 1;

    this.setState(prevState => ({
      cars: [
        ...prevState.cars,
        {
          car_id: newCarID,
          brand: brand.value,
          model: model.value,
          color: color.value,
          license: license.value,
        },
      ],
    }));

    // brand.value = '';
    // model.value = '';
    // color.value = '';
    // license.value = '';
  };

  render() {
    const { cars } = this.state;

    return (
      <div className="container container--inset">
        <Link to="/list">LIST</Link>
        <Link to="/add">ADD</Link>
        <Route
          exact
          path="/list"
          render={props => <CarsList {...props} cars={cars} />}
        />
        <Route
          exact
          path="/add"
          render={props => (
            <CarsAdd {...props} handleSubmit={this.handleSubmit} />
          )}
        />
      </div>
    );
  }
}

export { Cars };
