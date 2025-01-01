import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'

const mainLayout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/> 

    {/* App file e Mainlayout ke parent hishabe treat kortasi jar under e child hocche Homepage er content, ekhon HomePage er content display korar jonno mainLayout er bhitore Outlet call korbo */}
    
    </>  )
}

export default mainLayout