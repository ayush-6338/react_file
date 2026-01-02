import React, { useState } from 'react'
import Navbar from './component/Navbar'
import FormMain from './component/FormMain';

const App = () => {
  let [data,setData] =useState([]);
  function addData(cur){
    setData((old)=>[cur,...old]);
    // console.log("App data:", data);
  }
  function deleteData(index){
    setData((old)=>old.filter((value,ind)=>index!==ind));
  }
  return (
    <div>
      <Navbar/>
      <FormMain apendData={addData} data={data} deleteData={deleteData}/>
    </div>
  )
}

export default App
