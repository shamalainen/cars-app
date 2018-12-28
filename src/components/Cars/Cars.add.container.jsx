import { connect } from 'react-redux';

import { CarsAdd } from './Cars.add';
import { AddCar } from '../../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  AddCar: car => dispatch(AddCar(car)),
});

const CarAddConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsAdd);

export { CarAddConnected };
