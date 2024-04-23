import React, { useState } from 'react';
import './Homepage1.css';

import { Link } from 'react-router-dom';

const Homepage1=()=>{
        const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

     return(
        <>
        <div className='scroll'>
<header>
<nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" ><svg xmlns="http://www.w3.org/2000/svg" height="50" width="90" viewBox="-11.493675 -16.3118 99.61185 97.8708"><path fill="#0a66c2" d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"/><path fill="#0a66c2" d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.74 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg></div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#"><Link to={"/profile"} alt="">Home</Link></a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Profile</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="search-bar">
    <input type="text" placeholder="Search..."/>
    <button type="button"><img src="//static.naukimg.com/s/7/103/i/search.57b43584.svg" alt class="searchIcon"/></button>
        </div>
        <div ><button className='Login-btn' >LOGIN</button></div> 
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>

</header>
{/* <span className='name'>lingesh</span>  */}
    
        <div className='image'><img src="dashboard.png" alt="" width={"760px"} height={"300px"}/></div>
        {/* <div className='text-over'><img className='overlay' src="homepage-rcb-one.png" alt="" width={"100%"} height={"300px"}/></div> */}

        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/remoteonetheme.svg" alt="Remote-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshersonetheme.svg" alt="Fresher-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/analyticsonetheme.svg" alt="Analytics-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/internshiponetheme.svg" alt="Internship-img"/>
        <img class="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineeringonetheme.svg" alt="Engineering-img"/>
        
        <div className='line'></div>
        <a href="https://www.ambitionbox.com/jobs/amazon-jobs" alt="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon-ot.png"><img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"}  width/></a>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>
        <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant-ot.png" class="chip-image-dim" alt="naulogo" height={"40px"} width/>

        <div className="outer3">
      <div className="inner3">
      <img className='img-box' src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon-ot.png' height={"40px"} width={"40px"} alt='' />
      <p>Amazon</p>
      {/* <p style={{paddingRight:80}}><span>&#8377; 355</span></p> */}
       <div className='rating' style={{}}>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>  
        <span className="fa fa-star"></span>
        </div> 
        <div>
            <button className='btn-reg'>REGISTER</button>
        </div>
      </div>
    </div>


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
</div>


        </>
     );
}

export default Homepage1;