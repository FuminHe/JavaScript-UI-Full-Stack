import React from "react";
import { connect } from "react-redux";

import { buyCake, makeCake } from "../reduxStore/stupidCakeStore/cakeActions";

function CakeComponent(props) {
  return (
    <div>
      This is the cake store
      <p>The number of cakes: {props.cakeNum}</p>
      <p>Used mapStateToProps&mapDispatchProps</p>
      <button onClick={() => props.buyCakeAction(4)}>Buy 4 Cake</button>
      <button onClick={() => props.buyCakeAction()}>Buy 1 Cake</button>
      <button onClick={props.makeCakeAction}>Make Cake</button>
    </div>
  );
}

// state from redux store is mapped to our component props
const mapStateToProps = (state) => {
  return {
    cakeNum: state.cake.numOfCakes,
  };
};

// map dispatch of an action creator to a prop in our component
const mapDispatchProps = (dispatch) => {
  return {
    buyCakeAction: (cakenum) => dispatch(buyCake(cakenum)),
    makeCakeAction: () => dispatch(makeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CakeComponent);
