import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [fullname,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   });
  const nav  = useNavigate();

  const handleFullname = (e) => {
    setFullname(e.target.value)
 };
 
  const handleEmail = (e) => {
    setEmail(e.target.value)
 };
 const handlePassword = (e) => {
   setPassword(e.target.value)
};

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:4000/signup',{fullname,email,password})
     .then(result=>console.log(result))
     .catch(err=>{console.log(err)
         nav('/login')
     })
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={fullname}
          onChange={handleFullname}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <div className='submit-btn' to="/login"  onClick={handleSubmit}>Sign Up</div>
      </form>
    </div>
  );
};

export default Signup;
