import React from "react";
import NumberFormat from "react-number-format";

import "./BookOrder.css";

const BookOrderRow = ({ price, count, amount, className }) => {
  const total = amount * price;
  return (
    <div className={`BookOrderRow ${className ? className : ""}`}>
      <div>
        <NumberFormat value={count} displayType={"text"} decimalScale={2} />
      </div>
      <div>
        <NumberFormat value={amount} displayType={"text"} decimalScale={2} />
      </div>
      <div>
        <NumberFormat value={total} displayType={"text"} decimalScale={2} />
      </div>
      <div>
        <NumberFormat value={price} displayType={"text"} decimalScale={2} />
      </div>
    </div>
  );
};

const BookOrder = ({ orders }) => {
  return (
    <div className="BookOrder">
      <div className="leftColumn">
        <div className="BookOrder-header">
          <div>COUNT</div>
          <div>AMOUNT</div>
          <div>TOTAL</div>
          <div>PRICE</div>
        </div>
        {orders
          .filter(order => order[2] > 0)
          .map(order => (
            <BookOrderRow price={order[0]} count={order[1]} amount={order[2]} />
          ))
          .slice(0, 25)}
      </div>
      <div className="rightColumn">
        <div className="BookOrder-header reverse">
          <div>COUNT</div>
          <div>AMOUNT</div>
          <div>TOTAL</div>
          <div>PRICE</div>
        </div>
        {orders
          .filter(order => order[2] < 0)
          .map(order => (
            <BookOrderRow
              price={order[0]}
              count={order[1]}
              amount={order[2]}
              className="reverse"
            />
          ))
          .slice(0, 25)}
      </div>
    </div>
  );
};

export default BookOrder;
