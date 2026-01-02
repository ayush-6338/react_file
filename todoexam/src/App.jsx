import React from 'react'
import Inputfeild from './component/Inputfeild'

const App = () => {
  function changeTheme(){
    
  }
  return (
    <>
      <div className='flex justify-end'>
        <img src="https://cdn-icons-png.freepik.com/512/6929/6929008.png?ga=GA1.1.2035384993.1766319945" alt="dark  theme" className='w-30 h-30 p-6' onClick={changeTheme}></img>
      </div>
      <Inputfeild/>
    </>
  )
}

export default App
