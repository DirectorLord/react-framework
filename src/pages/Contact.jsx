import React from 'react'

export default function Contact() {
  return <>
  <div className='bg-[#1ABC9C] h-[800px]'>
    <p className='text-white text-5xl font-semibold c-aft p-3 border-b-8 border-white mt-9'>Contact Section</p>
    {/* form part */}
  <div>
    <input type="text" name="" id="" className='p-3 bg-slate-600 rounded-md w-[75%] mt-7' placeholder='Username'/>
    <input type="email" name="" id="" className='p-3 bg-slate-600 rounded-md w-[75%] mt-7' placeholder='Your Email'/>
    <input type="tel" name="" id="" className='p-3 bg-slate-600 rounded-md w-[75%] mt-7' placeholder='Your age'/>
    <input type="password" name="" id="" className='p-3 bg-slate-600 rounded-md w-[75%] mt-7' placeholder='Your password'/>
  </div>
  <button type="button" class="text-white bg-blue-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 mt-7">Submit</button>
  </div>
  </>
}
