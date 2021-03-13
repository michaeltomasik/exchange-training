import Trades from './Trades';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  trades: state.trades.trades,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Trades);
