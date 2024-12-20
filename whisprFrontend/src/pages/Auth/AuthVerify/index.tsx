import React from 'react'
import checkMark from "../../../assets/check-mark.png"
import { Link } from 'react-router-dom'

const AuthVerifySuccess: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <img src={checkMark} alt='verify' className='w-[80px] h-[80px]' />
      <p className='text-center text-xs font-pops font-medium sm:text-sm md:text-lg '>Hurray🎉, Your account has been verified</p>
      <Link to="../../home" className='btn font-monte font-bold'>Start Chatting</Link>
    </div>
  )
}

export default AuthVerifySuccess