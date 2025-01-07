import React from 'react'

export default function Footer() {
  return <>
  {/* all father div for the footer and copyright*/}
  <div className='bottom-0 left-0 right-0 fixed'>
    {/* footer */}
  <div className='bg-[#2C3E50] justify-between items-center h-[150px] grid grid-cols-3'>
    {/* left part */}
    <div className='p-5 text-center'>
      <p className='text-center text-3xl text-white'>Location</p>
      <p className='text-center text-white mb-5'>2215 John Daniel Drive</p>
      <p className='text-center text-white'>Clark, MO 65243</p>
    </div>
    {/* middle part */}
    <div className='p-5'>
    <p className='text-center text-3xl text-white mb-3'>Around the web</p>
    <div className='space-x-3'>
      <i class="fa-brands fa-facebook border-2 rounded-full p-2 text-2xl text-white"></i><i class="fa-brands fa-twitter border-2 rounded-full p-2 text-2xl text-white"></i><i class="fa-brands fa-linkedin border-2 rounded-full p-2 text-2xl text-white"></i><i class="fa-solid fa-globe border-2 rounded-full p-2 text-2xl text-white"></i>
    </div>
    </div>
    {/* right part */}
    <div className='p-5'>
      <p className='text-center text-white text-3xl'>ABOUT FREELANCER</p>
      <p className='text-center text-white'> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
    </div>
  </div>
  {/* copyright part */}
  <div className='bg-[#1A252F]'>
  <p className='text-white'>Copyright © Your Website 2021</p>
  </div>
  </div>
  </>
}
