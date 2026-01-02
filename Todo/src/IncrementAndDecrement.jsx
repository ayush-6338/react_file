import React ,{useState} from 'react'

const IncrementAndDecrement = () => {
  let [count , setCount] = useState(0);
    function handleIncrement(){
      if(count<10){
        setCount(++count);
        console.log(count);
      }
    }
    function handleDecrement(){
      if(count>0){
        setCount(--count);
        console.log(count);
      }
    }
    function resethandle(){
      setCount(0);
    }
    return (
      <div >
        <div className="flex justify-evenly text-4xl mt-20  ">
          <button className="border w-40 p-4 rounded bg-amber-600 " onClick={handleIncrement}>+</button>
          <h1 className="{/*bg-blue-700 w-40 flex justify-center items-center rounded text-white*/}">{count}</h1>
          <button className="border w-40 p-4 rounded bg-amber-600" onClick={handleDecrement}>-</button>    
        </div>
        <div className="flex justify-center mt-30 text-4xl">
          <button className="border w-40 p-4 rounded bg-green-400" onClick={resethandle}>Reset</button>
        </div>
    </div>
    )
}

export default IncrementAndDecrement
