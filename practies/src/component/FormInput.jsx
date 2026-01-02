import React, { useRef } from "react";
const FormInput = ({addData}) => {
    let inputName=useRef();
    let inputRegno=useRef();
    let inputCgpa=useRef();
    // console.log("FormInput props.addData:", addData, "type:", typeof addData);
    function handleAdd(){
        let data = {
            name : inputName.current.value,
            regno : inputRegno.current.value,  
            cgpa : inputCgpa.current.value
        }
        addData(data);
    }
    return(
        <>
            <div className="space-y-4 flex flex-col w-1/4 mx-auto mt-10 ">
            <input type="text" placeholder="Enter your name" className="border rounded" ref={inputName}/>  
            <input type="text" placeholder="Enter your reg no" className="border rounded" ref={inputRegno}/>
            <input type="text" placeholder="Enter your cgpa" className="border rounded" ref={inputCgpa}/>
            <button className="bg-yellow-800 text-white w-30 ml-40 border border-black rounded " onClick={handleAdd}>Click to add</button>
            </div>
        </>
    )
}

export default FormInput;