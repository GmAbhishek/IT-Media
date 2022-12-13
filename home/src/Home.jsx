import React from 'react'
import './Home.css'
import backgroundVideo from './imgs/BG-vid.mp4';
import logo from './imgs/logo.png';
import {MdOutlineAccountCircle } from "react-icons/md";
export default function Home() {
  return (
    <> <div className='bg'>
    <video src={backgroundVideo} autoPlay loop muted/>
    </div>
    <header className='head-1'>
        <nav className="nav_1 main_nav">
          <ul>
            <li><a href="Home.html">HOME</a></li>
            <li><a href="Gallery.html">GALLERY</a></li> 
            <li> <a href="Events.html">EVENTS</a></li> 
            <img src={logo} id='logo' alt="IT" />
            <li> <a href="Uploads.html">UPLOADS</a></li>
            <li><a href="Support.html">SUPPORT</a></li>           
            <li id='icon'><MdOutlineAccountCircle/></li>                
          </ul>
        </nav>
        </header> 
        <div id='context'>
        <h1>Goal</h1>
        <div className='textWriting'><h2>"To Become Better<br></br> than the Best"</h2></div>
        <div><h1><u>WHAT WE ARE</u></h1></div>
        
        </div>
    </>
  )
}
