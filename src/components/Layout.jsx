/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>

<div>
<Navbar />
    {children}
    <Footer/>
</div>


    </>
  )
}

export default Layout