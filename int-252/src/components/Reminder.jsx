import React, { useRef, useState } from 'react'

const Reminder = () => {
    let inputData = useRef();
    let [data, setData] = useState([]);
    function handleClick(){
        setData([inputData.cur.value,...data]);
        inputData.cur.value = "";
    }
  return (
    <div>
      <input type ="text" ref={inputData}/>
      <button onClick={handleClick}>Click to add</button>
      <div>{data.map((e)=>{
        <div >{e}</div>
      })}</div>
    </div>
  )
}

export default Reminder
