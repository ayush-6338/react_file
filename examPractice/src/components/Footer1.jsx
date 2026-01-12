import React,{useState,useContext} from 'react'
import { myContext } from '../context/mycontext';


const Footer1 = () => {
//     let count=useContext(myContext)
//    let [add,setadd] =useState(count+1);
//    function handleClick(){
//         setadd(add+1);
//         update(add);
//    }
let {dispatch}=useContext(myContext)
//    let [add,setadd] =useState(count+1);
   function handleClick(){
        dispatch({type:"inc"});
   }
   
  return (
    <div>
      <button className="bg-amber-400 border border-black rounded" onClick={handleClick}>like button </button>
    </div>
  )
}

export default Footer1
