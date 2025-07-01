
import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar/>
      {/* hero section */}
      <div className='flex justify-center items-center'>
        <div className='w-50 h-screen bg-red-300'></div>
        <div className='w-50 h-screen bg-yellow-200'></div>
      </div>
    </div>
  )
}

export default Login
