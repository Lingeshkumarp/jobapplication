import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage1=()=>{

     return(
        <>

<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search..."/>
</div>
    
        <div className='image'><img src="google-logo.png" alt="" width={"100%"} height={"300px"}/></div>
        <div className='line'></div>

<div className='innerbox' width={"20px"} height={"20px"}>int</div>

<div className={'last'}>©2024 LK Inc. All rights reserved. LK® are registered trademarks.® Legal information.</div>
<div className='row'>
    <div className='phone'>
    <div className='phone-ab'>
        <div className='phoneinner'>
            <img src="google-logo.png" width={"100px"}  height={"30px"} className='google-down'></img>
            <img src="app-store-logo.jpg" width={"260px"}  height={"300px"} className='app-down'></img>
        </div>
    </div>
    </div>

        <div className='laptop'>
            <div className='laptop-ab'></div>
        </div>
</div>



        </>
     );
}

export default Homepage1;