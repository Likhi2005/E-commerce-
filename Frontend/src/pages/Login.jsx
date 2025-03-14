import React from 'react'
import { useState } from 'react';

const Login = () => {

  

  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-30 gap-14 text-gray-800'>
    <div className='inline-flex items-cnter gap-2 mb-2 mt-10'>
      <p className='parata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px] mt-5 w-8 bg-gray-800'/>

    </div>

      {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800 mt-[-15px] rounded-sm ' placeholder='name' required />}
      <input type='email' className='w-full px-3 py-2 border border-gray-800 mt-[-15px] rounded-sm' placeholder='Email' required/>
      <input type='password' className='w-full px-3 py-2 border border-gray-800 mt-[-15px] rounded-sm' placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p>Forgot your password?</p>
        {
          currentState==='Login'
          ?<p onClick={()=>setCurrentState('SignUp')} className='cursor-pointer'>Create account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer  '>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
      
    </form>
  )
}

export default Login
