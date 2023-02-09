import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
//
//
function CakeContainer(props) {
  return (
    <div>
      <h3>Number of cakes {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy-cake</button>
    </div>
  );
}
// we map from store to this component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// dispath send msg to store from this component button click
const dispatchPropsToState = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
//
// there should be selectors for more complex state mgt instead of this type of configuration
//
export default connect(mapStateToProps, dispatchPropsToState)(CakeContainer);
