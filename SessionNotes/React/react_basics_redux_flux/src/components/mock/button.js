// button => increase - decrease => number

import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "./counterStore/counterAction";

class ButtonClick extends Component {
  render() {
    return (
      <div>
        <p>The number in store: {this.props.count}</p>
        <button onClick={this.props.increaseCount}>Increase</button>
        <button onClick={this.props.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ButtonClick);
