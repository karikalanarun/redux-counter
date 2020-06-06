import React from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions/couter-actions";
// single responsibility principle - must

// 1. import React.
// 2.a. declare class component and makes it extends React.Component
// 2.b. if you are using function component, declrate a function and return a dummy jsx.
// 3. export it

const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state });

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(incrementAction()),
  dec: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
