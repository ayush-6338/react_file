import React from 'react'

const Navbar = () => {
  return (
    <div class="flex justify-between items-center h-16 p-6 bg-gray-200">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ae-RHWEL4sUfohHrus_Qo-U8lNanAFoUUw&s" alt="logo" class="h-16.5 border-gray"></img>
      </div>
      <div class="flex justify-between space-x-6">
        <button class="border rounded h-10 w-17 bg-blue-300">Home</button>
        <button class="border rounded h-10 w-17 bg-blue-300">About</button>
        <button class="border rounded h-10 w-17 bg-blue-300">Contact</button>
      </div>
      <div>
        <button class="border rounded h-10 w-35 bg-red-300">Download App</button>
      </div>
    </div>
  )
}

export default Navbar
