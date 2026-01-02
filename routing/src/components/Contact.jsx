import React from 'react'

const Contact = () => {
  return (
    <div className='flex '>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29QlbqoE23wHDokRzgvyYiwkhd-jqzzxhGw&s" alt="contact img"></img>
      </div>
      <div className='flex flex-col space-y-3 '>
        <input type="text" placeholder='Your Name'/>
        <input type="text" placeholder='Your Name'/>
        <input type="textfield" placeholder='Your Name'/>
        <button>submit</button>
      </div>
    </div>
  )
}

export default Contact
