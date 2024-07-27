/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero_section from "../components/Hero_section"
import Footer from "../components/Footer"
import Card_component from '../components/Card_component'
import Dress_style from '../components/Dress_style'
import axios from 'axios'
import Layout from '../components/Layout'
function Home () {




  

  return (
    <>
    
<Layout>
<Hero_section/>
<Card_component/>
<Card_component/>
<Dress_style/>
</Layout>

{/* <Common_cumponent/> */}
    
    </>
  )
}

export default Home