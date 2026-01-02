import React, { useContext } from 'react'
import MyContext from './MyContext';

const Formoutput = () => {
  let {handleDelete,data}=useContext(MyContext);
  return (
    <>
        {data.map((value , index)=>(
            <div key={index} className="mt-5 bg-amber-600 flex justify-between  p-4 text-2xl text-white">
                <span >{index+1}</span>
                <span >{value.email}</span>
                <span >{value.number}</span>
                <span >{value.password}</span>
                <button className="rounded border bg-amber-50 w-30 text-orange-500 border-black" onClick={()=>handleDelete(index)} >delete</button>
            </div>

        ))}
    </>
  )
}

export default Formoutput
