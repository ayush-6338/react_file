import React,{useEffect, useState,useCallback} from 'react'
import axios from "axios"
const App = () => {
  let [name,setName]=useState();
  let [email,setEmail]=useState();
  let [phone,setPhone]=useState();
  let [password,setPassword]=useState();
  let [fetchData,setFetchData] = useState([]);

  useEffect(()=>{
    axios.get("https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form").then((res)=>setFetchData(res.data));
  },[])
  function handleClick(a){
    setName(a.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!name || name.length<3){
      return alert("Name is required and should be at least 3 characters long");
    }
    if(!email){
      return alert("Email is required");
    }
    if(!phone || phone.length>10){
      return alert("Phone number is required");
    }
    if(!password || password.length>6){
      return alert("Password is required and should be at least 6 characters long");
    }
    else{
      alert("Form submitted successfully"); 
    }
    let data ={
      email : email,
      number : phone,
      password : password
    };
    axios.post("https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form",data).then((res)=>{
      setFetchData([...fetchData,res.data])
      setName("")
      setEmail("")
      setPhone("")
      setPassword("")
    })

    
  }
  let handleDelete= useCallback((id)=>{
    axios.delete(`https://692d2668e5f67cd80a4a4c63.mockapi.io/app/v1/Form/${id}`).then((res)=>setFetchData(fetchData.filter((val)=>val.id!==id)),[fetchData]);
    const renderedList = useMemo(()=>{
      return fetchData.map((a,b)=>
      <div key={a.id} className='flex justify-evenly items-center p-2'>
        <p>{a.email}</p>
        <p>{a.number}</p>
        <p>{a.password}</p>
        <div className="space-x-6">
          <button className='bg-green-900 text-white p-2 border rounded-full'>Edit</button>
          <button onClick={()=>{handleDelete(a.id)}} className='bg-red-900 text-white p-2 border rounded-full'>Delete</button>
        </div>
      </div>
      )
    },[fetchData,handleDelete])
  })
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className="space-x-4 p-4">
        <input type="text" name="name" className='bg-white border-2 border-blue-200 ' placeholder="Enter name" onChange={(e)=>handleClick(e)} />
        <input type="email" name="email" placeholder="Enter email" className='bg-white border-2 border-blue-200' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" name="number" placeholder="Enter phone_no" className='bg-white border-2 border-blue-200' onChange={(e)=>{setPhone(e.target.value)}}/>
        <input type="password" name="password" placeholder="Enter password" className='bg-white border-2 border-blue-200'onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" value="Submit" className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700'/>
        <input type="text" className='bg-black flex-none space-x-3 text-white px-2 py-1 rounded-md hover:bg-blue-500' placeholder='searching...'/>
      </form>
      {/* <div className='text-yellow-400 '>{name}</div>
      <div className='text-yellow-400 '>{email}</div>
      <div className='text-yellow-400 '>{phone}</div>
      <div className='text-yellow-400 '>{password}</div> */}
      <div>
        { fetchData.map((item,index)=>(
          <div key={index} className='flex justify-between items-center p-3 text-white'>
            <div>{item.id}</div>
            <div>{item.email}</div>
            <div>{item.number}</div>
            <div>{item.password}</div>
            <div className='flex-none space-x-4 ' > 
              <button className='border rounded-sm w-10 bg-green-700'>Edit</button>
              <button className='border rounded-sm w-15 bg-red-700' onClick={()=>{handleDelete(item.id)}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
