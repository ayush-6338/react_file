import React,{useEffect,useState} from 'react'
import axios from 'axios'
const App = () => {
  const [data,setData] = useState([])
  const [isError, seterror ] = useState("");
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/psts").then((res)=>setData(res.data)).catch((err)=>seterror(err.message))
  // },[])
  async function getApiData(){
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    }
    catch(err){
      seterror(err.message)
    }
  }
  useEffect(()=>{
    getApiData();
  },[])
  return (
    <div>
      <h1>hello there</h1> 
      {isError !== "" && <h2>{isError}</h2>} 
      {
        data.map((item,index)=>(
          <div key={item.id}>
            <div>{item.userId}</div>
            <div>{item.id}</div>
            <div>{item.body}</div>
            <div>{item.title}</div>
          </div>
        ))
      }
    </div>
  )
}

export default App