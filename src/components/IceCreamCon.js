import React from "react";
import { buyIceCreame } from "../redux";
import { connect } from "react-redux";

function IceCreamCon(props) {
  return (
    <div>
      <h2>Number of Ice-Cream- {props.numOfIceCreame}</h2>
      <button onClick={props.buyIceCreame}>Buy-ice-cream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIceCreame: state.iceCream.numOfIceCreame,
  };
};
const mapDispatchPropsToState = (dispatch) => {
  return {
    buyIceCreame: () => dispatch(buyIceCreame()),
  };
};

export default connect(mapStateToProps, mapDispatchPropsToState)(IceCreamCon);
