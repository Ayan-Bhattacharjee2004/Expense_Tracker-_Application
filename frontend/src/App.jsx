import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='Container'>
      <Navbar/>
      <Sidebar></Sidebar>
    </div>
  )
}

export default App
