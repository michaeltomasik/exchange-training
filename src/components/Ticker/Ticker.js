import React from "react";
import NumberFormat from "react-number-format";

import btcIcon from "../../assets/btc.png";

import "./Ticker.css";

const Ticker = ({ tickerInfo }) => {
  const [
    BID,
    BID_SIZE,
    ASK,
    ASK_SIZE,
    DAILY_CHANGE,
    DAILY_CHANGE_RELATIVE,
    LAST_PRICE,
    VOLUME,
    HIGH,
    LOW
  ] = tickerInfo;
  return (
    <div className={`Ticker`}>
      <img src={btcIcon} width="60" height="60" />
      <div>
        <div>BTC/USD</div>

        <div>
          VOL{" "}
          <NumberFormat
            value={VOLUME}
            thousandSeparator
            decimalScale={2}
            displayType={"text"}
          />
        </div>
        <div>
          LOW <NumberFormat value={LOW} displayType={"text"} />
        </div>
      </div>
      <div>
        <div>
          <NumberFormat
            value={LAST_PRICE}
            thousandSeparator
            displayType={"text"}
          />
        </div>
        <div>
          {" "}
          24h change{" "}
          <NumberFormat
            value={DAILY_CHANGE}
            thousandSeparator
            displayType={"text"}
          />
        </div>
        <div>
          {" "}
          HIGH{" "}
          <NumberFormat value={HIGH} thousandSeparator displayType={"text"} />
        </div>
      </div>
    </div>
  );
};

export default Ticker;
