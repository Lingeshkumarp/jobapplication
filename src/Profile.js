import React, { useState } from 'react';
import './Profile.css';

const Profile=()=>{
        
     return(
        <>
        <h2 style="text-align:center">User Profile Card</h2>

<div class="card">
  <img src="" alt="John" style="width:100%"/>
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div style="margin: 24px 0;">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>

        </>
     );
}

export default Profile;