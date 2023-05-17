import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, multiply, divide} from "../../redux/slice/counterSlice"

function Counter() {
  // useSelector to get state
  const count = useSelector((state) => state.counterStore.count)
  //useDispatch to trigger Slice's actions
  const dispatch = useDispatch();
  
  const [multiplier, setMultiplier] = useState(10);

  // This method is obsolete, due to onChange being handled inline.
  // const handleInput = () => {
  //   setMultiplier(document.getElementById('multiplierInput').value)
  // }

  const handleMultiplier = () => dispatch(multiply(multiplier))
  const handleDivider = () => dispatch(divide(multiplier))
      
    
  

  return (
    <div>
      Counter : {count}
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>34
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
      <div>
        <input type='text' 
        placeholder={multiplier} 
        id='multiplierInput' 
        defaultValue={multiplier} 
        /* 
          onChange={handleInput}></input> 
          onChange={(e) => setMultiplier(e.target.value)}
        */
        onChange={(e) => setMultiplier(e.target.value)}></input>

        <button onClick={handleMultiplier}>x</button>
        <button onClick={handleDivider}>/</button>
      </div>
    </div>
  )
}

export default Counter
