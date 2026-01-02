import React from 'react'

const FormOutput = ({data,deleteData}) => {
  return (
    <>
    {
        data.map((val,index)=>(
            <div key={index} className='flex justify-between item-center m-3 border p-2 bg-gray-200'>
                <span>{index+1}</span>
                <span>{val.name}</span>
                <span>{val.regno}</span>
                <span>{val.cgpa}</span>
                <button className='bg-blue-300 w-30 border rounded' onClick={()=>{deleteData(index)}}>Delete</button>
            </div>
        ))
    }
    </>
  )
}

export default FormOutput
