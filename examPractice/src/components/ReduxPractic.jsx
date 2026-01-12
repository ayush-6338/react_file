import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../redux/counter/counterSlice';

const ReduxPractic = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        hello there:{count} 
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default ReduxPractic