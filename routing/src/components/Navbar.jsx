import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div >
        <div className='bg-black text-white flex justify-evenly items-center'>
            <div className="flex justify-start p-3">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivE8jv2FSa2BLz0vd68Xx9GXSBwghCSBPeg&s' alt='logo' className='w-30 h-20'></img>
            </div>
            <div className='flex  space-x-5 '>
                <p>
                    <link to="/">Home</link>
                </p>
                <p>
                    <link to="/Contact">Contact</link>
                </p>
                <p>
                    <link to="/Navbar">About</link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
