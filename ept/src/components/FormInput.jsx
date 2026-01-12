import React, { useState } from 'react'


const FormInput = () => {
   const [emailData, setEmailData] = useState("");
   const [passwordData, setPasswordData] = useState("");
   const [submitted, setSubmitted] = useState(false);

   function handleSubmit(e){
        e.preventDefault();
        if(emailData.length === 0){
            return alert("email is required");
        }
        if(passwordData.length === 0){
            return alert("password is required");
        }
        if(!emailData.includes("@") && !emailData.includes(".")){
            return alert("your email missing @ or .");
        }
        if(passwordData.length < 8){
            return alert("password must be at least 8 characters");
        }        
        
        setSubmitted(true);
   }

   if (submitted) {
       return (
           <>
                <div className="flex flex-col gap-2 text-2xl justify-center items-center">
               <h1>Form Submitted</h1>
               <hr className="w-[200px] h-[2px] bg-black"/>
               <p>Email: {emailData}</p>
               <p>Password: {passwordData}</p>
                </div>
           </>
       );
   }

  return (
    <>
        <div className="flex flex-col gap-2 w-[200px] h-[200px] justify-center items-center">
            email:<input type="email" value={emailData} onChange={(e)=>setEmailData(e.target.value)} className="p-2 border rounded border-black"/>
            password:<input type="password" value={passwordData} onChange={(e)=>setPasswordData(e.target.value)} className="p-2 border rounded border-black" />
            <button onClick={(e)=>handleSubmit(e)} className="p-2 border rounded border-black bg-green-500">Submit</button>
        </div>
    </>
  )
}

export default FormInput