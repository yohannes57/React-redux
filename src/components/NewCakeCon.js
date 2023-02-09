import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeCon(props) {
  const [number, setNumbers] = useState(1);
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <input value={number} onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>buy {number} cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes - 1,
  };
};
const mapDispatchPropsToState = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchPropsToState)(NewCakeCon);
