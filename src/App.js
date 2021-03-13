import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import BookOrder from "./components/BookOrder";
import Ticker from "./components/Ticker";
import Trades from "./components/Trades";
import { addOrders } from "./store/actions/bookOrder";
import { addTicker } from "./store/actions/ticker";
import { addTrades } from "./store/actions/trades";

import { WEBSOCKET_URL, PRECISION_SCALE } from "./consts";

import "./App.css";

const App = ({ addOrdersAction, addTickerAction, addTradesAction }) => {
  const [orders, setOrders] = useState([]);
  const [isWebSocketOnline, setIsWebSocketOnline] = useState(false);
  // TODO: Put to redux
  const [currentPrecision, setPrecision] = useState(PRECISION_SCALE[0]);
  const channels = {};
  let ws;

  // TODO: put this logic somewhere else
  const createWebSocket = url => {
    // TODO: PUT it to redux
    let symbol = "tBTCUSD";

    ws = new WebSocket(url);
    // TODO: independent sockets per component
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "book",
          pair: symbol,
          prec: currentPrecision
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          symbol
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "trades",
          pair: symbol
        })
      );
    };

    ws.onmessage = event => {
      let data = JSON.parse(event.data);
      if (data.event === "subscribed") {
        channels[data.channel] = data.chanId;
      } else if (!data.event) {
        const [channelId, channelData] = data;
        if (channels["book"] === channelId) {
          const dataArray =
            channelData.length === 3 ? [channelData] : channelData;
          addOrdersAction(dataArray);
        }
        if (channels["ticker"] === channelId) {
          if (data[1] !== "hb") addTickerAction(data[1]);
        }

        if (channels["trades"] === channelId) {
          // https://bitcoin.stackexchange.com/questions/60390/trade-execution-v-s-trade-execution-update
          if (data[1] === "te") addTradesAction(data[2]);
        }
      }
    };

    ws.onerror = e => {
      console.log(
        "Socket is closed. Reconnect will be attempted in 1 second.",
        e.reason
      );
      setTimeout(function() {
        createWebSocket(WEBSOCKET_URL);
      }, 1000);
    };
  };

  useEffect(() => {
    createWebSocket(WEBSOCKET_URL);
  }, [currentPrecision]);

  return (
    <div className="App">
      <div>
        <div>
          {currentPrecision}
          <div
            onClick={() => {
              const nextPrecisionIndex =
                PRECISION_SCALE.indexOf(currentPrecision) + 1;
              ws.close();
              setPrecision(PRECISION_SCALE[nextPrecisionIndex]);
            }}
          >
            Increase Precision
          </div>
          <div
            onClick={() => {
              const nextPrecisionIndex =
                PRECISION_SCALE.indexOf(currentPrecision) - 1;
              ws.close();
              setPrecision(PRECISION_SCALE[nextPrecisionIndex]);
            }}
          >
            Descrease Precision
          </div>
        </div>
        <div onClick={() => ws.close()}>Disconnect</div>
        <div onClick={() => createWebSocket(WEBSOCKET_URL)}>Connect</div>
        <BookOrder />
        <Ticker />
        <Trades />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addOrdersAction: data => dispatch(addOrders(data)),
  addTickerAction: data => dispatch(addTicker(data)),
  addTradesAction: data => dispatch(addTrades(data))
});
// TODO: Change this connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
