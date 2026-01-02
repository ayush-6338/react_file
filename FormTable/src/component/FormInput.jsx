import React, {useContext, useRef } from 'react'
import MyContext from './MyContext';

const FormInput = () => {    
  let {addData} = useContext(MyContext);
  let studentName=useRef();
  let studentRegNO=useRef();
  let studentCgpa=useRef();

  function handleClick(){
    let studentData = {
      name : studentName.current.value,
      regno : studentRegNO.current.value,
      cpga  : studentCgpa.current.value
    };
    addData(studentData);
  }
  return (
    <>
      <form onSubmit={handleClick} className='bg-black flex justify-center items-center p-3 text-2xl text-white space-x-6'>
        <input type="email" placeholder='Enter the email' className='border rounded p-3' ref={studentName} ></input>
        <input type="number" placeholder='Enter the number' className='border rounded p-3' ref={studentRegNO} ></input>
        <input type="password" placeholder="****-****" className ='border rounded p-3' minLength="8" required ref={studentCgpa}></input>
        <button type="submit" className='bg-amber-300 border rounded-3xl w-30 border-white '>Click to add</button>
      </form> 
    </>
  )
}

export default FormInput;
