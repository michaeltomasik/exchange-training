import Ticker from './Ticker';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  tickerInfo: state.ticker.tickerInfo,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);