import React,{useState} from 'react'

export function useCounter(initialValue = 0){
  const [count,setCount]=useState(initialValue);
  const increment = ()=>setCount(prev => prev +1);
  const decrement = ()=>setCount(prev=>prev-1);
  const reset = ()=>setCount(initialValue);
  
  return { count,increment,decrement,reset };
}
const App = () => {
  const {count,increment,decrement} = useCounter(10);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App;

  