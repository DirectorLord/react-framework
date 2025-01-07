import React from 'react'
import wooden from "../imgs/wooden.png"
import circus from "../imgs/circus.png"
import cake from "../imgs/cake.png"
export default function Portfolio() {
  return <>
  <div className='flex justify-center align-middle flex-nowrap bg-[#1ABC9C] h-[800px]'>
    <div>
    <p className='text-white text-5xl font-semibold c-aft p-3 border-white border-b-4 mt-12'>Portfolio Section</p>
    <div className='grid gap-x-8 gap-y-4 grid-cols-3 mt-5 p-5'>
      <div >
      <img src={wooden} alt="" className='rounded-md'/>
      </div>
      <div>
      <img src={cake} alt="" className='rounded-md'/>
      </div>
      <div>
      <img src={circus} alt="" className='rounded-md'/>
      </div>
      <div>
      <img src={wooden} alt="" className='rounded-md'/>
      </div>
      <div>
      <img src={cake} alt="" className='rounded-md'/>
      </div>
      <div>
      <img src={circus} alt="" className='rounded-md'/>
      </div>
    </div>
    </div>
    
  </div>
  </>
}
// className="bg-[url('../imgs/cake.png')]"
// correct syntax but doesnt work?????????