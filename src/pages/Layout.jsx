import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
export default function Layout() {
  return <>
  <Navbar/>
  <div className='m-0 p-0'>
  <Outlet/>
  </div>
  <Footer/>
  </>
}
