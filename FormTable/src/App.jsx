import React, { useState,useReducer, useEffect } from 'react'
import Form from './component/Form'
import MyContext from './component/MyContext';
import axios from 'axios';

function reducer(state,action){
  switch (action.type){
    case "ADD":
      return [action.payload,...state]
    case "DELETE":
      return state.filter((_,index)=>index!==action.payload)
    default : 
      return state
  }


}

const App = () => {
  // const[data,dispatch] = useReducer(reducer , [])
  // let [apiData,setApiData]=useState();
  let [data,setData] = useState([]);
  useEffect(()=>{
    // fetch("https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form").then((res)=>res.json()).then((data)=>setData(data));
    axios.get("https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form").then(res=>setData(res.data));
  },[]);  
  
  // function addData(item){
    //   dispatch({type: "ADD",payload: item})
    // }
    // function handleDelete(index){
      //   dispatch({type:"DELETE",payload: index})
      // }
  function handleAdd(cur){
    axios.post("https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form",cur).then(res=>console.log(res.data));
    setData((old)=>[cur,...old]);

  }
  function handleDel(ind){
    setData((old)=>old.filter((value,index)=>index!==ind));
  }
  return (
    <div>
      <MyContext.Provider value={{handleAdd,handleDel,data}}> 
        <Form />  
      </MyContext.Provider>
    </div>
  )
}

export default App
