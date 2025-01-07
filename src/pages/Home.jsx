import React from 'react'
import logo from '../imgs/avataaars.svg'
export default function Home() {
  return <>
  <div className='flex justify-around items-center bg-[#1ABC9C] h-[800px] flex-wrap'>
    <div>
    {/* the img */}
    <img src={logo} alt="" className='w-full mb-5'/>
    {/* div for the text */}
    <div>
    <p className='text-white text-4xl font-semibold c-aft p-3 border-b-8 border-white'>Start Framework</p>
    <p className='text-white mt-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  </div>
  </>
}
