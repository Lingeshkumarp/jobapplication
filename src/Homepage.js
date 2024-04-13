import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage=()=>{

     return(
        <>
        <div className='outer-nav'>
        <nav className='navbar'>
            <a>Home</a>
            <a>Smart</a>
            <Link >Offers</Link>
            <Link>Store</Link>
            <Link className="home-btn" to={'/login'}>Login</Link>
            <div className='search-bar'></div>
        </nav>
        </div>
        <div className='image'><img src="watchgreen.jpg" alt="" width={"100%"} height={"300px"}/></div>
        <div className='image'><img src="watchOffer.png" alt="" width={"100%"} height={"300px"}/></div>
        <div className='image'><img src="cartWatch1.jpg" alt="" width={"30%"} height={"300px"}/></div>
        <div className='image'><img src="watch1.jpeg" alt="" width={"30%"} height={"300px"}/></div>
        <div className='line'></div>

<div className='innerbox' width={"20px"} height={"20px"}>int</div>

<div className={'last'}>©2024 LK Inc. All rights reserved. LK® are registered trademarks.® Legal information.</div>
<div className='row'>
    <div className='phone'>
    <div className='phone-ab'>
        <div className='phoneinner'>
            <img src=""></img>
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

export default Homepage;