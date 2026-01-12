import React,{useEffect, useState,useReducer} from 'react'
import Navbar from './components/Navbar'
import Footer1 from './components/Footer1'
import { myContext } from './context/mycontext'
import ReduxPractic from './components/ReduxPractic'
const initValue={count:1};

function reducer(state,action){
  switch(action.type){
    case "inc":
      return {count:state.count+1};
    default:
      return state;
  }
}

const App = () => {
  // let [count,setCount]  =useState(1);
  // function updateCount(val){
  //   setCount(val);
  // }

  const [state,dispatch]=useReducer(reducer,initValue);
  return (
    <div>

      <myContext.Provider value={{dispatch}}>
        <ReduxPractic/>
        <Navbar/>
        <h1>{state.count}</h1>
        <Footer1 />

      </myContext.Provider>
    </div>
  )
}

export default App
