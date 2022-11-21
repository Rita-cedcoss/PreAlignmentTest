import React, { memo } from "react";

const Counter = (props) => {
    return (
    <div id="counter">
      <p>{props.count}</p>
      <button onClick={props.incrementCounter}>Click Here</button>
    </div>
  );
};

export default  memo(Counter);
