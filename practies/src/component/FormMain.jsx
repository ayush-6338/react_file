import React from "react";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";
const FormMain = ({apendData,data,deleteData})=>{
    return(
        <>
            <FormInput addData={apendData}/>
            <FormOutput data={data} deleteData={deleteData}/>
        </>
    )
}

export default FormMain;