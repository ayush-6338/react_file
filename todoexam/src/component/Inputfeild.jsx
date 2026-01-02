import React,{useRef} from 'react'

const Inputfeild = () => {
    let work=useRef();
    function handleSubmit(){
        let element = work.current.value;
        console.log(element);   
    }
  return (
    <div>
        <input type="text" placeholder="write your work" ref={work} className="border-2 "/>
        <button onClick={handleSubmit} className='border bg-blue-400'>submit</button>
    </div>
  )
}

export default Inputfeild
