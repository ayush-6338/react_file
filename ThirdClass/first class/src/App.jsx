import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './new.css'
import Navbar from '../component/Navbar.jsx'
import Container from '../component/Container'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar />
    <Container />
    </>
  )
}

export default App
