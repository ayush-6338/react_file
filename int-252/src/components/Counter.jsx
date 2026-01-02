import React, { useState } from "react";
import { useEffect } from "react";

const Counter = ()=>{
    let [count,setCount] = useState(0);
    useEffect(()=>{
        console.log(`count is ${count}`)
    },count);
    return(
        <>
            <div className="flex justify-center gap-5 text-3xl p-3">
                <button onClick={()=>{
                    if(count<10)
                    setCount(count+1);
                    
                }} className="border w-20 rounded">+</button>
                <div>{count}</div>
                <button onClick={()=>{
                    if(count>0)
                    setCount(count-1);
                }} className="border w-20 rounded" >-</button>
            </div>
        </>
    )
};

export default Counter;