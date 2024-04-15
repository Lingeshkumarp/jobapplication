import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage1=()=>{

     return(
        <>
        <nav className='navbar'>
        <div id="navbar">
            <a href="#" class="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
       </div>
            <Link className="home-btn" to={'/login'}>Login</Link> 
            <div className='search-bar'></div>
        </nav>
    
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