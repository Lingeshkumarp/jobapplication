import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage1=()=>{

     return(
        <>

<div class="topnav">
    
  <a class="active" href="#home">Home</a>
  <a href="#jobs">Jobs</a>
  <a href="#services">Services</a>
  <a href="#companies">Companies</a>
  <input class="search-container" type="text" placeholder="Search..."/>
</div>
<span className='name'>lingesh</span> 
    
        <div className='image'><img src="dashboard.png" alt="" width={"760px"} height={"300px"}/></div>

        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/remoteonetheme.svg" alt="Remote-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshersonetheme.svg" alt="Fresher-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/analyticsonetheme.svg" alt="Analytics-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/internshiponetheme.svg" alt="Internship-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineeringonetheme.svg" alt="Engineering-img"/>
        
        <div className='line'></div>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>

<div className='innerbox' width={"20px"} height={"20px"}></div>

<div className={'last'}>©2024 LK Inc. All rights reserved. LK® are registered trademarks.® Legal information.</div>

<footer>
        <div>
                About us<br></br>
                Careers<br></br>
                Privacy policy<br></br>
                Help center<br></br>
                Summons/Notices<br></br>
                Trust & safety<br></br>
        </div>
</footer>


        </>
     );
}

export default Homepage1;