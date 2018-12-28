import { connect } from 'react-redux';
import { CarsList } from './Cars.list';

const mapStateToProps = state => ({ cars: state.cars.list });

const CarListConnected = connect(mapStateToProps)(CarsList);

export { CarListConnected };
