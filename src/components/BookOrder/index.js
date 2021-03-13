import BookOrder from './BookOrder';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  orders: state.bookOrder && state.bookOrder.orders,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BookOrder);