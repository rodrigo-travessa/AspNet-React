import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    console.log("Rendered");
    return { counter: 0, title : "Fun" };
  });

  function incrementCounter() {
    setCounterState((prevState) => {
      return { ...prevState , counter: prevState.counter + 1 };
    });
  }
  function decrementCounter() {
    setCounterState((prevState) => {
      console.log(prevState)
      return { ...prevState , counter: prevState.counter - 1 };
    });
  }

  return (
    <div>
      <span>Counter APP</span> <br />
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
      <br />
      <span> { counterState.title } Counter : {counterState.counter} </span>
    </div>
  );
};

export default Counter;
