import React, { useState } from "react";

const Counter = (props) => {
  console.log(props);
  // const [value, setValue] = useState(props.value);
  const { value } = props;

  console.log(value);
  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasess = () => {
    let clasess = "badge m-2 ";
    clasess += value === 0 ? "bg-warning" : "bg-primary";
    return clasess;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasess()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger bt-sm-m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
