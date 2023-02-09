import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBread } from "../redux";

function BreadContainer() {
  const numOfBread = useSelector((state) => state.bread.numOfBread);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of bread- {numOfBread}</h3>
      <button onClick={() => dispatch(buyBread())}>Buy-Bread</button>
    </div>
  );
}

export default BreadContainer;
