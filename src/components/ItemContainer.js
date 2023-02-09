import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCreame } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h1>Item -{props.item}</h1>
      <button onClick={props.dispatchItem}>buy </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreame;
  return {
    item: ItemState,
  };
};
const mapDispatchPropsToState = (dispatch, ownProps) => {
  const itemDispatch = ownProps.Cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCreame());
  return {
    dispatchItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchPropsToState)(ItemContainer);
