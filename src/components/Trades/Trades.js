import React from "react";
import NumberFormat from "react-number-format";
import moment from 'moment';

import btcIcon from "../../assets/btc.png";

import "./Trades.css";

const TradesRow = ({ timestamp, price, amount }) => {
  return (
    <div className={`TradesRow ${amount < 0 ? 'Trades-red' : 'Trades-green'}`}>
      <div>{moment(timestamp).format('HH:MM:SS')}</div>
      <div><NumberFormat value={price}  displayType={"text"} thousandSeparator decimalScale={2} /></div>
      <div><NumberFormat value={amount}  displayType={"text"} decimalScale={5} fixedDecimalScale /></div>
    </div>
  );
};
const Trades = ({ trades }) => {
  return (
    <div className="Trades">
      <div className="Trades-header">
        <div>TIME</div>
        <div>PRICE</div>
        <div>AMOUNT</div>
      </div>
      {trades.map(trade => {
        const [ID, MTS, AMOUNT, PRICE] = trade;
        return <TradesRow timestamp={MTS} price={PRICE} amount={AMOUNT} />;
      })}
    </div>
  );
};

export default Trades;
