import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  

  const nav=useNavigate();

  const handleEmail = (e) => {
     setEmail(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
 };


  const handleSubmit = async(e) => {
    e.preventDefault();
   
    const res = await axios.post('https://jobapplicationbackend.onrender.com/login',{email,password})
    console.log(res)
    nav('/homepage')
  };

  return (
    <div className='login-outer'>
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        <div className='submit' to="/homepage"  onClick={handleSubmit}>Login</div>
      </form>
    </div>
    </div>
  );
};

export default Login;
